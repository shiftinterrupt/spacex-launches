'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const run = () => ReactDOM.render(<App/>, document.querySelector('main'));

if (['complete','interactive'].includes(document.readyState) && document.body) {
	run();
} else {
	window.addEventListener('DOMContentLoaded', run, false);
}
