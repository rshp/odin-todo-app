import { pubsubAdapter } from './pubsubAdapter';
import { createTodoItem } from './todoItem';
import { addDays } from 'date-fns';
import addHours from 'date-fns/addHours';
export default () => {
	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Clean dishes',
			category: 'Home Tasks',
			descr: 'Dirty plates are right there',
			priority: 'high',
			dueDate: addHours(new Date(), 2),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Clean floors',
			category: 'Home Tasks',
			descr: '',
			priority: 'low',
			dueDate: addDays(new Date(), 1),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Do laundry',
			category: 'Home Tasks',
			descr: 'Its full',
			priority: 'med',
			dueDate: addDays(new Date(), 2),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Clean dishes',
			category: 'Home Tasks',
			descr: 'Dirty plates will be right there...again!',
			priority: 'high',
			dueDate: addDays(new Date(), 1),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Clean windows',
			category: 'Home Tasks',
			descr: '',
			priority: 'high',
			dueDate: addDays(new Date(), 7),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Move table',
			category: 'Home Tasks',
			descr: 'Blocks the garden window',
			priority: 'low',
			dueDate: addDays(new Date(), 3),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Fix kettle',
			category: 'Home Tasks',
			descr: '...or buy new one',
			priority: 'high',
			dueDate: addDays(new Date(), 2),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Buy toilet paper',
			category: 'Home Tasks',
			descr: 'Next store visit',
			priority: 'high',
			dueDate: addDays(new Date(), 15),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Read about module patterns',
			category: 'Studies',
			descr: '',
			priority: 'med',
			dueDate: addDays(new Date(), 2),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Write GUI for to-do"s project',
			category: 'Studies',
			descr: '',
			priority: 'med',
			dueDate: addDays(new Date(), 3),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Look for optimisation modules in js',
			category: 'Studies',
			descr: 'Liner and non-linear',
			priority: 'med',
			dueDate: addDays(new Date(), 8),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Finish progress through TOP curriculum',
			category: 'Studies',
			descr: '',
			priority: 'low',
			dueDate: addDays(new Date(), 60),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Setup elliptical',
			category: 'Sport',
			descr: 'Its not used where it stands now',
			priority: 'high',
			dueDate: addDays(new Date(), 1),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Bike ride 20km',
			category: 'Sport',
			descr: 'Meet up with guys @ shore',
			priority: 'med',
			dueDate: addDays(new Date(), 3),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Evening walk',
			category: 'Sport',
			descr: '',
			priority: 'low',
			dueDate: addDays(new Date(), 1),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Evening walk',
			category: 'Sport',
			descr: '',
			priority: 'low',
			dueDate: addDays(new Date(), -1),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Check weather for desert hike',
			category: 'Sport',
			descr: '',
			priority: 'low',
			dueDate: addDays(new Date(), 17),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Check-in at family doctor',
			category: 'Health',
			descr: '',
			priority: 'low',
			dueDate: addDays(new Date(), 27),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Get blood checks',
			category: 'Health',
			descr: '',
			priority: 'low',
			dueDate: addDays(new Date(), 57),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Prep mother`s medical docs',
			category: 'Health',
			descr: '',
			priority: 'high',
			dueDate: addDays(new Date(), 2),
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Do morning exersize',
			category: 'Health',
			descr: '',
			priority: 'med',
			dueDate: '',
		})
	);

	pubsubAdapter.publishNewItem(
		createTodoItem({
			title: 'Clean sink!!!111',
			category: 'Home Tasks',
			descr: '',
			priority: 'med',
			dueDate: '',
		})
	);
};
