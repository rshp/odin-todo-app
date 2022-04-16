import TodoCard from './todoCard';
import { sortIntoTimeCategories } from './sortIntoTimeCategories';
export const render = (() => {
	const appContainer = document.createElement('main');
	appContainer.classList.add('app-container');
	document.body.appendChild(appContainer);

	let taskCategories = [];
	const tasksByCategoriesContainer = document.createElement('div');
	tasksByCategoriesContainer.classList.add('tasks-by-category');
	appContainer.appendChild(tasksByCategoriesContainer);

	sortIntoTimeCategories.setAppContainer(appContainer);
	sortIntoTimeCategories.setupCategories();

	function newItem(item) {
		sortIntoTimeCategories.sortItem(item);

		if (
			!taskCategories.some((element) => {
				return element.displayName == item.category;
			})
		) {
			const catDiv = document.createElement('div');
			catDiv.classList.add('category-container');
			catDiv.dataset.category = item.category;
			const catTitle = document.createElement('p');
			catTitle.textContent = item.category;
			catTitle.classList.add('category-title');
			catDiv.appendChild(catTitle);
			taskCategories.push({ displayName: item.category, catDiv: catDiv });
			tasksByCategoriesContainer.appendChild(catDiv);
			const cardDiv = new TodoCard(item);
			catDiv.appendChild(cardDiv);
		} else {
			const cardDiv = new TodoCard(item);
			document
				.querySelector(`[data-category='${item.category}']`)
				.appendChild(cardDiv);
		}
	}

	function deleteItem(itemId) {
		document
			.querySelectorAll(`[data-id='${itemId}']`)
			.forEach((element) => element.remove());
	}
	function updateItem(itemId, changes) {}
	return { newItem, deleteItem, updateItem };
})();
