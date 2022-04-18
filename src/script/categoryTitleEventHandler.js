export function categoryTitleEventHandler(e) {
	const categoryCards = e.target.parentElement.querySelectorAll('.todo-card');
	categoryCards.forEach((card) => {
		card.style.display = card.style.display === 'none' ? '' : 'none';
	});
}
