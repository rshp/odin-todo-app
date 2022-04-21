import '../styles/modal.css';
export const cardModal = (() => {
	function createBlankModal() {
		const modalWrapper = document.createElement('div');
		modalWrapper.classList.add('modal-wrapper');

		const modalContainer = document.createElement('div');
		modalContainer.classList.add('modal-container');
		modalWrapper.appendChild(modalContainer);
		const placeholderValue = `--placeholder--`;
		const containerInnerHTML = `
		<h1 class"modal-title">${placeholderValue}</h1>
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
    <input
      type="text"
      name="descr"
      id="todo-descr"
      placeholder="Add task description"
			value="${placeholderValue}"
    />
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

		return modalWrapper;
	}
	return { createBlankModal };
})();
