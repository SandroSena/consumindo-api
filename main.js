let container = document.querySelector(".container-main");
let photo = document.querySelector(".photo");
let name = document.querySelector(".nome");
let price = document.querySelector(".price");

fetch("http://airbnb.douglasmaia.com/api/properties")
  .then(response => response.json())
  .then(response => {
    popularHtml(response);
  });

function popularHtml(data) {
  let html = "";

  data.forEach(item => {
    html += ` <div class="card">
    <figure style= "background-image: url(${item.photo})" alt="" class="photo"></figure>
    <h4 class="name">${item.name}</h4>
    <p class="p-price"><span class="price">${item.price}
    </span><a href="" class="btn">Reserve</a></p>
    </div>`;
  });

  container.innerHTML = html;
}
