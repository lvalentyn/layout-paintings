import modals from './modules/modals';
import burger from './modules/burger';
import filter from './modules/filter';
import accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	filter();
	burger('.burger-menu', '.burger');
	modals();
	accordion('.accordion-heading');
});