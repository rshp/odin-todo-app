import { format } from 'date-fns';
import { pubsubAdapter } from './pubsubAdapter';
import isValid from 'date-fns/isValid';
export default class TodoCard {
	constructor(item) {
		const cardDiv = document.createElement('div');
		cardDiv.classList.add('todo-card');
		cardDiv.dataset.id = item.id;

		const cardTitle = document.createElement('div');
		cardTitle.classList.add('card-title');
		cardTitle.textContent = item.title;

		const cardDescr = document.createElement('div');
		cardDescr.classList.add('card-descr');
		cardDescr.textContent = item.descr;

		const cardCat = document.createElement('div');
		cardCat.classList.add('card-cat');
		cardCat.textContent = item.category;

		const cardStatus = document.createElement('div');
		cardStatus.classList.add('card-status');
		cardStatus.textContent = item.completed;

		const cardDueDate = document.createElement('div');
		cardDueDate.classList.add('card-date');
		cardDueDate.textContent = isValid(item.dueDate)
			? format(item.dueDate, 'dd/MM')
			: item.dueDate;

		const cardPrioriry = document.createElement('div');
		cardPrioriry.classList.add('card-priority');

		const cardDelete = document.createElement('div');
		cardDelete.classList.add('card-delete');

		cardDiv.appendChild(cardStatus);
		cardDiv.appendChild(cardTitle);
		cardDiv.appendChild(cardCat);
		cardDiv.appendChild(cardDueDate);
		cardDiv.appendChild(cardPrioriry);
		cardDiv.appendChild(cardDelete);
		cardDiv.appendChild(cardDescr);

		cardDiv.addEventListener('click', cardEventHandler);

		function cardEventHandler(e) {
			if (e.target.classList.contains('card-delete'))
				pubsubAdapter.publishDeleteItem(item.id);
		}

		return cardDiv;
	}
}
