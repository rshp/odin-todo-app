import endOfToday from 'date-fns/endOfToday';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import endOfWeek from 'date-fns/endOfWeek';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';
import TodoCard from './todoCard';
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
				// category.catDiv.appendChild(cardDiv);
				appendByDate(category.catDiv, cardDiv, item);
		});
	}

	function appendByDate(parentElement, cardDiv, item) {
		// console.log(parentElement.children);
		if (parentElement.children.length < 2) {
			parentElement.appendChild(cardDiv);
			return;
		}
		Array.from(parentElement.children).forEach((element) => {
			if (element.classList.contains('todo-card')) {
				if (
					isBefore(
						isValid(item.dueDate)
							? item.dueDate
							: new Date(1, 1, 2100),
						parseISO(element.dataset.date)
					)
				) {
					parentElement.insertBefore(cardDiv, element);
					return;
				}
			}
		});
		parentElement.appendChild(cardDiv);
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
			catTitle.textContent = category.displayName;
			catTitle.classList.add('category-title');
			catDiv.appendChild(catTitle);
			tasksByTimeContainer.appendChild(catDiv);
		});
	}

	return { sortItem, setAppContainer, setupCategories };
})();
