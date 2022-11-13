import Item from "./Item";
import Observable from "./Observable";

export default class TodoList extends Observable {
  items: Item[] = [];
  error: any = '';

  constructor (items?: any[], error?: any) {
    super();

    this.error = error;
    this.items = items || [];
  }
  
  addItem(description: string) {
    if (!description) {
      this.error = 'Please enter a description';

      return this.error;
    }
    if (this.items.some((item:any) => item.description === description)) {
      this.error = 'Duplicate item';
      return this.error;
    }
    if (this.items.filter((item:any) => !item.done).length >= 5) {
      this.error = 'You can only have 5 items';
      return this.error;
    }

    const item = new Item(null, description);

    this.items.push(item);

    this.notify('addItem', item);

    return this.getAllItems() ;
    
  }
  
  removeItem(id: string) {
    this.items.splice(this.items.findIndex((item:any) => item.id === id), 1);

    this.notify('removeItem', id);

    return this.items;
  }
  
  toggleDone(item: any) {
    const todo = this.items.find((el: any) => el.id === item.id);
    item.done = !todo?.done;

    
    this.notify('toggleDone', item);
    
    return this.items;
  }

  getItem(id: string) {

    const item = this.items.find((item:any) => item.id === id);

    this.notify('getItem', item);

    return item
  }

  getAllItems() {

    this.notify('getAllItems', this.items);

    return this.items;
  }
  
  getCompleted() {


    const total = this.items.length;
    const done = this.items.filter((item:any) => item.done).length;

    const resultCompleted = Math.round((done / total) * 100);
  
    return resultCompleted;
  }

}