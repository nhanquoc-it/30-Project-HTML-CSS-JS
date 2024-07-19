var btnSearch = document.querySelector(".search-box__button");

btnSearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  console.log(this.previousElementSibling);
  this.previousElementSibling.focus();
});

/* Note :
1) The keyword "this" represents the element to be searched for at the current moment. 
Here, it is the "Search" button.
2) this.parentElement : returns the previous immediate parent element containing that element. 
Here, the child is 'search-box__button' then its parent is 'search-box'.
3) this.previousElementSibling : returns the previous adjacent element of that element. 
Here, the closest adjacent element to 'search-box__button' is 'search-box__input'.
*/
