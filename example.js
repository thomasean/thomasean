const accordions = document.querySelectorAll('.bx--accordion');

accordions.forEach(function(accordion){
	accordion.addEventListener('click', function(e) {
		console.log(e.target);
	})
});