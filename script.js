/*//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let yearFirstIphone = 2007;
alert(`Год выпуска первого айфона: ${yearFirstIphone}`);

//Задание 3
let jsCreator = "Брендан Эйх или Айк";
alert(`Создатель языка JavaScript: ${jsCreator}`);

//Задание 4
let first = 10;
let second = 2;
alert(`${first} + ${second} = ${first + second}`);
alert(`${first} - ${second} = ${first - second}`);
alert(`${first} * ${second} = ${first * second}`);
alert(`${first} / ${second} = ${first / second}`);

//Задание 5
let result = 2**5;
alert(`2^5 = ${result}`);

//Задание 6
let A = 9;
let B = 2;
alert(`Остаток от деления ${A} на ${B} = ${A % B}`)

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt('Сколько вам лет?');
alert(age);

//Задание 9.0
let user = {
    name: "Тарас",
    age: 23,
    idAdmin: true
};

//Задание 9.1
user['city of residence'] = 'New-York';

//Задание 9.2
user.age = 24;

//Задание 9.3
delete user['city of residence'];

//Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//Задание 10
let nameUser = prompt('Как вас зовут?');
alert(`Привет, ${nameUser}`);



//Задание 1
for(let i = 0; i < 2; i++) {
    console.log('Привет');
}

//Задание 2
for(let i = 2; i <= 5; i++) {
    console.log(i);
}

//Задание 3
for(let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (const objItem in obj) {
    console.log(`${objItem}  — зарплата ${obj[objItem]} долларов.`)
}

//Задание 5
let num = 0;
let n = 1000;
while(n > 50) {
    n /= 2;
    num++;
}
console.log(`Получится число ${n}`);
console.log(`Количество необходимых итераций: ${num}`);

//Задание 6
let firstFriday = 6;

for(let i = firstFriday; i <= 31; i+=7) {
    console.log(`Сегодня пятница ${i}-е число`);
} 
*/
//Урок 5
//Задание 1
const returnLess = (a, b) => {
    return (a > b) ? b : a;
};

console.log(`Меньшее из двух чисел 5 и 2: ${returnLess(5, 2)}`);

//Задание 2
const evenNumber = (a) => {
    return a % 2 === 0 ? 'число четное' : 'число нечетное'; 
};

console.log(`7 - ${evenNumber(7)}`);

//Задание 3
const printSquareNumber = (a) => console.log(`Печатаем квадрат числа ${a}: ${a**2}`);
const returnSquareNumber = (a) => {
    return a ** 2;
};

printSquareNumber(3);
console.log(`Возвращаем квадрат числа 5: ${returnSquareNumber(5)}`);

//Задание 4
const getUserOld = () => {
    let old = +prompt('Сколько Вам лет?');
    if(old < 0) alert('Вы ввели неправильное значение.');
    else if(old >= 0 && old <= 12) alert('Привет, друг!');
    else if(old >= 13) alert('Добро пожаловать!')
}

getUserOld();

//Задание 5
const checkNumbers = () => {
    let firstNum = +prompt('Введите первое число');
    let secondNum = +prompt('Введите второе число');
    if(!isNaN(firstNum * secondNum)) return `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
    else return 'Одно или оба значения не являются числом';
}

console.log(checkNumbers());

//Задание 6
const userSquareNumber = (a) => {
    if(isNaN(a)) return 'Переданный параметр не является числом';
    else return `${a} в кубе равняется ${a ** 2}`;
}

console.log(userSquareNumber('sdfsd'));//пример для не числа
for(let i = 0; i < 11; i++) {
    console.log(userSquareNumber(i));
}

//Задание 7
const gameSeasons = () => {
    let month = +prompt('Введите число от 1 до 12');
    if(isNaN(month)) alert('Введено неверное значение');
    else {
        switch (month) {
            case 1:
            case 2:
            case 12:
                alert("Зима");
                break;
            case 3:
            case 4:
            case 5:
                alert("Весна");
                break;
            case 6:
            case 7:
            case 8:
                alert("Лето");
                break;
            case 9:
            case 10:
            case 11:
                alert("Осень");
                break;
            default: 
                alert("Вы ввели значение не попадающее ни под одно время года");
                break;
        }
    }
}