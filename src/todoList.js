import { createTodoItem } from './todoItem';
export const todoList = (() => {
	const todoListArray = [];

	function addItem(item) {
		todoListArray.push(item);
	}

	function deleteItem(id) {
		const index = todoListArray.findIndex((element) => {
			return element.id == id;
		});
		todoListArray.splice(index, 1);
	}

	function markComplete(id) {
		const index = todoListArray.findIndex((element) => {
			return element.id == id;
		});
		todoListArray[index].completed = true; //change to call object method to mark itself complete
	}

	function getItembyId(id) {
		return todoListArray.find((element) => {
			return element.id == id;
		});
	}

	// function changeItem(id, itemChanges) {   //item changes should be a regular item but without ID
	// 	const item = todoListArray.find((element) => {
	// 		return element.id == id;
	// 	});

	// }

	function getList() {
		return todoListArray;
	}

	return { addItem, deleteItem, getList, markComplete, getItembyId };
})();
