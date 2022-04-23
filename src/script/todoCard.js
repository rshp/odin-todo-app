import '../styles/todoCard.css';
import { format, parseISO } from 'date-fns';
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
			: formatISO(new Date(2030, 1, 2));

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

		const checkBoxSVG =
			'<svg viewBox="0 0 24 24">    <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>';
		const checkBoxCheckedSVG =
			'<svg viewBox="0 0 24 24">    <path fill="currentColor" d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" /></svg>';
		if (item.completed) {
			cardStatus.classList.toggle('status-complete');
			cardStatus.innerHTML = checkBoxCheckedSVG;
		} else cardStatus.innerHTML = checkBoxSVG;

		const cardDueDate = document.createElement('div');
		cardDueDate.classList.add('card-date');

		cardDueDate.textContent = isValid(new Date(item.dueDate))
			? format(new Date(item.dueDate), 'dd/MM')
			: '';
		switch (item.priority) {
			case 'low':
				cardDiv.classList.add('card-priority-low');
				break;
			case 'med':
				cardDiv.classList.add('card-priority-med');
				break;
			case 'high':
				cardDiv.classList.add('card-priority-high');
				break;
			default:
				break;
		}

		const cardDelete = document.createElement('div');
		const deleteSVG =
			'<svg viewBox="0 0 24 24">    <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>';
		cardDelete.innerHTML = deleteSVG;
		cardDelete.classList.add('card-delete');

		cardDiv.appendChild(cardStatus);
		cardDiv.appendChild(cardTitle);
		cardDiv.appendChild(cardCat);
		cardDiv.appendChild(cardDueDate);
		cardDiv.appendChild(cardDescr);
		cardDiv.appendChild(cardDelete);

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
