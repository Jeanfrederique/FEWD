// Define prototypical Slider function
Element.prototype.Slider = function(){
	//console.log('Hello World!');
	var slider = this;
	//UL is acting like a wrapper for the images so we'll called them that.
	var wrapper = slider.children[0];
	console.log(wrapper);
	var slides = wrapper.children;
	console.log(slides);
	//make position equal to zero
	var position = 1;
	var width = window.innerWidth;
	//this create an element but we have to tell it what we wnat.
	var leftButton = document.createElement('div');
	var rightButton = document.createElement('div');

	//Insert button into DOM
	//Give the classes
	//make left and right button children of slider
	var init = function(){
		//this will give us the number of li
		wrapper.style.width = slides.length * width + 'px';
		wrapper.style.height = '100%';

		leftButton.classList.add('left');
		rightButton.classList.add('right');

		slider.appendChild(leftButton);
		slider.appendChild(rightButton);

		//loops tru every slides in array and 
		for (var i = 0;  i<slides.length; i++) {
			slides[i].style.width = width + 'px';
		}

		//add eventListener to buttons
		leftButton.addEventListener('mousedown', function(){
			wrapper.style.marginLeft = width * position * -1 + 'px';
			position = position + 1;
		});

		rightButton.addEventListener('mousedown', function(){
			position = position - 1;
			wrapper.style.marginLeft = width * position * -1 + 'px'; 
		});
	}

	init();
}

/* end Slider */


