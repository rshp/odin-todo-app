import PubSub from 'pubsub-js';
import TodoCard from './todoCard';
export default () => {
	const timeCategories = [
		{ displayName: 'Today' },
		{ displayName: 'This Week' },
		{ displayName: 'Later' },
		{ displayName: 'Overdue' },
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

	timeCategories.forEach((category) => {
		const catDiv = document.createElement('div');
		catDiv.classList.add('category-name');
		tasksByCategoriesContainer.appendChild(catDiv);
	});

	function renderNewItem(topic, item) {
		const cardDiv = new TodoCard(item);
		appContainer.appendChild(cardDiv);
	}

	PubSub.subscribe('new item topic', renderNewItem);
};
