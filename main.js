let container = document.querySelector(".container-main");

fetch("http://airbnb.douglasmaia.com/api/properties")
  .then(response => response.json())
  .then(data => popularHtml(data));

function popularHtml(data) {
  let html = "";

  data.map(item => {
    html += ` <div class="card">
    <figure style= "background-image: url(${item.photo})" alt="" class="photo"></figure>
    <h4 class="name">${item.name}</h4>
    <p class="p-price"><span class="price">${item.price}
    </span><a href="" class="btn">Reserve</a></p>
    </div>`;
  });

  container.innerHTML = html;
}
