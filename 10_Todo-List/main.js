// Get the value of elements on html
var input = document.querySelector(".todo-list__input");
var btnAdd = document.querySelector(".todo-list__add");
var form = document.querySelector("form");
var listTask = document.querySelector(".list-task");

// Listen to the 'submit' event on the Form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = input.value.trim();
  if (value) {
    addTask({
      task: value,
    });
    SaveLocalStorage();
  }
  input.value = "";
  input.focus();
});

// Declare the addTask() function with the parameter "element (an object)"
function addTask(element) {
  var li = document.createElement("li");
  li.setAttribute("class", "task-item");
  li.innerHTML = `
          <span class="task-item__text">${element.task}</span>
          <i class="task-item__icon fa-solid fa-trash"></i>
    `;
  if (element.status === "completed") {
    li.classList.add("completed");
  }
  // Listen for the 'click' event on the <li> tag
  li.addEventListener("click", function () {
    this.classList.toggle("completed");
    SaveLocalStorage();
  });
  // Event Remove <li> tag
  li.querySelector("i").addEventListener("click", function () {
    this.parentElement.remove();
    SaveLocalStorage();
  });
  listTask.appendChild(li);
}

// Function SaveLocalStorage
function SaveLocalStorage() {
  let todoList = document.querySelectorAll("li");
  let dataStorage = [];
  todoList.forEach(function (item) {
    let task = item.querySelector("span").innerText;
    let status = item.classList.contains("completed") ? "completed" : "";
    console.log(status);
    dataStorage.push({ task, status });
  });

  localStorage.setItem("todoList", JSON.stringify(dataStorage));
}

function init() {
  let data = JSON.parse(localStorage.getItem("todoList"));
  if (data) {
    data.forEach(function (item) {
      addTask(item);
      if (item.status === "completed") {
        listTask.lastChild.classList.add("completed");
      }
    });
  }
}
init();
