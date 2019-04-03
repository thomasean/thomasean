const accordions = document.querySelectorAll("[data-accordion]");

accordions.forEach(function(accordion){
	accordion.addEventListener('click', function(e) {
		var parNode = e.target.parentNode;
		if (parNode.className = "got--accordion__item") {
			parNode.classList.toggle("got--accordion__item--active");
		}
	})
});