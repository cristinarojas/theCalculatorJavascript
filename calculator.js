(function() {
	function squareNumber(number) {
		var square = Math.pow(number, 2);
		console.log('The result of squaring the number ' + number 
		+ ' is ' + square + ' '); 
		return square;
	}

	squareNumber(3);

	function halfNumber(number) {
		var half = (number/2);
		console.log('Half of ' + number + ' is ' + half); 
		return half;
	}

	halfNumber(5);

	function percentOf(num1, num2) {
		var percent = (num1/num2) * 100;
		console.log(num1 + ' is ' + percent + '% of ' + num2);
		return percent;
	}

	percentOf(5, 10);

	function areaOfCircle(radius) {
		var area = (3.1416 * Math.pow(radius, 2)); // radius * radius 
		area = area.toFixed(2);
		console.log('The area for a circle with ' + radius + ' is ' + area);
		return area;
	}

	areaOfCircle(2);

	function generalOperations(number) {
		var half = halfNumber(number);
		var square = squareNumber(half);
		var area = areaOfCircle(square);
		var result = percentOf(square, area);
	}

	generalOperations(5);

})();

