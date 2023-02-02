
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
//Курс 2.6
//Задание 1
const mass1 = [1, 5, 4, 10, 0, 3];

for(let i = 0; i < mass1.length; i++) {
    console.log(mass1[i]);
    if(mass1[i] === 10) break;
}

//Задание 2
const mass2 = [1, 5, 4, 10, 0, 3];
let key = 0;
for(let i = 0; i < mass2.length; i++) {
    if(mass2[i] == 4) {
        key = i;
        break;
    }
}

console.log(`Позиция 4 в массиве ${mass2} - ${key}`);

//Задание 3
let mass3 = [1, 3, 5, 10, 20];
console.log(mass3.join(' '));

//Задание 4
let mass4 = [];
let mass4Honest = [];
for(i = 0; i < 10; i++) {
    mass4.push(Math.floor(Math.random() * 10));
    if(mass4[i] % 2 == 0) mass4Honest.push(mass4[i]);
}
console.log(`Начальный массив ${mass4.join(' ')}`);
console.log(`Массив четных чисел начального ${mass4Honest}`);
//Задание 5
let mass = [];
for(let i = 0; i < 3; i++) {
    mass[i] = [];
    for(let j = 0; j < 3; j ++) 
    mass[i][j] = 1;
}
console.log(mass);
//Задание 6
let mass6 = [1, 1, 1];
console.log(mass6.concat([2, 2, 2]));

//Задание 7
let mass7 = [9, 8, 7, 'a', 6, 5];
mass7 = mass7.sort();
mass7.pop();
console.log(mass7);

//Задание 8 //демо forEach, но можно проще
const mass8 = [9, 8, 7, 6, 5];
let check = +prompt(`Введите число от 0 до 10`);
let res = false;
if(!isNaN(check) && check >= 1 && check <= 10) {
    mass8.forEach(item => {
        if(item === check) res = true;
    });
}
if(res) console.log(`Число ${check} содержится в массиве [${mass8.join(', ')}]`);
else console.log(`Число ${check} не содержится в массиве [${mass8.join(', ')}]`)
//Задание 9
let str = 'abcdef'.split('');
let strReplace = [];
const strLen = str.length;
for(let i = 0; i < strLen; i++) 
    strReplace.push(str.pop());
console.log(strReplace.join(''));

//Задание 10
let mass10 = [];
let sum = 0;
for(let i = 0; i < 6; i++) {
    mass10.push(Math.floor(Math.random() * 10));
    sum += mass10[i];
}
sum /= mass10.length;
console.log(`Среднее арифметическое чисел [${mass10.join(', ')}] = ${sum}`);

//Задание 11
let mass11 = [[1, 2, 3,],[4, 5, 6]];
console.log(`[${mass11[0].concat(mass11[1]).join(', ')}]`);

//Задание 12 //сделала обход одним циклом
let mass12 = [];
const count = 6;
for(let i = 0; i < count; i++) {
    mass12.push(Math.floor(Math.random() * 10));
    if(i > 0 && i <= count - 1) console.log(`Сумма ${i-1}-го и ${i}-го элементов равна ${mass12[i-1] + mass12[i]}`);
}
console.log(`Начальный массив [${mass12.join(', ')}]`);