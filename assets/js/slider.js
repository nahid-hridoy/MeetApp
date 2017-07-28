$('#next-item').click(function(){
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();
	currentSlide.fadeOut(400).removeClass('active');
	nextSlide.fadeIn(400).addClass('active');

	if (nextSlide.length == 0) {
		$('.slide').first().fadeIn(400).addClass('active');
	}
});

$('#prev-item').click(function(){
	var currentSlide = $('.slide.active');
	var prevSlide = currentSlide.prev();
	currentSlide.fadeOut(400).removeClass('active');
	prevSlide.fadeIn(400).addClass('active');

	if (prevSlide.length == 0) {
		$('.slide').last().fadeIn(400).addClass('active');
	}
});