import { createTodoItem } from './script/todoItem';
import { pubsubAdapter } from './script/pubsubAdapter';
import { todoList } from './script/todoList';

let item = createTodoItem({
	title: 'Title1',
	category: 'Cat1',
	descr: 'a simple task',
	priority: 'low',
	dueDate: new Date(1995, 11, 17),
});
pubsubAdapter.publishNewItem(item);

item = createTodoItem({
	title: 'Title2',
	category: 'Cat3',
	descr: 'a simple111 task',
	priority: 'med',
	dueDate: new Date(1925, 11, 17),
});
pubsubAdapter.publishNewItem(item);

item = createTodoItem({
	title: 'Title4',
	category: 'Cat5',
	descr: 'a 111 task',
	priority: 'med',
	dueDate: new Date(2125, 11, 17),
});
pubsubAdapter.publishNewItem(item);
pubsubAdapter.publishUpdateItem(item.id, { descr: 'UPDATED!!!' });
