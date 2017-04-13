$(document).ready(function() {
	var multipleToggle = function(elem, max) {
		var activeButtons = elem.closest('.multiple-toggle').find('.btn.active').not('.skip');
console.log(activeButtons.length);
		if (activeButtons.length == max) {
console.log('max');
			var toBeUnselected = Math.floor(Math.random() * (max+1));
console.log(toBeUnselected);
			activeButtons.eq(toBeUnselected).removeClass('skip active btn-primary').addClass('btn-default');
		}
		elem.removeClass('btn-default skip').addClass('btn-primary active');
	};

	$('.btn').click(function(evt) {
		evt.preventDefault();
		$(this).addClass('skip');
		multipleToggle($(this), 2);
	});
});
