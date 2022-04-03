import modals from './modules/modals';
import burger from './modules/burger';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	filter();
	burger('.burger-menu', '.burger');
	modals();
});