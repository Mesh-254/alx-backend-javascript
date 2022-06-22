"use strict";
exports.__esModule = true;
exports.StudentClass = exports.printTeacher = void 0;
function printTeacher(firstName, lastName) {
    // a function to print teacher
    // with arguments firstName and lastName
    return "".concat(firstName.slice(0, 1), ". ").concat(lastName);
}
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return "".concat(this._firstName);
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
// testing and examples
// test director interface
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
// test teacher interface
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
// test print teacher function
console.log(printTeacher('John', 'Doe'));
// test class student
var student1 = new StudentClass('John', 'Doe');
console.log(student1.displayName());
