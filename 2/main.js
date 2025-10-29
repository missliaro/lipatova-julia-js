// 1. Пишем функцию 

function pam(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    newArray.push(result);
  }
  return newArray;
}
const productIds = pam(products, function (product) {
  return "ID: " + product.id;
});
console.log("ID товаров:");
productIds.forEach((id) => console.log(id));


//2. Выводим названия товаров
const productTitles = pam(products, function (product) {
  return "Название: " + product.title;
});
console.log("\nНазвания товаров:");
productTitles.forEach((title) => console.log(title));

// Выводим цены товаров
const productPrices = pam(products, function (product) {
  return "Цена: $" + product.price;
});
console.log("\nЦены товаров:");
productPrices.forEach((price) => console.log(price));

// Выводим категории товаров
const productCategories = pam(products, function (product) {
  return "Категория: " + product.category;
});
console.log("\nКатегории товаров:");
productCategories.forEach((category) => console.log(category));

// Выводим рейтинги товаров
const productRatings = pam(products, function (product) {
  return (
    "Рейтинг: " +
    product.rating.rate +
    " (" +
    product.rating.count +
    " отзывов)"
  );
});
console.log("\nРейтинги товаров:");
productRatings.forEach((rating) => console.log(rating));

// Выводим описания товаров
const productDescriptions = pam(products, function (product) {
  return "Описание: " + product.description;
});
console.log("\nОписания товаров:");
productDescriptions.forEach((description) => console.log(description));



// 3. Выводим все поля по отдельности с помощью map()

// 1. ID товаров
console.log("ID товаров:");
products.map(product => "ID: " + product.id)
        .forEach(id => console.log(id));

// 2. Названия товаров  
console.log("\nНазвания товаров:");
products.map(product => "Название: " + product.title)
        .forEach(title => console.log(title));

// 3. Цены товаров
console.log("\nЦены товаров:");
products.map(product => "Цена: $" + product.price)
        .forEach(price => console.log(price));

// 4. Категории товаров
console.log("\nКатегории товаров:");
products.map(product => "Категория: " + product.category)
        .forEach(category => console.log(category));

// 5. Рейтинги товаров
console.log("\nРейтинги товаров:");
products.map(product => `Рейтинг: ${product.rating.rate} (${product.rating.count} отзывов)`)
        .forEach(rating => console.log(rating));

// 6. Описания товаров
console.log("\nОписания товаров:");
products.map(product => "Описание: " + product.description)
        .forEach(description => console.log(description));