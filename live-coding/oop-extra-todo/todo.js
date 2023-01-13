class TodoList {
  constructor() {
    this.todos = []; // empty array
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  getItems() {
    return this.todos;
  }

  printTitles() {
    console.log(`There are ${this.todos.length} entries in the todo list`);
    this.todos.forEach(todo => console.log(todo.title));
  }

  getTodosByTitle(titleQuery) {
    let results = this.todos.find(todo => todo.title.includes(titleQuery));

    if (results == undefined) {
      return [];
    } else {
      return results;
    }
  }

  getTodosByRemainingTime(seconds) {
    let todos = this.todos.filter(todo =>
      todo.getRemainingTime("seconds") > seconds);

    return todos;
  }

  getHTML() {
    let htmlTodos = [];

    this.todos.forEach(todo => {
      htmlTodos.push(todo.getHTML());
    });

    return htmlTodos;
  }
}

class TodoItem {
  constructor() {
    this.title = "Placeholder title...";
    this.content = "Placeholder content...";
    this.startDate = new Date();
  }

  setDeadline(endDate) {
    this.endDate = endDate;
  }

  setDeadlineIn(days) {
    let date = new Date();
    date = date.setDate(date.getDate() + days);
    date = new Date(date);
    this.endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  getDateFromCreated() {
    let date = new Date();
    let dateDiff = date - this.startDate;
    return Math.round(dateDiff / 1000);
  }

  getRemainingTime(format) {
    if (!this.endDate) return false;

    let dataFormats = {
      days: 1000 * 60 * 60 * 24,
      hours: 1000 * 60 * 60,
      minutes: 1000 * 60,
      seconds: 1000
    }

    console.log(Number(this.endDate - this.startDate))
    let time = Number(new Date(this.endDate) - this.startDate) / dataFormats[format];
    return time.toFixed(0);
  }

  getHTML() {
    let li = document.createElement("li");

    li.innerHTML = `
    <div>
      <h3>${this.title}</h3>
      <p>${this.content}</p>
      <p>Lived for: ${this.getDateFromCreated()}s</p>
      <p>Remaining time: ${this.getRemainingTime("days")} days, ${this.getRemainingTime("hours")} h </p>
    </div>
    `;

    return li;
  }
}

