import { format } from 'date-fns';
import formatISO from 'date-fns/formatISO';
import { pubsubAdapter } from './pubsubAdapter';
import isValid from 'date-fns/isValid';
import { cardModal } from './cardModal';
export default class TodoCard {
	constructor(item) {
		const cardDiv = document.createElement('div');
		cardDiv.classList.add('todo-card');
		cardDiv.dataset.id = item.id;
		cardDiv.dataset.date = isValid(item.dueDate)
			? formatISO(item.dueDate)
			: formatISO(new Date(1, 1, 2100));

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
		if (item.completed) cardStatus.classList.toggle('status-complete');
		cardStatus.textContent = item.completed;

		const cardDueDate = document.createElement('div');
		cardDueDate.classList.add('card-date');
		cardDueDate.textContent = isValid(item.dueDate)
			? format(item.dueDate, 'dd/MM')
			: item.dueDate;

		const cardPriority = document.createElement('div');
		cardPriority.classList.add('card-priority');
		cardPriority.textContent = item.priority;

		const cardDelete = document.createElement('div');
		cardDelete.classList.add('card-delete');

		cardDiv.appendChild(cardStatus);
		cardDiv.appendChild(cardTitle);
		cardDiv.appendChild(cardCat);
		cardDiv.appendChild(cardDueDate);
		cardDiv.appendChild(cardPriority);
		cardDiv.appendChild(cardDelete);
		cardDiv.appendChild(cardDescr);

		cardDiv.addEventListener('click', cardEventHandler);

		function cardEventHandler(e) {
			if (e.target.classList.contains('card-delete')) {
				pubsubAdapter.publishDeleteItem(item.id);
				return;
			}
			if (e.target.classList.contains('card-status')) {
				if (item.completed)
					pubsubAdapter.publishUpdateItem(item, { completed: false });
				else pubsubAdapter.publishUpdateItem(item, { completed: true });
				return;
			}
			cardModal.showUpdateItemModal(item);
		}

		return cardDiv;
	}
}
