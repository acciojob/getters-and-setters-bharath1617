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

class Student extends person{
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
