import TodoCard from './todoCard';
import endOfToday from 'date-fns/endOfToday';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import endOfWeek from 'date-fns/endOfWeek';
import isValid from 'date-fns/isValid';
export const render = (() => {
	const timeCategories = [
		{
			displayName: 'Today',
			filter: (date) => {
				if (!isValid(date)) return false;
				return isFuture(date) && isBefore(date, endOfToday());
			},
		},
		{
			displayName: 'This Week',
			filter: (date) => {
				if (!isValid(date)) return false;
				return isFuture(date) && isBefore(date, endOfWeek(new Date()));
			},
		},
		{
			displayName: 'Later',
			filter: (date) => {
				if (!isValid(date)) return false;
				return isAfter(date, endOfWeek(new Date()));
			},
		},
		{
			displayName: 'Overdue',
			filter: (date) => {
				if (!isValid(date)) return false;
				return isPast(date);
			},
		},
		{
			displayName: 'No date',
			filter: (date) => {
				return !isValid(date);
			},
		},
	];

	let taskCategories = [];

	const appContainer = document.createElement('main');
	appContainer.classList.add('app-container');
	document.body.appendChild(appContainer);

	const tasksByCategoriesContainer = document.createElement('div');
	tasksByCategoriesContainer.classList.add('tasks-section');
	const tasksByTimeContainer = document.createElement('div');
	tasksByTimeContainer.classList.add('tasks-section');
	appContainer.appendChild(tasksByTimeContainer);
	appContainer.appendChild(tasksByCategoriesContainer);

	timeCategories.forEach((category, index) => {
		const catDiv = document.createElement('div');
		catDiv.classList.add('category-container');
		timeCategories[index].catDiv = catDiv;
		const catTitle = document.createElement('p');
		catTitle.textContent = category.displayName;
		catTitle.classList.add('category-title');
		catDiv.appendChild(catTitle);
		tasksByCategoriesContainer.appendChild(catDiv);
	});
	console.log(timeCategories);

	function newItem(item) {
		timeCategories.forEach((category) => {
			const cardDiv = new TodoCard(item);
			if (category.filter(item.dueDate))
				category.catDiv.appendChild(cardDiv);
		});
	}

	function deleteItem(itemId) {
		document
			.querySelectorAll(`[data-id='${itemId}']`)
			.forEach((element) => element.remove());
	}
	function updateItem(itemId, changes) {}
	return { newItem, deleteItem, updateItem };
})();
