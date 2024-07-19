// Get the value of elements on html
var content = document.querySelector(".search-tag__content");
var input = document.querySelector(".search-tag__input");
var btnRemoveAll = document.querySelector(".search-tag__btn");

// Initialize an array named 'tags' with 2 elements [HTML, CSS]
var tags = ["HTML", "CSS"];

// Initialize the renderTags() function
function renderTags() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `
    <li>${tag}
        <i class="search-tag__icon fa-solid fa-xmark" onclick="removeTag(${i})"></i>
    </li>`;
  }

  content.appendChild(input);
  input.focus();
}
// Call the renderTags() function
renderTags();

// Listen for keyboard input events
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    // Add content to the end of the original 'tags' array and remove leading spaces
    tags.push(input.value.trim());
    input.value = "";
    renderTags();
  }
});

// Initialize the removeTag() function and call it in the <i> tag, line 16 in javascript code
function removeTag(index) {
  tags.splice(index, 1); // Delete an element at index position
  renderTags();
}

// Listen to the "RemoveAll" button event
btnRemoveAll.addEventListener("click", function () {
  tags = []; // Returns empty array
  renderTags();
});
