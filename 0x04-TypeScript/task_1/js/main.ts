interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[key: string]: any
}

interface Directors extends Teacher {
	numberOfReports: number,
}

interface printTeacherFunction {
	(param1: string, param2: string): string;
}

let printTeacher: printTeacherFunction;
printTeacher = function(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
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

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

console.log(printTeacher("John", "Doe"));
