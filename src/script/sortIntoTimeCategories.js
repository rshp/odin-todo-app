import endOfToday from 'date-fns/endOfToday';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import endOfWeek from 'date-fns/endOfWeek';
import isValid from 'date-fns/isValid';
import { appendByDate } from './appendByDate';
import TodoCard from './todoCard';
import { categoryTitleEventHandler } from './categoryTitleEventHandler';
export const sortIntoTimeCategories = (() => {
	let appContainer = null;

	function setAppContainer(container) {
		appContainer = container;
	}

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

	function sortItem(item) {
		timeCategories.forEach((category) => {
			const cardDiv = new TodoCard(item);
			if (category.filter(item.dueDate))
				appendByDate(category.catDiv, cardDiv, item);
		});
	}

	function setupCategories() {
		const tasksByTimeContainer = document.createElement('div');
		tasksByTimeContainer.classList.add('tasks-by-time');
		appContainer.appendChild(tasksByTimeContainer);

		timeCategories.forEach((category, index) => {
			const catDiv = document.createElement('div');
			catDiv.classList.add('category-container');
			timeCategories[index].catDiv = catDiv;
			const catTitle = document.createElement('p');
			catTitle.addEventListener('click', categoryTitleEventHandler);
			catTitle.textContent = category.displayName;
			catTitle.classList.add('category-title');
			catDiv.appendChild(catTitle);
			tasksByTimeContainer.appendChild(catDiv);
		});
	}

	return { sortItem, setAppContainer, setupCategories };
})();
