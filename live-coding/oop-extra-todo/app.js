const todoContainer = document.querySelector(".todo-container");
let todoList = new TodoList();

function mockData() {
  let todo = new TodoItem();
  todo.title = "Laundry";
  todo.content = "On monday at 15:00 I have to do laundry before parents arrive";
  todo.setDeadlineIn(3);

  todoList.addTodoItem(todo);

  todo = new TodoItem(); // todo är redan deklarerad, här skapar vi endast en ny instans på samma referens som innan
  todo.title = "Bake pancakes"
  todo.content = "Promised my younger brother to help him bake pancakes at 17:00 tomorrow";

  todoList.addTodoItem(todo);

  todo = new TodoItem(); // todo är redan deklarerad, här skapar vi endast en ny instans på samma referens som innan
  todo.title = "Bake banana pancake"
  todo.content = "Promises promises promises";

  todoList.addTodoItem(todo);
}

mockData()



setTimeout(() => {
  // todoList.getItems().forEach(todo => {
  //   //let li = createTodoListItem(todo);
  //   todoContainer.append(todo.getHTML());
  // });

  todoList.getHTML().forEach(todo => todoContainer.append(todo));
}, 5000);
