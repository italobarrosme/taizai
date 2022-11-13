<script setup lang="ts">import { ref } from 'vue';
defineProps(["todoList"]);
const description = ref('');

</script>

<template>
  <h1 class="my-8 text-6xl">Todo List</h1>
  <h2 v-if="todoList.getCompleted() > 0" class="bg-brand-primary-light text-brand-accent-light rounded-3xl" :style="`width:${todoList.getCompleted()}%;`">
    {{todoList.getCompleted()}}% {{todoList.getCompleted() > 40 ? 'Completed' : ''}}</h2>
  
  <div class="my-4" v-if="todoList.items.length === 0">
    <p>There are no items in your list.</p>
  </div>
  
  <div v-else class="my-4 flex w-full items-center" v-for="item in todoList.items" :key="item.id">
    <span class="my-4 text-3xl uppercase" :class="item?.done ? 'line-through' : ''">{{ item?.description }}</span>
    <button class="mx-4 w-20 h-8 p-0" :class="item?.done ? 'bg-green-400' : '' " @click="todoList.toggleDone(item)">done</button>
    <button class="mx-4 w-20 h-8 p-0 bg-red-400" @click="todoList.removeItem(item?.id)">Remove</button>
  </div>
  <hr/>
  <div class="my-4">
    <input class="m-4 p-2" type="text" v-model="description" @keyup.enter="todoList.addItem(description), description = ''"  />
    <button class="mx-4 w-20 h-8" @click="todoList.addItem(description), description = ''">Add</button>
  </div>
  <small>
    <span v-if="todoList.error" class="text-red-400">{{ todoList.error }}</span>
  </small>
    
</template>

<style scoped>
</style>
