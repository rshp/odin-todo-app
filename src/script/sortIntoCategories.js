import TodoCard from './todoCard';
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

	return { setAppContainer, sortItems };
})();
