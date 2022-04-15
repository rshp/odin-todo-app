// import { createTodoItem } from './script/todoItem';
// import { pubsubAdapter } from './script/pubsubAdapter';
import { todoList } from './script/todoList';
import sampledata from './script/sampledata';
sampledata();

setTimeout(() => {
	console.log(todoList.getList());
}, 200);
