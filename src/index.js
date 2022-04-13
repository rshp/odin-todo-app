import { todoList } from './todoList';
import { createTodoItem } from './todoItem';

let item = createTodoItem({
	title: 'Title1',
	category: 'Cat1',
	descr: 'a simple task',
	priority: 'low',
	dueDate: new Date(1995, 11, 17),
});
todoList.addItem(item);

item = createTodoItem({
	title: 'Title2',
	category: 'Cat3',
	descr: 'a simple111 task',
	priority: 'med',
	dueDate: new Date(1925, 11, 17),
});
todoList.addItem(item);

item = createTodoItem({
	title: 'Title4',
	category: 'Cat5',
	descr: 'a simple111 task',
	priority: 'med',
	dueDate: new Date(2125, 11, 17),
});
todoList.addItem(item);

console.log(todoList.getList());
