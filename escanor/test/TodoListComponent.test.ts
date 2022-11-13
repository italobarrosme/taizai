import { mount } from "@vue/test-utils";
import TodoListComponentVue from "../src/components/TodoListComponent.vue";
import TodoList from "../src/entities/TodoList";

function sleep (mili: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, mili);
	});
}

test("Should screen component ", async function () {
	const todoList = new TodoList();
	
  todoList.addItem("Item 1");
  todoList.addItem("Item 2");

  const wrapper = mount(TodoListComponentVue, {
    props: {
      todoList,
    },
  });

  await sleep(3000);

  expect(wrapper.get("h1").text()).toBe("Todo List");
});