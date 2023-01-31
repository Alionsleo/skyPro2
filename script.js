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

*/

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

