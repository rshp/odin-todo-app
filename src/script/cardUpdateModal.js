export function cardUpdateModal(item) {
	const modalWrapper = document.createElement('div');
	modalWrapper.classList.add('modal-wrapper');

	const modalBackdrop = document.createElement('div');
	modalBackdrop.classList.add('modal-backdrop');
	modalWrapper.appendChild(modalBackdrop);

	const modalContainer = document.createElement('div');
	modalContainer.classList.add('modal-container');
	modalWrapper.appendChild(modalContainer);

	const modalTitle = document.createElement('p');
	modalTitle.classList.add('modal-title');
	modalTitle.textContent = 'Modify task';
	modalContainer.appendChild(modalTitle);

	let entryInnerHTML = `
  <div class="form-entry">
    <label for="first-name">Title<span class="required">*</span></label>
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
	}
}
