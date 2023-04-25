function parseCount(innit) {
		let a = parseFloat(innit);
		if (isNaN(a)) {
			throw new Error("Невалидное значение");
		} else {
			return a;
		}
}

function validateCount(innit) {
	try {
		let a = parseCount(innit);
		return a;
	} catch (error) {
		return error;
	}
}



class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		if (side1 + side2 < side3 || side2 + side3 < side1 || side3 + side1 < side2) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	get perimeter() {
		return  this.side1 + this.side2 + this.side3;
	}
	get area() {
		let p = this.perimeter / 2;
		let s = (p * (p - this.side1) * (p - this.side2) * (p - this.side3)) ** 0.5;
		return Number(s.toFixed(3));
	}
}

function getTriangle(side1, side2, side3) {
	try {
		return new Triangle(side1, side2, side3);
	} catch (error) {
		let i = {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			},
		};
		return i;
	}


}