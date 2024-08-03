// Get the value of elements on html
const cardImg = document.querySelector(".card-img");
const cardTitle = document.querySelector(".card-info__title");
const cardDesc = document.querySelector(".card-info__desc");
const cardBtn = document.querySelector(".card-info__btn");

// Method 1 : Using function setTimeout()
// setTimeout(() => {
//   cardImg.innerHTML = '<img src="./product-item.jpg" alt="">';

//   cardTitle.innerHTML = "Product Item";
//   cardDesc.style.margin = "0";
//   cardDesc.innerHTML =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis";
//   cardBtn.innerHTML = "Read More";

//   // remove loading
//   document.querySelectorAll(".loading").forEach((item) => {
//     item.classList.remove("loading");
//   });
// }, 4000);

// Method 2 : Call Data from API
fetch("https://backoffice.nodemy.vn/api/products?populate=*")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.data[0]);
    let data = res.data[0];

    cardImg.classList.remove("loading");
    cardTitle.classList.remove("loading");
    cardDesc.classList.remove("loading");
    cardBtn.classList.remove("loading");

    cardImg.innerHTML = `<img src="https://backoffice.nodemy.vn${data?.attributes?.image?.data[0]?.attributes?.url}">`;
    cardBtn.innerHTML = "Read More";
    cardTitle.innerHTML = data?.attributes?.name;
    cardDesc.innerHTML =
      data?.attributes?.description.substring(0, 100) + "...";
  });
