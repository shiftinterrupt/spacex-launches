'use strict'

import React from 'react';
import moment from 'moment';

const Launch = ({ selected }) => (
	<div>
		<div className='col-3 col-m-3 mission-patch'>
			<img src={ selected.links.mission_patch } className='mission-patch'/>
		</div>
		<div className='col-9 col-m-9 launch-data'>
			<div className='row'>
				<div className='col-3 col-m-3'>
					<label>Flight</label>
					<span className='value'>{ selected.flight_number }</span>
				</div>
				<div className='col-9 col-m-9'>
					<label>Launch Date</label>
					<span className='value'>{ moment(selected.launch_date_utc).format('MMMM Do YYYY') }</span>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 col-m-12'>
					<label>Rocket</label>
					<span className='value'>{ selected.rocket.rocket_name }</span>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 col-m-12'>
					<label className=''>Details</label>
					<span className='details'>{ selected.details }</span>
				</div>
			</div>
		</div>
	</div>
);

export default Launch;
