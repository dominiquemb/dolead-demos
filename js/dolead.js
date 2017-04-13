$(document).ready(function() {
	var mockData = { 0: true, 1: false, 2: true };

	var multipleToggle = function(elem, max) {
		var i = 0;
		var otherButtonIndexes = [];
		var activeButtons = elem.closest('.multiple-toggle').find('.btn.active').not('.skip');
		activeButtons.each(function(index, val) {
			otherButtonIndexes.push(parseInt($(val).data('index')));
		});
		if (otherButtonIndexes.length == max) {
			var rand = Math.floor(Math.random() * (otherButtonIndexes.length));
			var toBeUnselected = otherButtonIndexes[rand];
			activeButtons.each(function(i, button) {
				if (parseInt($(button).data('index')) == toBeUnselected) {
					$(button).removeClass('skip active btn-primary').addClass('btn-default');
				}
			});
		}
		elem.removeClass('btn-default skip').addClass('btn-primary active');
	};

	var updateUI = function() {
		$('.multiple-toggle .btn').each(function(i, v) {
			var active = mockData[i];
			if (active) {
				$(v).addClass('btn-primary active').removeClass('btn-default');
			} 
			else {
				$(v).removeClass('btn-primary active').addClass('btn-default');
			}
		});
	};

	var fetchData = function() {
		// just for demo purposes
		mockData = {0: true, 1: true, 2: true};	

		// simulating delay
		setTimeout(function() {
			updateUI();
		}, 100);
	};

	var timer = false;

	$('.btn').click(function(evt) {
		evt.preventDefault();
		if ($(this).hasClass('btn-primary')) {
			$(this).removeClass('btn-primary active skip').addClass('btn-default');
		} else {
			$(this).addClass('skip');
			multipleToggle($(this), 2);
		}

		clearTimeout(timer);
		timer = setTimeout(function() {
			fetchData();
		}, 500);
	});

});
