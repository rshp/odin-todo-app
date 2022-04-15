import PubSub from 'pubsub-js';
import { todoList } from './todoList';
export const pubsubAdapter = (() => {
	const NEW_ITEM = 'new item topic';
	const DELETE_ITEM = 'delete item topic';
	const UPDATE_ITEM = 'update item topic';

	const newItemSubscriber = function (topic, item) {
		todoList.addItem(item);
	};
	const deleteItemSubscriber = function (topic, itemId) {
		todoList.deleteItem(itemId);
	};
	const updateItemSubscriber = function (topic, data) {
		todoList.changeItem(data.id, data.changes);
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

	const publishUpdateItem = function (itemId, itemChanges) {
		PubSub.publish(UPDATE_ITEM, { id: itemId, changes: itemChanges });
	};

	return { publishNewItem, publishDeleteItem, publishUpdateItem };
})();
