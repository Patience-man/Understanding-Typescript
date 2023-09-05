interface User {
    name: string;
    id: number;
}

function add(number1: number, number2: number) {
    return number1 + number2;
}

const number1 = 5;
const number2 = 2.9;
const result = add(number1, number2);

class UserData {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id; 
    }
}

const user: User = new UserData("patience", 10);

console.log(user);