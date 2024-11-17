let todos = localStorage.getItem("todos");

try {
  todos = JSON.parse(todos);
  todos = todos.length ? todos : null;
} catch (error) {
  todos = null;
}
// set default value to todos
if (!todos) {
  todos = [
    { content: "watch video", status: true },
    { content: "read book", status: true },
    { content: "play game", status: true },
    { content: "learn english", status: true },
  ];
  localStorage.setItem("todos", JSON.stringify(todos));
}

//func to create or update todos list
function CreateTodos(todos) {
  let todosList = document.querySelector("#todos-list");
  todosList.innerHTML = "";
  // create list tag for each todo
  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.className = "list-group-item";

    let span = document.createElement("span");
    span.textContent = todo.content;
    span.style.textDecoration = todo.status ? "initial" : "line-through";
    todo.status ? (span.style.color = "blue") : (span.style.color = "red");

    let img = document.createElement("img");
    img.src = "media/delete.png";
    img.alt = "delete icon";
    //append li and span and delete img in ul
    li.append(span);
    li.append(img);

    todosList.append(li);
    // add event delete to img btn
    img.addEventListener("click", (e) => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      CreateTodos(todos);
    });

    // add event complete todos
    span.addEventListener("click", (e) => {
      todos[index].status = !todos[index].status;
      localStorage.setItem("todos", JSON.stringify(todos));
      CreateTodos(todos);
    });
  });
}

CreateTodos(todos);

//action create add && search

let actions = document.querySelector("#action");
let formWrapper = document.querySelector("#form-wrapper");

Array.from(actions.children).forEach((e) => {
  if (e.dataset.action === "add") {
    e.addEventListener("click", (element) => {
      element.preventDefault();
      formWrapper.innerHTML = `
            <form id="add">
            <input class="form-control" name="add" placeholder="add todo ..." />
            </form>
            `;
            CreateTodos(todos);
      let added = document.querySelector("#add");
      added.addEventListener("click", (e) => {
        e.preventDefault();
        if (added.add.value) {
          todos.push({ content: added.add.value, status: true });
          localStorage.setItem("todos", JSON.stringify(todos));
          CreateTodos(todos);
        }
      });
    });
  } else if (e.dataset.action === "search") {
    e.addEventListener("click", (element) => {
      element.preventDefault();

      formWrapper.innerHTML = `
            <form id="search">
                  <input
                  class="form-control"
                  name="search"
                  placeholder="search todo ..."
                  /> 
            </form> 
                  `;
      let searched = document.querySelector("#search");
      searched.addEventListener("keyup", (e) => {
        e.preventDefault();
        if(searched.search.value){

          let filteredTodos = todos.filter(todo => todo.content.toLowerCase().includes(searched.search.value.toLowerCase()))
          CreateTodos(filteredTodos)
        }else{
          CreateTodos(todos);
        }
      });
    });
  }
});
