import '../styles/modal.css';
export const cardModal = (() => {
	function createModal() {
		const modalWrapper = document.createElement('div');
		modalWrapper.classList.add('modal-wrapper');

		const modalContainer = document.createElement('div');
		modalContainer.classList.add('modal-container');
		modalWrapper.appendChild(modalContainer);

		let containerInnerHTML = `
		<p class"modal-title">${1}</p>
		<div class="form-entry">
    <label for="title">Title<span class="required">*</span></label>
    <input
      type="text"
      name="title"
      id="todo-title"
      placeholder=""
      required
    />
  	</div>

		<div class="form-entry">
    <label for="category">Category</label>
    <input
      type="text"
      name="category"
      id="todo-category"
      placeholder=""
    />
  	</div>
	
		<div class="form-entry">
    <label for="descr">Category</label>
    <input
      type="text"
      name="descr"
      id="todo-descr"
      placeholder=""
    />
  	</div>
		
		<div class="form-entry">
		<label for="lo-option" class="priority-radio">
			<input type="radio" id="lo-option" name="selector" tabindex="1">
			<span>Low</span>
		</label>
		<label for="med-option" class="priority-radio">
			<input type="radio" id="med-option" name="selector" tabindex="2">
			<span>Med</span>
		</label>
			<label for="hi-option" class="priority-radio">
			<input type="radio" id="hi-option" name="selector" tabindex="3">
			<span>High</span>
		</label>
	  </div>
	
	
	
	
	`;
		modalContainer.appendChild(createFormEntry(entryInnerHTML));

		function createFormEntry(innerHTML) {
			const formEntry = document.createElement('div');
			formEntry.classList.add('form-entry');
			formEntry.innerHTML = innerHTML;
			return formEntry;
		}
		return modalWrapper;
	}
	return { createModal };
})();
