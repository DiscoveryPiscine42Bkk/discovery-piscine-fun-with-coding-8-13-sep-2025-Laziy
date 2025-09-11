$(document).ready(function () {
  const ftList = $("#ft_list");

  function saveList() {
    const todoTexts = [];
    $(".todo-item").each(function () {
      todoTexts.push($(this).text());
    });
    const jsonString = JSON.stringify(todoTexts.reverse());
    document.cookie =
      "ft_list_data=" +
      encodeURIComponent(jsonString) +
      "; max-age=31536000; path=/";
  }

  function loadList() {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "ft_list_data") {
        try {
          const todoTexts = JSON.parse(decodeURIComponent(value));
          todoTexts.forEach((text) => createTodo(text));
        } catch (e) {
          console.error("Error parsing cookie data:", e);
        }
        return;
      }
    }
  }

  function createTodo(text) {
    const newTodo = $("<div></div>")
      .addClass("todo-item")
      .text(text)
      .prependTo(ftList);
  }

  ftList.on("click", ".todo-item", function () {
    if (confirm("Do you really want to remove this TO DO?")) {
      $(this).remove();
      saveList();
    }
  });

  $("#new-btn").click(function () {
    const todoText = prompt("Enter a new TO DO:");
    if (todoText && todoText.trim() !== "") {
      createTodo(todoText.trim());
      saveList();
    }
  });

  loadList();
});
