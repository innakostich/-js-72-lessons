/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 1;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

//  1. сделать переменные
//const option = 123;
//let message = '';

// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в message строку
//switch (option) {
 // case 1:
 //   message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
 //   break;

 // case 2:
  //  message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
  //  break;

  //case 3:
 //   message = 'Посылка будет отправлена сегодня';
  //  break;

 // default:
  //  message = 'Вам перезвонит менеджер';
//}

// 4. сделать лог message
//console.log(message);
//const string = 'JavaScript';

//const letters = string.split('');

//let invertedString = "";

//console.log (letters);

//for ( const letter of letters) {
//  console.log(letter)
//;

// if (letter === letter.toLowerCase()) {
//  console.log ('This is small case .', letter);
//  invertedString += letter.toUpperCase();
// }

 //console.log( invertedString);
//}

// Колбэк-функция
// Обычное объявление функции
// Императивный подход
// Декларативный подход

////TASK 1
//const categories = document.querySelector("#categories");
//const items = categories.querySelectorAll(".item");

//console.log(`Number of categories: ${items.length}`);

//items.forEach(item => {
  //const title = item.querySelector("h2").textContent;
  //const elements = item.querySelectorAll("li").length;
//
  //console.log(`
//Category: ${title}
//Elements: ${elements}
//  `);
//});

///// TASK 2
//const ingredients = [
 // "Potatoes",
  //"Mushrooms",
  //"Garlic",
  //"Tomatos",
  //"Herbs",
  //"Condiments",
//];

//const ingredientsList = document.querySelector("#ingredients");
//const ingredientsElements = ingredients.map((ingredient) => {
  //const li = document.createElement("li");
  //li.textContent = ingredient;
  //li.classList.add("item");
  //return li;
//});

//ingredientsList.append(...ingredientsElements);


const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);