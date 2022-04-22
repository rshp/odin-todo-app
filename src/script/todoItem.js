import { v4 as uuidv4 } from 'uuid';
export function createTodoItem({
	category = 'default',
	title,
	descr = '',
	priority = 'low',
	dueDate = 'n/a',
} = {}) {
	const id = uuidv4();
	const prioritiesList = ['low', 'med', 'high'];
	const completed = false;
	if (!prioritiesList.includes(priority)) {
		priority = 'low';
		// console.warn('Priority is not low/med/high. Defaulted to low.');
	}

	if (!(dueDate == 'n/a' || dueDate instanceof Date)) {
		dueDate = 'n/a';
		// console.warn(
		// 	'dueDate must be instanse of Date or unspecified, defaulted to uspecified.'
		// );
	}

	return { id, category, title, descr, priority, dueDate, completed };
}
