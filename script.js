
//Задание 2.5#7
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
// //Курс 2.6
// //Задание 1
// const mass1 = [1, 5, 4, 10, 0, 3];

// for(let i = 0; i < mass1.length; i++) {
//     console.log(mass1[i]);
//     if(mass1[i] === 10) break;
// }

// //Задание 2
// const mass2 = [1, 5, 4, 10, 0, 3];
// console.log(`Позиция 4 в массиве ${mass2} - ${mass2.indexOf(4)}`);

// //Задание 3
// let mass3 = [1, 3, 5, 10, 20];
// console.log(mass3.join(' '));

// //Задание 4
// let mass4 = [];
// let mass4Honest = [];
// for(i = 0; i < 10; i++) {
//     mass4.push(Math.floor(Math.random() * 10));
//     if(mass4[i] % 2 == 0) mass4Honest.push(mass4[i]);
// }
// console.log(`Начальный массив ${mass4.join(' ')}`);
// console.log(`Массив четных чисел начального ${mass4Honest}`);

// //Задание 5
// let mass = [];
// for(let i = 0; i < 3; i++) {
//     mass[i] = [];
//     for(let j = 0; j < 3; j ++) 
//     mass[i][j] = 1;
// }
// console.log(mass);

// //Задание 6
// let mass6 = [1, 1, 1];
// mass6.push(2, 2, 2);
// console.log(mass6);

// //Задание 7
// let mass7 = [9, 8, 7, 'a', 6, 5];
// mass7 = mass7.sort();
// mass7.pop();
// console.log(mass7);

// //Задание 8 
// const mass8 = [9, 8, 7, 6, 5];
// let check = +prompt(`Введите число от 1 до 10`);
// let res = false;
// if(!isNaN(check) && check >= 1 && check <= 10) {
//     res = mass8.includes(check);
// }
// if(res) console.log(`Число ${check} содержится в массиве [${mass8.join(', ')}]`);
// else console.log(`Число ${check} не содержится в массиве [${mass8.join(', ')}]`);

// //Задание 9
// let str = 'abcdef'.split('').reverse().join('');

// console.log(str);

// //Задание 10
// let mass10 = [];
// let sum = 0;
// for(let i = 0; i < 6; i++) {
//     mass10.push(Math.floor(1 + Math.random() * 10));
//     sum += mass10[i];
// }
// sum /= mass10.length;
// console.log(`Среднее арифметическое чисел [${mass10.join(', ')}] = ${sum}`);

// //Задание 11
// let mass11 = [[1, 2, 3,],[4, 5, 6]];
// console.log(`[${mass11.flat().join(', ')}]`);

// //Задание 12 //сделала обход одним циклом
// let mass12 = [];
// const count = 15;
// for(let i = 0; i < count; i++) {
//     mass12.push(1 + Math.floor(Math.random() * 10));
//     if(i > 0 && i <= count - 1) console.log(`Сумма ${i-1}-го и ${i}-го элементов равна ${mass12[i-1] + mass12[i]}`);
// }
// console.log(`Начальный массив [${mass12.join(', ')}]`);

/*//курс 2.7
//задание 1
let str = 'Привести к верхнему регистру';
console.log(str.toUpperCase());

//задание 2
const searchStr = (mass, str) => {
    reg = new RegExp(str, 'gi');
    const retMass = [];
    mass.forEach(element => {
        if(reg.test(element)) retMass.push(element);
    });
    return retMass;
}

console.log(searchStr(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStr(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStr(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//задание 3
let num = 32.58884;
console.log(`Округление числа ${num} в большую сторону: ${Math.ceil(num)}`);
console.log(`Округление числа ${num} до целого числа: ${Math.round(num)}`);
console.log(`Округление числа ${num} в меньшую сторону: ${Math.floor(num)}`);

//задание 4
let numMass = [52, 53, 49, 77, 21, 32];
let min = 10000;
let max = -10000;
numMass.forEach(num => {
    if(num < min) min = num;
    if(num > max) max = num;
});
console.log(`Начальный массив: [${numMass.join(', ')}]`);
console.log(`Минимальное число: ${min}`);
console.log(`Макссимальное число: ${max}`);
//или
numMass.sort();
console.log(`Минимальное число: ${numMass[0]}`);
console.log(`Макссимальное число: ${numMass[numMass.length - 1]}`);

//задание 5
const randNum = () => {
    return Math.floor(1 + Math.random() * 10);
}
console.log(randNum());

//задание 6
const randMass = (a) => {
    const mass = [];
    for(i = 0; i < Math.floor(a / 2); i++) {
        mass.push(Math.floor(Math.random() * (a + 1)));
    }
    return mass;
}

console.log(`[${randMass(8).join(', ')}]`);

//задание 7
const randInterval = (a, b) => {
    return Math.floor(a + Math.random() * (b - a + 1));
}

console.log(randInterval(2, 7));

//задание 8
let currentDate = new Date();
console.log(currentDate);

//задание 9
console.log(new Date(currentDate.setDate(currentDate.getDate() + 73)));

//задание 10
const getRussianDate = (curDate) => {
    date = new Date(curDate);
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + 
    date.getFullYear() + " - это " + days[date.getDay()] + ". Время: " + 
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

console.log(getRussianDate(new Date()));*/

//задание 11
const gameWord = () => {
    const word = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    word.sort(()=>Math.random()-0.5);
    alert(word.join(', '));
    let first = prompt('Чему равнялся первый элемент массива?').toLowerCase();
    let second = prompt('Чему равнялся последний элемент массива?').toLowerCase();
    if(word[0].toLowerCase() === first && word.slice(-1)[0].toLowerCase() === second)
        alert("Поздравляю, Вы угадали оба слова!");
    else if(word[0].toLowerCase() === first || word[word.length - 1].toLowerCase() === second)
        alert("Вы были близки к победе!");
    else alert("Вы ответили неверно :(");
};

//Курс 2.8
//Задание 1
const mult = (a, b) => {
    return a * b;
}
const sum = (a, b) => {
    return a + b;
}

const getResult = (a, func) => {
    return a.reduce(func);
}

console.log(getResult([1, 3, 5, 6], mult))
console.log(getResult([1, 3, 5, 6], sum))

//задание 2
const users = [
    {name: 'Jon', age: 22},
    {name: 'Richard', age: 18},
    {name: 'Anton', age: 32},
    {name: 'Lida', age: 23},
    {name: 'Bob', age: 44}
];

const compareFunction = (a, b) => {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
}

users.sort(compareFunction);
console.log(users);

//задание 3
const  reversArr = (arr) => {
    return arr.reverse();
}

const toNumArr = (arr) => {
    temp = [];
    arr.forEach(el => {
        if(!isNaN(el)) {
            temp.push(Number(el));
        }
    });
    return temp;
}

const each = (arr, func) => {
    return func(arr);
}

console.log(each([34, 54, 'ere'], reversArr));
console.log(each([1, '4', false, 9, 'two'], toNumArr));

//задание 4
const timer = (deadline, int = 1) => {
    const interval = setInterval(() => {
        nowDate = new Date();
        console.log(nowDate);
    }, int * 1000);


    setTimeout(() => {
        clearInterval(interval);
        console.log(`${deadline} секунд прошло`)
    }, deadline * 1000)
};

timer(30, 3);

//задание 5
function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);