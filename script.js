//complete this code
class Person {
	constructor(name, age){
		this._age = age;
		this._name = name;
	}

	get name(){
		return this._name;
	}
	set age(age){
		this._age = age;
	}
}

class Student extends Person{
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
let person = new Person("albert",29);
console.log(person.name);
person.age = 30;

let student = new Student("Albert",20);
console.log(student.name);
student.study();
let teacher = new teacher("janni",25);
console.log(teacher.name);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
