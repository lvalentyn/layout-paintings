import modals from './modules/modals';
import burger from './modules/burger';
import filter from './modules/filter';
import accordion from './modules/accordion';
import sliders from './modules/sliders';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	filter();
	burger('.burger-menu', '.burger');
	modals();
	accordion('.accordion-heading');
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	forms();
});