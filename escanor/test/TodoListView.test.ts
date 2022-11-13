import { mount } from '@vue/test-utils'
import TodoListView from '../src/components/TodoListView.vue'
import TodoMemoryGateway from '../src/gateways/TodoMemoryGateway';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test("Deve testar a tela de todo list", async () => {

  const todoGateway = new TodoMemoryGateway

  const wrapper = mount(TodoListView, {
    global: {
      provide: {
        todoGateway,
      },
    }
  })
  await sleep(3000);
  expect(wrapper.get("h1").text()).toBe("Todo List");
});