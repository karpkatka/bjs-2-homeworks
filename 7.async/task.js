class AlarmClock {
	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.find(item => item.time === time) != undefined) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(element => element.time != time)
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit"
		});
	}


	start() {
		if (this.intervalId != null) {
			return
		}
		let ring = setInterval(key => {
			this.alarmCollection.forEach(alarm => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000);
		this.intervalId = ring;
	};

	stop() {
		clearInterval(this.intervalID);
		this.intervalId = null;
	}
	resetAllCalls() {
		this.alarmCollection.forEach(key => key.canCall = true)
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}