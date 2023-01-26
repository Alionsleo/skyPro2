//Задание 1
let password = '123456';
let checkPassword = prompt('Введите пароль');

if ( password === checkPassword ) {
    console.log("Пароль введен верно");
}
else {
    console.log("Пароль введен неправильно");
}

//Задание 2
let c = 0;
//let c = 10;
//let c = -3;
//let c = 2;

if ( c > 0 && c < 10) console.log('Верно');
else console.log('Неверно')

//Задание 3
let d = 10;
let e = -3;
e > 100 || d > 100 ? console.log('Верно') : console.log('Неверно');

//Задание 4
let a = Number('2');
let b = Number('3');
alert(a + b);

//Задание 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;
    default: 
        break;
}

//Задание 7
let check = Number(prompt('Пожалуйста, введите любое число'));
if ( !isNaN(check) ) {
    if ( check % 2 === 0) alert('Число четное');
    else alert('Число нечетное');
}
else alert('Некорректное число');

//Задание 8
let clientOS = 0; //0 — iOS, 1 — Android
if(clientOS === 0) alert('Установите версию приложения для iOS по ссылке');
else if(clientOS === 1) alert('Установите версию приложения для Android по ссылке');

//Задание 9
let yearDevice = 2016;
if(clientOS === 0 && yearDevice < 2015) alert('Установите облегченную версию приложения для iOS по ссылке');
else if(clientOS === 0 && yearDevice >= 2015) alert('Установите версию приложения для iOS по ссылке');
else if(clientOS === 1 && yearDevice < 2015) alert('Установите облегченную версию приложения для Android по ссылке');
else if(clientOS === 1 && yearDevice >= 2015) alert('Установите версию приложения для Android по ссылке');
