import modals from './modules/modals';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	burger('.burger-menu', '.burger');
	modals();
});