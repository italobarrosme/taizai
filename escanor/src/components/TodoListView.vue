<script setup lang="ts">

import { onMounted, reactive, inject } from 'vue';
import TodoList from '../entities/TodoList';
import TodoGateway from '../gateways/TodoGateway';

import TodoListComponent from './TodoListComponent.vue';

import Observer from '../entities/Observer';


const data: any = reactive({
  todoList: new TodoList(),
});

const todoGateway = inject("todoGateway") as TodoGateway;


onMounted(async () => {
  const todoList = await todoGateway.getTodos();
  
  todoList.register(new Observer("addItem", async (item: any) => {
    await todoGateway.addItem(item);
  }));

  todoList.register(new Observer("removeItem", async (id: any) => {
    await todoGateway.removeItem(id);
  }));

  todoList.register(new Observer("toggleDone", async (item: any) => {
    await todoGateway.updateItem(item)
  }));

  data.todoList = todoList;
});



</script>

<template>
  <TodoListComponent :todo-list="data.todoList"></TodoListComponent>
</template>

<style scoped>
</style>
