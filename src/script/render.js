import { sortIntoTimeCategories } from './sortIntoTimeCategories';
import { sortIntoCategories } from './sortIntoCategories';
import { cardModal } from './cardModal';
export const render = (() => {
	const appContainer = document.createElement('main');
	appContainer.classList.add('app-container');
	document.body.appendChild(appContainer);

	const newTodoButton = document.createElement('button');
	newTodoButton.classList.add('new-todo-button');
	newTodoButton.textContent = 'Add Task';
	newTodoButton.addEventListener('click', cardModal.showNewItemModal);
	appContainer.appendChild(newTodoButton);

	const modalWrapper = cardModal.getModalWrapper();
	document.body.appendChild(modalWrapper);

	sortIntoTimeCategories.setAppContainer(appContainer);
	sortIntoCategories.setAppContainer(appContainer);
	sortIntoTimeCategories.setupCategories();

	function newItem(item) {
		sortIntoTimeCategories.sortItem(item);
		sortIntoCategories.sortItems(item);
	}

	function deleteItem(itemId) {
		document
			.querySelectorAll(`[data-id='${itemId}']`)
			.forEach((element) => element.remove());
		document
			.querySelectorAll('.tasks-by-category .category-container')
			.forEach((container) => {
				if (container.childElementCount < 2) {
					sortIntoCategories.removeCatFromKnownCatList(
						container.dataset.category
					);
					container.remove();
				}
			});
	}
	function updateItem(item, changes) {
		deleteItem(item.id);
		const updatedItem = { ...item, ...changes };
		newItem(updatedItem);
	}
	return { newItem, deleteItem, updateItem };
})();
