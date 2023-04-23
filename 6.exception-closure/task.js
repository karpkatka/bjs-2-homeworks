function parseCount(innit) {
	try {
		let a = parseFloat(innit);
		if (isNaN(a)) {
			throw new Error("Невалидное значение")
		} else {
			return a
		}
	} catch (Error) {
		return Error
	}

}

function validateCount(innit) {
	try {
		let a = parseCount(innit);
		if (typeof a === "number") {
			return a;
		} else {
			throw new Error;
		}
	} catch (Error) {
		return Error
	}
}



class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		if (this.side1 + this.side2 < this.side3 || this.side2 + this.side3 < this.side1 || this.side3 + this.side1 < this.side2) {
			console.log("sdfs")
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	get perimeter() {
		return this.side1 + this.side2 + this.side3
	}
	get area() {
		let p = (this.side1 + this.side2 + this.side3) / 2
		let s = (p * (p - this.side1) * (p - this.side2) * (p - this.side3)) ** 0.5
		return Number(s.toFixed(3))
	}
}

function getTriangle(side1, side2, side3) {
	try {
		if (side1 + side2 < side3 || side2 + side3 < side1 || side3 + side1 < side2) {
			console.log("inside if of try");
			throw new Error;
		} else {
			return new Triangle(side1, side2, side3);
		}
	} catch (Error) {
		Triangle(side1, side2, side3).perimeter() = "Ошибка! Треугольник не существует";

	}

}