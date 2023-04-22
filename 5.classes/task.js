class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	};
	/*от этих геттеров и сеттеров изменяется свойство state на _state*/
	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}
	get state() {
		return this.state = this._state
	};
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super();
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}


class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}
	//element.type вроде обращение к значению свойства type, но не работает 
	findBookBy(type, value) {
		if (this.books.find(element => element[type] === value)) {
			return this.books.find(element => element[type] === value)
		} else {
			return null;
		}
	}
	giveBookByName(bookName) {
		let requestedBook = this.books.find(element => element.name === bookName);
		if (requestedBook === undefined) {
			return null;
		} else {
			this.books.splice(requestedBook, 1);
			return requestedBook;
		}
	}
}


class Student {
    constructor(name, marks){
        this.name = name; 
        this.marks = {};
    }
    addMark(mark,subject){
		if (mark < 2 || mark > 5) {
			return;
		} else {
			if (this.marks.hasOwnProperty(subject)) {
				this.marks[subject].push(mark);
			} else {
          this.marks[subject] = [mark];
        }
	}
    }
	getAverageBySubject(subject) {
		let averageForSubject = 0;
		if (!this.marks[subject]){
		  return 0;
		} else { averageForSubject = this.marks[subject].reduce((acc, mark, index, marks) => {
		  acc += mark;
		  if (index === marks.length - 1) {
			return acc / marks.length;
		  }
		  return acc;
		}, 0);
		  return averageForSubject;
	  }
	  }
	  getAverage() {
		let totalAverage = 0;
		if (Object.keys(this.marks).length === 0) {
			return 0;
		} else {
			let a = 0;
			for (let key of Object.keys(this.marks)) {
		  totalAverage += this.getAverageBySubject(key);
	  }
    return a = totalAverage / Object.keys(this.marks).length;
		}
}
};