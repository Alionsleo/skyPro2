//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let firstIphone = 2007;
alert(`Год выпуска первого айфона: ${firstIphone}`);

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
result = 2**5;
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