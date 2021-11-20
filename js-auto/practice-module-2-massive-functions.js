

// // ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА 9/32
// // Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. 
// // Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// // Объявлена функция getExtremeElements(array)
// // Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
// // Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
// // Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]

// function getExtremeElements(array) {
//   // Change code below this line
//     const newArray = [];
//       newArray.push(array[0], array[array.length-1]);
//       return newArray;          
//   // Change code above this line
//   }
// // ПРОВЕРКА
// // console.log(getExtremeElements([1, 2, 3, 4, 5]));


// //   МЕТОД СТРОК SPLIT() 10/32
// // Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. 
// // Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.
// // const name = "Mango";
// // console.log(name.split("")); // ["M", "a", "n", "g", "o"]
// // const message = "JavaScript essentials";
// // console.log(message.split(" ")); // ["JavaScript", "essentials"]

// // Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.
// // Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
// // Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
// // Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]

// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//     words = (message.split(delimeter));
//     // Change code above this line
//     return words;
//   }
// // ПРОВЕРКА
// // console.log(splitMessage ('Mango hurries to the train', ' '));




// //   ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ  11/32
// // Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// // Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, 
// // состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// // Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// // Объявлена функция calculateEngravingPrice(message, pricePerWord)
// // Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// // Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// // Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// // Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   let arrMessage = message.split(" ");
//   let total = 0;
//   total = arrMessage.length * pricePerWord;
//   return total;
//    // Change code above this line
// }
// // ПРОВЕРКА
// // console.log(calculateEngravingPrice("JavaScript is in my blood", 10));



// //   МЕТОД МАССИВА JOIN()  12/32
// // Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены 
// // символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).
// // const words = ["JavaScript", "is", "amazing"];
// // console.log(words.join("")); // 'JavaScriptisamazing'
// // console.log(words.join(" ")); // 'JavaScript is amazing'
// // console.log(words.join("*")); // 'JavaScript*is*amazing'
// // Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат 
// // соединения элементов массива array c разделителем delimeter - строку.

// // Объявлена функция makeStringFromArray(array, delimeter)
// // Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
// // Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "")) возвращает "Mango"
// // Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);
//   // Change code above this line
//   return string;
// }
// // ПРОВЕРКА
// // console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"]);



// // ЗАДАЧА: ГЕНЕРАТОР SLUG  13/32
// // Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.
// // Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.
// // Внимание:    Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// // Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// // Значением параметра title будут строки, слова которых разделены только пробелами
// // Все символы slug должны быть в нижнем регистре
// // Все слова slug должна быть разделены тире
// // Объявлена функция slugify(title)
// // Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
// // Вызов slugify("English for developer") возвращает "english-for-developer"
// // Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
// // Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//   // Change code below this line
//   let arrTitle = title.split(" ");
//   let joinTitle = arrTitle.join("-");
//   let slugname = joinTitle.toLowerCase();
//   return slugname;
//   // Change code above this line
// }
// // ПРОВЕРКА
// // console.log(slugify("Arrays for begginers"));




// //   МЕТОД SLICE()    14/32
// // Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// // Если begin и end не указаны, будет создана полная копия исходного массива.
// // Если не указан end, копирование будет от start и до конца исходного массива.
// // Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
// // const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// // console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// // console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// // console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// // console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// // console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
// // Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// // firstTwoEls - массив из первых двух элементов
// // nonExtremeEls - массив из всех элементов кроме первого и последнего
// // lastThreeEls - массив из трёх последних элементов
// // Объявлена переменная fruits
// // Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
// // Объявлена переменная firstTwoEls - Значение переменной firstTwoEls это массив ["apple", "plum"]
// // Объявлена переменная nonExtremeEls - Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
// // Объявлена переменная lastThreeEls - Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
// // Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами

//   const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
//   // Change code below this line
//   const firstTwoEls = fruits.slice(0, 2);
//   const nonExtremeEls = fruits.slice(1, fruits.length-1);
//   const lastThreeEls = fruits.slice(-3);

// // ПРОВЕРКА
// // console.log(firstTwoEls);





// //   МЕТОД CONCAT()    15/32
// // Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором вызывается, а возвращает новый. 
// // Порядок аргументов метода влияет на порядок элементов нового массива.
// // const firstArray = ["Mercury", "Venus", "Earth"];
// // const secondArray = ["Mars", "Jupiter"];
// // const thirdArray = ["Saturn", "Uranus", "Neptune"];
// // const allPlanets = firstArray.concat(secondArray, thirdArray);
// // console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// // console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
// // Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// // Объявлена переменная oldClients - Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
// // Объявлена переменная newClients - Значение переменной newClients это массив ["Peach", "Houston"]
// // Объявлена переменная allClients - Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// // Переменной allClients присвоен массив после применения метода concat с правильными аргументами

//   const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
//   const newClients = ['Peach', 'Houston'];
//   const allClients = oldClients.concat(newClients); // Change this line

// // ПРОВЕРКА
// // console.log(allClients);



// // ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ     16/32
// // Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
// // Параметр maxLength содержит максимально допустимую длину нового массива.
// // Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. 
// // В противном случае функция должна вернуть новый массив целиком.

// // Объявлена функция makeArray(firstArray, secondArray, maxLength)
// // Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
// // Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
// // Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
// // Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
// // Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// // Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
// // Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//  let newArray = firstArray.concat(secondArray);
//    if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//    }
//   return newArray;
//   // Change code above this line
// }
// // console.log(newArray);
// // ПРОВЕРКА
// // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));





// // ЦИКЛ FOR       17/32
// // Циклы используются для многократного повторения кода. Объявление цикла for состоит из трёх выражений.
// // for (Инициализация; Условие; Пост - выражение) {  Тело цикла  }
// // Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
// // Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только тогда, когда выражение приводится к true. 
// // Цикл завершается, если значение будет false.
// // Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
// // Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.
// // for (let i = 0; i <= 20; i += 5) {
// //   console.log(i);
// // }
// // В примере объявляется переменная i, инициализируется значением 0 и цикл выполняется (его тело) до тех пор, пока i <= 20, то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.

// // Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// // Объявлена переменная start
// // Значение переменной start это число 3
// // Объявлена переменная end
// // Значение переменной end это число 7
// // Объявлена переменная i - счётчик цикла
// // Начальное значение переменной i равно 3
// // Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
// // На каждой итерации значение переменной i увеличивается на единицу
// // Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   // console.log(i);
// }




// // ЗАДАЧА: СУММА ЧИСЕЛ (ЦИКЛ FOR)    18/32
// // Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел
// //  от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// // Объявлена функция calculateTotal(number)
// // Вызов функции calculateTotal(1) возвращает 1
// // Вызов функции calculateTotal(3) возвращает 6
// // Вызов функции calculateTotal(7) возвращает 28
// // Вызов функции calculateTotal(18) возвращает 171
// // Вызов функции calculateTotal(24) возвращает 300
// // Вызов функции calculateTotal() со случайным числом возвращает правильное значение

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//    for (let i=1; i<=number; i += 1 ) {
//     // total = (((1+i)/2)*i);
//     total += i;
//    }
 
//  return total;
//    // Change code above this line
//  }
//  // ПРОВЕРКА
// //  console.log(calculateTotal(7));




// // ИТЕРАЦИЯ ПО МАССИВУ       19/32
// // Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.
// // const planets = ["Earth", "Mars", "Venus"];
// // for (let i = 0; i < planets.length; i += 1) {
// //   console.log(planets[i]);}
// // Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где 
// // индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.
// // Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// // Объявлена переменная fruits
// // Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
// // Объявлена переменная i - счётчик цикла
// // Начальное значение переменной i равно 0
// // Условие цикла приводится к true до тех пор, пока i меньше 4
// // На каждой итерации значение переменной i увеличивается на единицу
// // В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
// // В теле цикла for используется вывод в консоль переменной fruit

// // const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i +=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   // console.log(fruit);
// }




// // ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ     20/32
// // Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, 
// // и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, 
// // которая возвращается, как результат работы функции.

// // Объявлена функция calculateTotalPrice(order)
// // Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// // Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// // Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// // Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i=0; i<order.length; i +=1) {
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }
// // ПРОВЕРКА
// // console.log(calculateTotalPrice([12, 85, 37, 4]));




// // ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА    21/32
// // Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов 
// // разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// // Объявлена функция findLongestWord(string)
// // Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// // Вызов функции findLongestWord("Google do a roll") возвращает Google
// // Вызов функции findLongestWord("May the force be with you") возвращает force
// // Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// function findLongestWord(string) {
//   // Change code below this line
//  const newArray = string.split(" ");
//  let theLongestWord = '';
//   for (const word of newArray) 
//     if (word.length > theLongestWord.length) {
//         theLongestWord = word;
//         }
//  return theLongestWord;
//   // Change code above this line
// }
// // ПРОВЕРКА
// // console.log(findLongestWord("Google do a roll"));




// // МЕТОД PUSH()      22/32
// // Метод push() позволяет добавить один или несколько элементов в конец массива, 
// // без необходимости указывать индексы добавляемых элементов.
// // const planets = ["Earth", "Mars", "Venus"];
// // planets.push("Jupiter");
// // planets.push("Saturn", "Uranus", "Neptune");
// // console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// // Дополни код функции createArrayOfNumbers(min, max) так, 
// // чтобы она возвращала массив всех целых чисел от значения min до max.
// // Объявлена функция createArrayOfNumbers(min, max)
// // Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// // Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// // Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// // Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// // В цикле for использовался метод push

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// // ПРОВЕРКА
// // console.log(findLongestWord("Google do a roll"));




// // ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ       23/32
// // Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) 
// // и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше 
// // чем значение параметра value (число).

// // Объявлена функция filterArray(numbers, value)
// // Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// // Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// // Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// // Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// // Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// // Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// // В цикле for использовался метод push

// function filterArray(numbers, value) {
//   // Change code below this line
// const newArray = [];
 
// for (let i = 0; i < numbers.length; i += 1) {
//  if (   numbers[i] > value ){
//    newArray.push(numbers[i]);
//   }
//  }

// //  ИЛИ ТАК:
// //  for (const number of numbers) {
// //   if (number > value) {
// //    newArray.push(number);
// //   }
// //  }

//  return newArray;
//  // Change code above this line
// }
// // ПРОВЕРКА
// // console.log(filterArray([1, 2, 3, 4, 5], 3));




// // МЕТОД INCLUDES()     24/32
// // Метод includes(value) проверяет есть ли в массиве элемент со значением value 
// // и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям, 
// // когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).
// // const planets = ["Earth", "Mars", "Venus"];
// // console.log(planets.includes("Earth")); // true
// // console.log(planets.includes("Mars")); // true
// // console.log(planets.includes("Venus")); // true
// // console.log(planets.includes("Jupiter")); // false

// // Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), 
// // и проверяет есть ли такой фрукт в массиве fruits.
// // Дополни код функции так, что если:
// // фрукт есть в массиве, то функция возвращает true;
// // фрукта нет в массиве, то функция возвращает false.
// // Объявлена функция checkFruit(fruit)
// // Вызов checkFruit("plum") возвращает true
// // Вызов checkFruit("mandarin") возвращает false
// // Вызов checkFruit("pear") возвращает true
// // Вызов checkFruit("Pear") возвращает false
// // Вызов checkFruit("apple") возвращает true
// // Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
// // В функции использовался метод includes

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// // ПРОВЕРКА
// // console.log(checkFruit("Pear"));




// // ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ          25/32
// // Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// // Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, 
// // т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// // Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины 
// // в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, 
// // которые присутствуют в обоих исходных массивах.

// // Объявлена функция getCommonElements(array1, array2)
// // Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// // Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// // Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// // Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// // Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// // Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// // В цикле for использовались методы includes и push

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (const item of array1){
//     if (array2.includes(item)){
//     newArray.push(item);
//     }
//   }
//   return newArray;
//  // Change code above this line
// }
// // ПРОВЕРКА
// // console.log(getCommonElements([1, 2, 3], [2, 4]));





// // ЦИКЛ FOR...OF       26/32
// // Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

// // for (const variable of iterable) {
// //   // тело цикла
// // }
// // variable — переменная, которая будет хранить значение элемента на каждой итерации
// // iterable — коллекция, которая имеет перечислимые элементы, например массив
// // const planets = ["Earth", "Mars", "Venus"];

// // for (const planet of planets) {
// //   console.log(planet);
// // }
// // Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// // Объявлена функция calculateTotalPrice(order)
// // Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// // Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// // Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// // Вызов функции calculateTotalPrice([]) возвращает 0
// // Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
// // ЗАМЕНИТЬ НА ЭТО:
//   for (const orderItem of order) {
//     total += orderItem;
//   }


//   // Change code above this line
//   return total;
// }




// // ЗАЧАДА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0       27/32
// // Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// // Объявлена функция filterArray(numbers, value)
// // Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// // Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// // Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// // Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// // Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// // Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// // Функция calculateTotalPrice() использует цикл for..of

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
// // ЗАМЕНИТЬ НА ЭТО:
// for (const number of numbers) {

//   if (number > value) {
//     filteredNumbers.push(number);
//   }
// }

//   return filteredNumbers;
//   // Change code above this line
// }



// // ОПЕРАТОР %       28/32
// // Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает 
// // целочисленный остаток от деления двух чисел - делимого и делителя.
// // 5 % 1 = 0;
// // // 5, разделенное на 1, равно 5, а остаток - 0
// // 5 % 2 = 1;
// // //  5, разделенное на 2, равно 2, а остаток - 1
// // 5 % 3 = 2;
// // //  5, разделенное на 3, равно 1, а остаток - 2
// // 5 % 4 = 1;
// // //  5, разделенное на 4, равно 1, а остаток - 1
// // 5 % 5 = 0;
// // //  5, разделенное на 5, равно 1, а остаток - 0

// // Дополни выражения остатка от деления так, чтобы код проходил тесты.
// // Объявлена переменная a - Значение переменной a это число 0
// // Объявлена переменная b - Значение переменной b это число 1
// // Объявлена переменная c - Значение переменной c это число 3
// // Объявлена переменная d - Значение переменной d это число 5
// // Объявлена переменная e - Значение переменной e это число 2

// // Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;



// // ЗАДАЧА: ЧЁТНЫЕ ЧИСЛА              29/32
// // Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
// // Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// // Объявлена функция getEvenNumbers(start, end)
// // Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// // Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// // Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// // Вызов функции getEvenNumbers(8, 8) возвращает [8]
// // Вызов функции getEvenNumbers(7, 7) возвращает []
// // Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

// function getEvenNumbers(start, end) {
//   // Change code below this line
//  let numbers = [];
//  for (let i = start; i <= end; i +=1) {
//    if (i % 2 === 0) {
//    numbers.push(i);
//    }
//  }
//  return numbers;
//    // Change code above this line
// }




// // ОПЕРАТОР BREAK              30/32
// // Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, 
// // который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.
// // В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).
// // for (let i = 0; i <= 5; i += 1) {
// //   console.log(i);

// //   if (i === 3) {
// //     console.log("Нашли число 3, прерываем выполнение цикла");
// //     break;
// //   }
// // }
// // console.log("Лог после цикла");

// // Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
// // Объявлена переменная start со значением 6
// // Объявлена переменная end со значением 27
// // Объявлена переменная number без инициализации
// // Итоговое значение переменной number равно 10
// // В цикле for используется break для выхода до завершения всех итераций цикла

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }



// // ОПЕРАТОР BREAK VS RETURN В ФУНКЦИИ               31/32
// // Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. 
// // Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.
// // В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.

// // function fn() {
// //   for (let i = 0; i <= 5; i += 1) {
// //     console.log(i);

// //     if (i === 3) {
// //       console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
// //       return i;
// //     }
// //   }

// //   // Этот console.log не выполнится
// //   console.log("Лог после цикла в теле функции");
// // }

// // const result = fn();
// // console.log("Лог после выхода из функции");
// // console.lof(`Результат выполнения функции ${result}`);
// // Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// // возвращала первое число от start до end, которое делится на divisor без остатка
// // не использовала оператор break
// // не использовала переменную number
// // Объявлена функция findNumber(start, end, divisor)
// // Вызов findNumber(2, 6, 5) возвращает 5
// // Вызов findNumber(8, 17, 3) возвращает 9
// // Вызов findNumber(6, 9, 4) возвращает 8
// // Вызов findNumber(16, 35, 7) возвращает 21
// // Вызов findNumber() со случайным набором чисел возвращает верный результат
// // В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//       //  (убрать  break; и заменить на   return number;)
//     }
//   }
//   return number;
//   // Change code above this line
// }

/* ======================================================================== */

// // ЗАДАЧА: ФУНКЦИЯ INCLUDES()   32/32
// // Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// // При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// // Объявлена функция includes(array, value)
// // Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// // Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// // Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// // Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// // Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// // Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// // Вызов includes() для случайного массива со случайным value возвращает верный boolean
// // В функции includes используется for, return, но не метод массива includes

// function includes(array, value) {
//   // Change code below this line
//   let result = array.indexOf(value);
//   let bool = result > -1;
  
//   return bool;
//     // Change code above this line
// }
