// May 3, 2017

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Counter from './components/counter';
import Table from './components/table';
import DatePicker from './components/DatePicker';

export default (

	<Route path = '/' component = { App } >
		<IndexRoute component = { DatePicker } />
		<Route component = { Table } />
	</Route>

);