import TodoList from "../entities/TodoList";
import HttpClient from "../infra/HttpClient";
import TodoGateway from "./TodoGateway";

export default class TodoHttpGateway implements TodoGateway {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

  async getTodos(): Promise<any> {
    const todosData = await this.httpClient.get(`${this.baseUrl}/todos`);

    const todoList = new TodoList(todosData);

    return todoList;
  }
  async addItem(item: any): Promise<any> {
    const todosData = await this.httpClient.post(`${this.baseUrl}/todos`, item);

    return todosData;
  }
  async updateItem(item: any): Promise<any> {
    const todosData = await this.httpClient.put(`${this.baseUrl}/todos/${item.id}`);

    return todosData;
  }
  async removeItem(id: string): Promise<any> {
    const todosData = await this.httpClient.delete(`${this.baseUrl}/todos/${id}`);

    return todosData;
  }
}