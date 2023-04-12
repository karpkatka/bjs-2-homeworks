function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			} else if (arr[i] > max) {
				max = arr[i];
			}
			sum += arr[i];
		};
		avg = Number((sum / arr.length).toFixed(2));
		return {
			min: min,
			max: max,
			avg: avg
		};
	} else {
		return 0
	}
}

function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum
	} else {
		return 0
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length > 0) {
		min = Math.min(...arr);
		max = Math.max(...arr);
		let diff = max - min;
		return diff
	} else {
		return 0
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let evenOddDiff = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i]
			} else {
				sumOddElement += arr[i]
			}
		}
		return evenOddDiff = sumEvenElement - sumOddElement
	} else {
		return 0
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let averageEven = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
				countEvenElement += 1;
			}
		}
		return averageEven = sumEvenElement / countEvenElement
	} else {
		return 0
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let funcResult = func(...arrOfArr[i]);
		if (funcResult > maxWorkerResult) {
			maxWorkerResult = funcResult
		}
	}
	return maxWorkerResult
}