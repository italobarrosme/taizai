import TodoList from '../src/entities/TodoList';

test("Should create a complete list with 2 items", async () => {
  const todoList = new TodoList();
  todoList.addItem("Item 1");
  todoList.addItem("Item 2");
  expect(todoList.items.length).toBe(2);
});

test("Should create a todo list with 4 items and 2 items as done", () => {
  const todoList = new TodoList();
  todoList.addItem("Item 1");
  todoList.addItem("Item 2");
  todoList.addItem("Item 3");
  todoList.addItem("Item 4");

  const todos = todoList.getAllItems();
  
  todos[0].done = true;
  todos[1].done = true;

  expect(todos.length).toBe(4);
  expect(todoList.getCompleted()).toBe(50);
  
})

test("Should create a todo list with 3 items and remove 1 item", () => {
  const todoList = new TodoList();
  todoList.addItem("Item 1");
  todoList.addItem("Item 2");
  todoList.addItem("Item 3");

  const todos = todoList.getAllItems();
  
  expect(todos.length).toBe(3);
  
  todoList.removeItem(todos[0].id);

  expect(todos.length).toBe(2);
  
})