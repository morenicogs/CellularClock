function toBinArr(number, length = 0) {
	const bin = number.toString(2)
	const binArr = []
	for (let i = 0; i < bin.length; i++) {
		binArr.push(bin[i] * 1)
		
	}
	if(binArr.length < length){
		do {
			binArr.unshift(0)
		} while(binArr.length < length)
	}

	return binArr
}

function doubleDigits(number) {
	let newDoubleDig
	if(number < 10) {
		newDoubleDig = "0" + number
	} else {
		newDoubleDig = "" + number

	}
	return newDoubleDig
}