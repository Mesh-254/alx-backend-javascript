export interface Teacher {
    // an interface for teacher
    readonly firstName: string
    fullTimeEmployee: boolean
    readonly lastName: string
    location: string
    yearsOfExperience?: number
    [index: string]: any
}


export interface Directors extends Teacher {
    // an interface for director extending teacher
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string) {
    // a function to print teacher
// with arguments firstName and lastName
    return `${firstName.slice(0, 1)}. ${lastName}`
}

export interface printTeacherFunction {
    // an interface for the function print teacher
    (firstName: string, lastName: string): string
}

export interface Student {
    // an interface for student class

    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements Student {
// a class for student class
    private readonly _firstName: string;
   private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return `Currently working`
    }

    displayName(): string {
        return `${this._firstName}`
    }
}


// testing and examples
// test director interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}
console.log(director1);

// test teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);

// test print teacher function
console.log(printTeacher('John', 'Doe'))

// test class student
const student1: StudentClass = new StudentClass('John', 'Doe');
console.log(student1.displayName());
