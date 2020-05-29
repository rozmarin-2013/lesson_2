/* task 1*/

    //  let name = prompt('Ваше имя'),
    //     age = prompt('Ваш возраст'),
    //     city = prompt('Ваш город'),
    //     phone = prompt('Ваш телефон'),
    //     email = prompt('Ваш email'),
    //     company = prompt('Ваше компания');

    // alert(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в
    //         городе ${city} и работаю в компании ${company}. Мои контактные данные:
    //         ${phone}, ${email}..`
    //     );
 
    // let dateNow = new Date();
    // let yearBirth = dateNow.getFullYear() - age;

    // alert(`${name} родился ${yearBirth} году.`);

/* task 3 */

    // let sum,
    //     number = 123456,
    //     sumFirstDigit,
    //     sumLastDigit,
    //     message = 'нет',
    //     stringNumber = String(number);
    
    // if (stringNumber.length == 6) {    

    //     sumFirstDigit = stringNumber[0] + stringNumber[1] + stringNumber[2];
    //     sumLastDigit = stringNumber[3] + stringNumber[4] + stringNumber[5];

    //     if (sumFirstDigit == sumLastDigit) {
    //         message = 'да';
    //     }
    // }

    // alert(message);
    
/* task 4 */

// let a = prompt('Введите значение a');

// (a > 0) ? message = 'Верно' : message = 'Не верно';

// alert(message);

/* task 5 */

a = 10;
let b = 2;

console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);

if ((a + b) > 0) {
    console.log(`(a + b)**2 = ${(a + b) ** 2}`);
}

/* task 6 */

if (a > 2 && a < 11) {
    console.log('Верно');
} else if(b >= 6 && b < 14) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

/* task 7 */

let n = 62;

if (n < 0 || n > 59) {
    console.log('число д.б. от 0 до 59');
} else if (n < 15) {
    console.log('1 ая четверть часа');
} else if (n < 30) {
    console.log('2 ая четверть часа');
} else if (n < 5) {
    console.log('3 ая четверть часа');
} else if (n < 60) {
    console.log('4 ая четверть часа');
} 

/* task  8 */

let day = 33;

if (day < 0 || day > 31) {
    console.log('число д.б. от 0 до 31');
} else if (day < 11) {
    console.log('1 ая декада');
} else if (day < 21) {
    console.log('2 ая декада');
} else if (day < 32) {
    console.log('3 ая декада');
} 

/* task  9 */

let year,
    month,
    week,
    numberDays = 546.5;

console.log('количесво дней ' + numberDays);

year =  numberDays / 365;

if (year > 0) {
    console.log('количесво лет ' + year);
} else {
    console.log('Меньше года');
}

month = numberDays / 31;

if (month > 0) {
    console.log('количесво месяцев' + month);
} else {
    console.log('Меньше месяца');
}

week = numberDays / 7;

if (month > 0) {
    console.log('количесво недель ' + week);
} else {
    console.log('Меньше недели');
}

console.log('Количество часов ' + numberDays * 24);

console.log('Количество минут ' + numberDays * 1440);

console.log('Количество секунд ' + numberDays * 86400);

/* task  10 */

numberDays = 256;

month = parseInt(numberDays / 31) + 1;

let pora;

switch (month) {
    case 12:
    case 1:
    case 2:
        pora = 'Зима';
        break; 
    case 3:
    case 4:
    case 5:
        pora = 'Весна';
        break;  
    case 6:
    case 7:
    case 8:
        pora = 'Лето';
        break; 
    case 9:
    case 10:
    case 11:
        pora = 'Осень';
        break;           
}

console.log(`День в году ${numberDays}, месяц ${month}, пора года ${pora}`);