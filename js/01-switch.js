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


// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });

  /////////////////////    Running Buttons      ///////////////////////
// const container = document.querySelector(".container");
// const hoverHandler = (e) => {

//   const { target: button } = e;

//   button.style.top = `${Math.floor (Math.random() * (window.innerHeight - button.clientHeight))}px` ;

//   button.style.left = `${Math.floor (Math.random() * (window.innerWidth - button.clientWidth))}px` ;

 
// };

// container.addEventListener ( 'mouseover', hoverHandler) ;

// const main = document.querySelector("main");

// main.addEventListener ("click", (e) => {
//   const { target } = e ;
  
//   if ( target.dataset.modal)
//  console.log("click");
// });

// const galleryContainer = document.querySelector(".gallery");
// const imagesMarkup = createImagesMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);
const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveToLocalStorage);

function saveToLocalStorage() {
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const feedbackState = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}

window.addEventListener('load', () => {
  const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  if (feedbackState) {
    emailInput.value = feedbackState.email;
    messageInput.value = feedbackState.message;
  }
});

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const feedbackState = { email: emailInput.value, message: messageInput.value };
  console.log(feedbackState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}
