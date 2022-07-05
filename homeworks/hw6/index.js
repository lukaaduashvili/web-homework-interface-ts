
function getCalculatorElement(){
	const div = createElement("div", "calculator","")
	const firstInput = createElement("input", "number1", "")
	const secondInput = createElement("input", "number2", "")
	const firstButton = createElement("button", "add", "+")
	const secondButton = createElement("button", "substract", "-")
	const span = createElement("span", "result", "")
	div.appendChild(firstInput)
	div.appendChild(secondInput)
	div.appendChild(firstButton)
	div.appendChild(secondButton)
	div.appendChild(span)
	return div;
}

function createElement(type, in_id, text){
	const result = document.createElement(type)
	result.id = in_id
	result.textContent = text
	return result
}
