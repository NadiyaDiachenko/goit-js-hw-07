// const htmlElement = document.documentElement;
// console.log(htmlElement);
// const bodyElement = document.body;

// console.log(bodyElement);
// const firstChildNode = bodyElement.firstChild;
// console.log(firstChildNode);
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);


// !
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
// У консолі має бути виведено наступне повідомлення:

const ulCategories = document.querySelector("#categories");

console.log(`Number of categories: ${ulCategories.children.length}`);

const categoriesRef = Array.from(ulCategories.children);

categoriesRef.forEach(element => {
    const title = element.querySelector("h2");
    const list = element.querySelector("ul");

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${list.children.length}`);
});
