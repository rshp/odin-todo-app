export function categoryTitleEventHandler(e) {
	e.target.classList.toggle('collapsed-category');
	e.target.parentElement.classList.toggle('collapsed-category');
	const isCollapsed = e.target.classList.contains('collapsed-category');
	console.log(isCollapsed);
	const categoryCards = e.target.parentElement.querySelectorAll('.todo-card');
	categoryCards.forEach((card) => {
		// card.style.display = card.style.display === 'none' ? '' : 'none';
		if (isCollapsed) card.classList.add('collapsed-card');
		else card.classList.remove('collapsed-card');
	});
}
