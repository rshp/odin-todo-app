import PubSub from 'pubsub-js';
import { todoList } from './todoList';
import { render } from './render';
export const pubsubAdapter = (() => {
	const NEW_ITEM = 'new item topic';
	const DELETE_ITEM = 'delete item topic';
	const UPDATE_ITEM = 'update item topic';

	const newItemSubscriber = function (topic, item) {
		todoList.addItem(item);
		render.newItem(item);
	};
	const deleteItemSubscriber = function (topic, itemId) {
		todoList.deleteItem(itemId);
		render.deleteItem(itemId);
	};
	const updateItemSubscriber = function (topic, data) {
		todoList.changeItem(data.item, data.changes);
	};

	PubSub.subscribe(NEW_ITEM, newItemSubscriber);
	PubSub.subscribe(DELETE_ITEM, deleteItemSubscriber);
	PubSub.subscribe(UPDATE_ITEM, updateItemSubscriber);

	const publishNewItem = function (item) {
		PubSub.publish(NEW_ITEM, item);
	};

	const publishDeleteItem = function (itemId) {
		PubSub.publish(DELETE_ITEM, itemId);
	};

	const publishUpdateItem = function (item, itemChanges) {
		PubSub.publish(UPDATE_ITEM, { item: item, changes: itemChanges });
	};

	return { publishNewItem, publishDeleteItem, publishUpdateItem };
})();
