"use strict";
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    // a class for director
    Director.prototype.getCoffeeBreak = function () {
        return "";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getToWork = function () {
        return "Getting a coffee break";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    // a class for teacher
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
exports.createEmployee = createEmployee;
function isDirector(employee) {
    return employee instanceof Director;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching math';
    }
    return 'Teaching history';
}
exports.teachClass = teachClass;
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
console.log(teachClass('Math'));