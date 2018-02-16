'use strict'

import React from 'react';
import moment from 'moment';
import { pick, values } from 'ramda';
import launchPropMap from '@/client/launchPropMap';

const launchTableColumns = pick([
	'flight_number',
	'launch_date_utc',
	'rocket',
	'launch_site'
], launchPropMap);

const launchHeaders = values(launchTableColumns);

const LaunchesTable = ({ launches, selectedIndex, onRowClick }) => (
	<table className='col-12'>
		<thead>
			<tr>{ launchHeaders.map((header, i) => (
				<th key={i}>{ header }</th>
			))}</tr>
		</thead>
		<tbody>{ launches.map((row, i) => (
			<tr
				key={i}
				onClick={() => onRowClick(i)}
				className={i == selectedIndex ? 'selected' : ''}
			>
				<td>{ row.flight_number }</td>
				<td>{ moment(row.launch_date_utc).format('MMMM Do YYYY') }</td>
				<td>{ row.rocket.rocket_name }</td>
				<td>{ row.launch_site.site_name_long }</td>
			</tr>
		))}</tbody>
	</table>
);

export default LaunchesTable;
