//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		let hash = md5(args); //почему тут без spread-оператора?
		let objectInCache = cache.find(item => item.hash === hash)
		if (objectInCache) {
			console.log("Из кэша: " + objectInCache.value);
			return "Из кэша: " + objectInCache.value;
		}

		let result = func(...args);
		cache.push({
			hash,
			value: result
		});
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper
}




//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutID;

	function wrapper(...args) {
		if (!timeoutID) {
			wrapper.count++;
			func(args);
		} else {
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => {
			wrapper.count += 1;
			func(...args);
		}, delay)
		wrapper.allCount++;
	}

	wrapper.allCount = 0;
	wrapper.count = 0;
	return wrapper;
}