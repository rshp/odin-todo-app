import '../styles/modal.css';
export const cardModal = (() => {
	function createModal() {
		const modalWrapper = document.createElement('div');
		modalWrapper.classList.add('modal-wrapper');

		const modalContainer = document.createElement('div');
		modalContainer.classList.add('modal-container');
		modalWrapper.appendChild(modalContainer);

		const modalTitle = document.createElement('p');
		modalTitle.classList.add('modal-title');
		modalTitle.textContent = 'Modify task';
		modalContainer.appendChild(modalTitle);

		let entryInnerHTML = `
  <div class="form-entry">
    <label for="title">Title<span class="required">*</span></label>
    <input
      type="text"
      name="title"
      id="todo-title"
      placeholder=" "
      required
    />
  </div>`;
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
