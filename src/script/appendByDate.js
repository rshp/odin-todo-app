import isValid from 'date-fns/isValid';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import parseISO from 'date-fns/parseISO';
export function appendByDate(parentElement, cardDiv, item) {
	const existingCards = Array.from(parentElement.children);
	existingCards.shift(); //remove <p> category title element
	//For any invalid date assume that it is in the future
	const itemDate = isValid(item.dueDate)
		? item.dueDate
		: new Date(1, 1, 2100);
	//Simply append if no cards present
	if (existingCards.length == 0) {
		parentElement.appendChild(cardDiv);
		return;
	}
	//Condition if single element present
	if (existingCards.length == 1) {
		if (isBefore(itemDate, parseISO(existingCards[0].dataset.date)))
			parentElement.insertBefore(cardDiv, existingCards[0]);
		else parentElement.appendChild(cardDiv);
		return;
	}
	//Condition for 2 or more elements
	for (let i = 0; i < existingCards.length - 1; i++) {
		if (isBefore(itemDate, parseISO(existingCards[i].dataset.date))) {
			parentElement.insertBefore(cardDiv, existingCards[i]);
			return;
		}
		if (
			isAfter(itemDate, parseISO(existingCards[i].dataset.date)) &&
			isBefore(itemDate, parseISO(existingCards[i + 1].dataset.date))
		) {
			parentElement.insertBefore(cardDiv, existingCards[i + 1]);
			return;
		}
		parentElement.appendChild(cardDiv);
	}
}
