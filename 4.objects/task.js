function Student(name, gender, age) {
  this.name = name;
  this.gender = gender; 
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Katya", "female", 23);
let student2 = new Student("Trixie", "female", 24);
let student3 = new Student("Dela", "female", 22);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if ("marks" in this) {
          this.marks.push(...marksToAdd);
    }
}


Student.prototype.getAverage = function () {
    if (this.marks){
        return this.marks.reduce((acc, mark, index, marks) => {
        acc += mark;
        if (index === this.marks.length - 1){
            return acc / this.marks.length
        }
        return acc
    }, 0)
  } 
  return 0
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
