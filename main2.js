let container = document.querySelector(".container-main");
let photo = document.querySelector(".photo");
let name = document.querySelector(".nome");
let price = document.querySelector(".price");

fetch("http://airbnb.douglasmaia.com/api/properties")
  .then(response => response.json())
  
  .then(users => users.map(user => user.name))
  .then(names => {
    const namesAsListItems = names.map(name => `<h2>${name}</h2>`);

    container.innerHTML = namesAsListItems;
  })

  .then(photos => photos.map(photos => photos.photo))
  .then(photos => {
    const photosAsListItems = photos.map(photo => `<img src="${photo}">`);

    container.innerHTML = photosAsListItems;
  })

  .then(prices => prices.map(price => price.price))
  .then(prices => {
    const pricesAsListItems = prices.map(price => `<p>${price}</p>`);

    container.innerHTML = pricesAsListItems;
  });
