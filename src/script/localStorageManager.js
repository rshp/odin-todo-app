import { pubsubAdapter } from './pubsubAdapter';
export const localStorageManager = (() => {
	function isPopulated() {
		return localStorage.length;
	}
	function saveItemList(itemList) {
		localStorage.setItem('itemList', JSON.stringify(itemList));
	}
	function postSavedList() {
		const itemList = JSON.parse(localStorage.getItem('itemList'));
		itemList.forEach((item) => {
			item.dueDate =
				item.dueDate == null ? 'n/a' : new Date(item.dueDate); //restore Date metadata and process null date not to be converted to 1.1.1970
			pubsubAdapter.publishNewItem(item);
		});
	}
	return { saveItemList, postSavedList, isPopulated };
})();
