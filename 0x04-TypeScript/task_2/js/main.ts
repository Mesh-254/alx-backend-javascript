interface DirectorInterface {
    // an interface for director
    workFromHome(): string

    getCoffeeBreak(): string

    workDirectorTasks(): string
}

interface TeacherInterface {
    // an interface for teacher
    workFromHome(): string

    getCoffeeBreak(): string

    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    // a class for director
    getCoffeeBreak(): string {
        return "";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

    workFromHome(): string {
        return "Working from home";
    }

    getToWork(): string {
        return "Getting a coffee break";
    }
}

class Teacher implements TeacherInterface {
    // a class for teacher

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workFromHome(): string {
        return "Cannot work from home";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

export function createEmployee(salary: (number | string)): (Director | Teacher) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

export function isDirector(employee: (Teacher | Director)): boolean {
    return employee instanceof Director;
}

export function executeWork(employee: (Teacher | Director)) {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

export type Subjects = ('Math' | 'History');

export function teachClass(todayClass:Subjects):string{
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching history';

}

    console.log(createEmployee(200));
    console.log(createEmployee(1000));
    console.log(createEmployee('$500'));

    console.log(teachClass('Math'))
    