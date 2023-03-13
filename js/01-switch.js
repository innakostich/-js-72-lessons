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

 ///////TASK 3 MODULE *//////////////
// const form = document.querySelector('.feedback-form');

// form.addEventListener('input', saveToLocalStorage);

// function saveToLocalStorage() {
//   const emailInput = form.querySelector('input[name="email"]');
//   const messageInput = form.querySelector('textarea[name="message"]');
//   const feedbackState = { email: emailInput.value, message: messageInput.value };
//   localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
// }

// window.addEventListener('load', () => {
//   const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const emailInput = form.querySelector('input[name="email"]');
//   const messageInput = form.querySelector('textarea[name="message"]');
//   if (feedbackState) {
//     emailInput.value = feedbackState.email;
//     messageInput.value = feedbackState.message;
//   }
// });

// form.addEventListener('submit', submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   const emailInput = form.querySelector('input[name="email"]');
//   const messageInput = form.querySelector('textarea[name="message"]');
//   const feedbackState = { email: emailInput.value, message: messageInput.value };
//   console.log(feedbackState);
//   localStorage.removeItem('feedback-form-state');
//   emailInput.value = '';
//   messageInput.value = '';
// }

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { galleryItems } from './gallery-items';
// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

// // Change code below this line

// // const galleryContainer = document.querySelector(".gallery");
// //  createImagesMarkup(galleryItems);
// const galleryContainer = document.querySelector(".gallery");
// const imagesMarkup = createImagesMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

// function createImagesMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}" >
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//       </div>`;
//     })
//     .join("");
// }

// const onContainerClick = (e) => {
//   e.preventDefault();

//   if (e.target.classList.contains("gallery")) return;
//   const source = e.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${source}"width="800" height="600">`);

//   instance.show();

  
//   document.addEventListener("keydown", onDocumentKeyDown);


//   instance.element().addEventListener("keydown", onInstanceKeyDown);

//   function onDocumentKeyDown(e) {
//     if (e.code === "Escape") {
//       instance.close();
//     }
//   }

//   function onInstanceKeyDown(e) {
//     if (e.code === "Escape") {
//       instance.close();
//     }
//   }
// };

// galleryContainer.addEventListener("click", onContainerClick);


//////TASK 2 //////



// const TIME_KEY = 'videoplayer-current-time';
// const iframe = document.querySelector('iframe');
// const player = new Player (iframe);

// const onPlay = function (data) {
//   const strigifyData = JSON.stringify(data);
//   localStorage.setItem(TIME_KEY, strigifyData);
// };
// player.on('timeupdate', throttle(onPlay, 1000));

// function resumePlayback() {
//   if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
//     return;
//   }
//   const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
//   if (paused) {
//     player
//       .setCurrentTime(paused)
//       .then(function (seconds) {})
//       .catch(function (error) {
//         switch (error.name) {
//           case 'Error':
//             break;
//           default:
//             break;
//         }
//       });
//   }
// }
// resumePlayback();

// import Vimeo from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('#vimeo-player');
// const player = new Vimeo(iframe);

// // Initialize player and start tracking timeupdate event
// player.ready().then(() => {
//   player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
//   player.on('timeupdate', throttle(() => {
//     localStorage.setItem('videoplayer-current-time', player.getCurrentTime());
//   }, 1000));
// });

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // settings object