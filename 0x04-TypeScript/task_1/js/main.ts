// 1. Let's build a Teacher interface
interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[key: string]: any
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  yearsOfExperience: 5,
};

console.log(teacher3);


// 2. Extending the Teacher class
interface Directors extends Teacher {
	numberOfReports: number,
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// 3. Printing teachers
interface printTeacherFunction {
	(param1: string, param2: string): string;
}

let printTeacher: printTeacherFunction;
printTeacher = function(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("John", "Doe"));


// 4. Writing a class
interface Student {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}


class StudentClass implements Student {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return 'Currently working';
	}
	displayName(): string {
		return this.firstName;
	}
}


const studentFactory: StudentConstructor = StudentClass;

const student: Student = new studentFactory('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());
