import { isValid } from 'date-fns';
import '../styles/modal.css';
import { pubsubAdapter } from './pubsubAdapter';
import { createTodoItem } from './todoItem';
export const cardModal = (() => {
	const modalWrapper = createBlankModal();
	let currentItem;
	let modalMode;

	function getModalWrapper() {
		return modalWrapper;
	}

	function createBlankModal() {
		const modalWrapper = document.createElement('div');
		modalWrapper.classList.add('modal-wrapper');
		const modalContainer = document.createElement('div');
		modalContainer.classList.add('modal-container');
		modalWrapper.appendChild(modalContainer);
		const placeholderValue = `--placeholder--`;
		const containerInnerHTML = `
		<h1 class="modal-title">${placeholderValue}</h1>
		<form>
		<div class="form-entry">
    <label for="todo-title">Title<span class="required">*</span></label>
    <input
      type="text"
      name="title"
      id="todo-title"
      placeholder="Task title"
			value ="${placeholderValue}"
      required
    />
  	</div>

		<div class="form-entry">
    <label for="todo-category">Category</label>
    <input list="categories" name="category" id="todo-category"
		placeholder="Task category"
			value="${placeholderValue}"
    />
		<datalist id="categories">
		</datalist>
  	</div>
	
		<div class="form-entry">
    <label for="todo-descr">Description</label>
    <textarea id="todo-descr" name="descr"	rows="5" cols="33" placeholder="Add task description">
		</textarea>
  	</div>
		
		<div class="form-entry priority-section">
		<p>Priority<span class="required">*</span></p>
			<input type="radio" id="lo-option" name="priority-option" checked>
			<label for="lo-option" class="priority-radio">Low</label>
		
			<input type="radio" id="med-option" name="priority-option" >
			<label for="med-option" class="priority-radio">Med</label>
			
			<input type="radio" id="hi-option" name="priority-option" >
			<label for="hi-option" class="priority-radio">High</label>
	  </div>

		<div class="form-entry">
		<label for="todo-duedate">Due date</label>
		<input type="date" name="dueDate" id="todo-duedate">
		</div>

		<button type="submit">${placeholderValue}</button>
	</form>
			`;
		modalContainer.innerHTML = containerInnerHTML;
		modalWrapper.addEventListener('click', (e) => {
			if (e.target == modalWrapper) modalWrapper.style.display = 'none';
		});

		return modalWrapper;
	}

	function showNewItemModal() {
		modalMode = 'NEW_ITEM';
		modalWrapper.querySelector('.modal-title').innerHTML = 'New Task';
		modalWrapper.querySelector('button').textContent = 'Add';
		modalWrapper.querySelector('#todo-title').value = '';
		modalWrapper.querySelector('#todo-category').value = '';
		modalWrapper.querySelector('#todo-descr').value = '';
		modalWrapper.style.display = 'flex';
		modalWrapper
			.querySelector('form')
			.addEventListener('submit', processFormSubmit);
	}

	function showUpdateItemModal(item) {
		modalMode = 'UPDATE_ITEM';
		currentItem = item;
		modalWrapper.querySelector('.modal-title').innerHTML = 'Task Update';
		modalWrapper.querySelector('button').textContent = 'Update';
		modalWrapper.querySelector('#todo-title').value = item.title;
		modalWrapper.querySelector('#todo-category').value = item.category; //add category options from available categories
		modalWrapper.querySelector('#todo-descr').value = item.descr;
		setPrioritySelection(item);
		modalWrapper.querySelector('#todo-duedate').valueAsDate = isValid(
			item.dueDate
		)
			? item.dueDate
			: null;
		modalWrapper.style.display = 'flex';

		modalWrapper
			.querySelector('form')
			.addEventListener('submit', processFormSubmit);
	}

	function processFormSubmit(event) {
		event.preventDefault();
		const selectedPriority = event.target.querySelector(
			'input[name="priority-option"]:checked'
		).id;
		const itemChanges = {
			title: event.target.elements['title'].value,
			category: event.target.elements['category'].value,
			descr: event.target.elements['descr'].value,
			priority: selectedPriorityToPriority(selectedPriority),
			dueDate: new Date(event.target.elements['dueDate'].value),
		};

		switch (modalMode) {
			case 'NEW_ITEM':
				pubsubAdapter.publishNewItem(createTodoItem(itemChanges));
				break;
			case 'UPDATE_ITEM':
				pubsubAdapter.publishUpdateItem(currentItem, itemChanges);
				break;
		}

		modalWrapper.style.display = 'none';
	}

	function selectedPriorityToPriority(idSelector) {
		switch (idSelector) {
			case 'lo-option':
				return 'low';
			case 'med-option':
				return 'med';
			case 'hi-option':
				return 'high';
			default:
				break;
		}
	}

	function setPrioritySelection(item) {
		let prioritySelector;
		switch (item.priority) {
			case 'low':
				prioritySelector = '#lo-option';
				break;
			case 'med':
				prioritySelector = '#med-option';
				break;
			case 'high':
				prioritySelector = '#hi-option';
				break;
			default:
				break;
		}
		modalWrapper.querySelector(prioritySelector).checked = true;
	}

	return { showUpdateItemModal, getModalWrapper, showNewItemModal };
})();
