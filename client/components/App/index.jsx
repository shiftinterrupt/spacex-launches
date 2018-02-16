'use strict'

import React from 'react';
import Axios from 'axios';
import moment from 'moment';
import { map, pick, keys } from 'ramda';
import MainHeader from './MainHeader';
import Launch from '../Launch';
import LaunchesTable from '../LaunchesTable';
import launchPropMap from '@/client/launchPropMap';
import styles from './style';

const launchProps = keys(launchPropMap);

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			launches: [],
			selectedIndex: 0,
			error: false
		};

		this.onRowClick = this.onRowClick.bind(this);
	}

	onRowClick(selectedIndex) {
		this.setState({ selectedIndex });
	}

	componentDidMount() {
		Axios.get('https://api.spacexdata.com/v2/launches', {
			params: {
				order: 'desc'
			}
		}).then(response => {

			const { data, status } = response;

			if (status === 200) {
				this.setState({ launches: map(pick(launchProps))(data) });
			} else {
				this.setState({ error: true });
			}
		});
	}

	render() {

		const { launches, selectedIndex, error } = this.state;
		const selected = launches.length ? launches[selectedIndex] : null;

		return (
			<div>
				<MainHeader/>
				<div className='row launch'>
					{ selected && <Launch selected={selected} /> }
					{ error && <div className='error'>An network error has occurred</div> }
				</div>
				<div className='row launches'>
					<LaunchesTable
						launches={launches}
						selectedIndex={selectedIndex}
						onRowClick={this.onRowClick}
					/>
				</div>
			</div>
		);
	}
}
