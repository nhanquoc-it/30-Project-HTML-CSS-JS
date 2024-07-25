// Make an API Call and call the data from the API into the DOM
fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    // Initialize elements and filter API data.
    var listProduct = document.querySelector(".product-filter__products");
    listProduct.innerHTML = ``;
    data.forEach((item) => {
      var productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = `
                        <img
                            src="${item.image}"
                            alt="${item.description}"
                            class="product-item__img"
                        />
                        <div class="product-item__info">
                            <div class="product-item__name">${item.title}</div>
                            <div class="product-item__price">${item.price}</div>
                        </div>
                        `;
      listProduct.appendChild(productItem);
    });
  });

// Listen for input events from the <input> cell and display the product
var searchInput = document.querySelector(".product-filter__input");
searchInput.addEventListener("input", function (e) {
  let txtSearch = e.target.value.trim().toLowerCase();
  let resultSearch = document.querySelectorAll(".product-item");
  resultSearch.forEach((product) => {
    if (product.innerText.toLowerCase().includes(txtSearch)) {
      product.classList.remove("hide");
    } else {
      product.classList.add("hide");
    }
  });
});

// Call API : https://fakestoreapi.com/products
