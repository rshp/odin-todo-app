import TodoCard from './todoCard';
import { appendByDate } from './appendByDate';
import { categoryTitleEventHandler } from './categoryTitleEventHandler';
export const sortIntoCategories = (() => {
	let appContainer = null;
	function setAppContainer(container) {
		appContainer = container;
		appContainer.appendChild(tasksByCategoriesContainer);
	}
	let taskCategories = [];
	const tasksByCategoriesContainer = document.createElement('div');
	tasksByCategoriesContainer.classList.add('tasks-by-category');

	function sortItems(item) {
		const cardDiv = new TodoCard(item);
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
			catTitle.addEventListener('click', categoryTitleEventHandler);
			catDiv.appendChild(catTitle);
			taskCategories.push({ displayName: item.category, catDiv: catDiv });
			tasksByCategoriesContainer.appendChild(catDiv);
			catDiv.appendChild(cardDiv);
		} else {
			appendByDate(
				document.querySelector(`[data-category='${item.category}']`),
				cardDiv,
				item
			);
		}
	}

	return { setAppContainer, sortItems };
})();
