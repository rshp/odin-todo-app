import { sortIntoTimeCategories } from './sortIntoTimeCategories';
import { sortIntoCategories } from './sortIntoCategories';
export const render = (() => {
	const appContainer = document.createElement('main');
	appContainer.classList.add('app-container');
	document.body.appendChild(appContainer);

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
	}
	function updateItem(item, changes) {
		const updatedItem = {};
	}
	return { newItem, deleteItem, updateItem };
})();
