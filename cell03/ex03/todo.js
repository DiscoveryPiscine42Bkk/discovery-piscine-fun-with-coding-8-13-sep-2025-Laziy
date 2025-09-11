const newTodoBtn = document.getElementById("new-todo-btn");
const ftList = document.getElementById("ft_list");

window.onload = function () {
  loadListFromCookie();
};

/**
 
  @param {string} text
  @returns {HTMLElement}
 */
function createTodoElement(text) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo-item";
  todoDiv.textContent = text;

  todoDiv.addEventListener("click", function () {
    if (confirm("Do you really want to remove this TO DO?")) {
      this.remove();
      saveListToCookie();
    }
  });

  return todoDiv;
}

function saveListToCookie() {
  const todoItems = ftList.getElementsByClassName("todo-item");
  const todoTexts = [];

  for (let i = 0; i < todoItems.length; i++) {
    todoTexts.push(todoItems[i].textContent);
  }

  const jsonString = JSON.stringify(todoTexts.reverse());

  document.cookie =
    "ft_list_data=" +
    encodeURIComponent(jsonString) +
    "; max-age=31536000; path=/";
}

function loadListFromCookie() {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "ft_list_data") {
      try {
        const todoTexts = JSON.parse(decodeURIComponent(value));
        todoTexts.forEach((text) => {
          const todoDiv = createTodoElement(text);
          ftList.prepend(todoDiv);
        });
      } catch (e) {
        console.error("Error parsing cookie data:", e);
      }
      return;
    }
  }
}

newTodoBtn.addEventListener("click", function () {
  const todoText = prompt("Enter a new TO DO:");

  if (todoText && todoText.trim() !== "") {
    const newTodoDiv = createTodoElement(todoText.trim());
    ftList.prepend(newTodoDiv);
    saveListToCookie();
  }
});
