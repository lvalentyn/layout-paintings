const calc = (size, material, option, promocode, result) => {
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionBlock = document.querySelector(option),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);

	let sum = 0;

	const calcFunct = () => {
		sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionBlock.value));

		if (sizeBlock.value == '' || materialBlock.value == '') {
			resultBlock.textContent = 'Пожалуйста выберите размер и материал картины'
		} else if (promocodeBlock.value === 'IWANTIMPORTANT') {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else {
			resultBlock.textContent = sum;
		}
	};

	sizeBlock.addEventListener('change', calcFunct);
	materialBlock.addEventListener('change', calcFunct);
	optionBlock.addEventListener('change', calcFunct);
	promocodeBlock.addEventListener('input', calcFunct);

};

export default calc;