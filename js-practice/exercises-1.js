// const name = prompt('What is your name?');
// const age = prompt('How old are you?');
// const message = `Hello, ${name} who is ${age} years old! `;
// alert(message);
// ====================================
// 1.Получить случайное число в диапазоне от 0 до 100 и выяснить,
// является ли оно четным. Если да, то вывести в консоль.

// const randomNumber = parseInt(Math.random() * (100 - 1) + 1);
// console.log(`randomNumber`, randomNumber);
// console.log(`randomNumber isEven`, randomNumber % 2 === 0);
// const evenNumber = function () {
//   if (randomNumber % 2 === 0) {
//     console.log(randomNumber);
//   } else {
//     console.log(`${randomNumber} is not even`);
//   }
//   return;
// };
// evenNumber();
// ====================================
// Просим пользователя ввести число в битах (в 8бит = 1B, 1024B = 1KB,1024KB = 1MB...).
// А вывести его надо будет в байтах, KB, MB, GB, TB
// const bitCount = Number(prompt('Enter a number in bits'));
// const byteCount = bitCount / 8;
// const kiloByteCount = byteCount / 1024;
// const megaByteCount = kiloByteCount / 1024;
// const gigaByteCount = megaByteCount / 1024;
// const terraByteCount = gigaByteCount / 1024;
// console.log(`bitCount`, bitCount);
// console.log(`byteCount`, byteCount);
// console.log(`kiloByteCount`, kiloByteCount);
// console.log(`megaByteCount`, megaByteCount);
// console.log(`gigaByteCount`, gigaByteCount);
// console.log(`terraByteCount`, terraByteCount);
// ====================================
// Ввести число, затем ввести степень этого числа. Затем вывести число возведенное в эту степень.
// const number = prompt('Enter number');
// const power = prompt('Enter power');
// alert(Math.pow(number, power));
// ====================================
// Просим пользователя ввести число 5 раз. Потом выводим минимальное и максимальное число в консоль.
// const number1 = +prompt('Please, enter 1-st number');
// const number2 = +prompt('Please, enter 2-nd number');
// const number3 = +prompt('Please, enter 3-rd number');
// const number4 = +prompt('Please, enter 4-th number');
// const number5 = +prompt('Please, enter 5-th number');

// const max = Math.max(number1, number2, number3, number4, number5);
// const min = Math.min(number1, number2, number3, number4, number5);
// alert(`min:${min}, max:${max}`);
// console.log(`max number`, max);
// console.log(`min number`, min);
// ====================================
// Напишите цикл for, который выводит в консоль браузера числа по возрастанию от min до max.
// const min = 5;
// const max = 15;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);
// }
// ====================================
// Напишите цикл for, который выводит в консоль браузера числа по убыванию от max до min.
// const min = 90;
// const max = 100;
// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }
// ====================================
// При помощи цикла for выведите чётные числа от 1 до 10
// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// ИЛИ
// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 !== 0) {
// continue
//   }
//     console.log(i);
// }
// ====================================
