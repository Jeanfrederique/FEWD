Element.prototype.search = function(){

	var gallery = document.getElementById('gallery');
	var search = this;
	var input = this.children[0];

	// when the user focuses on the input, clear its content


	//after user presses "enter/return", filter the gallery <li> using tags from the JSON model.


	// create a getFiltered method in gallery that loops thru LI and add data attribute = tags
	this.init = function(){
		input.addEventListener('focus', function(){
			this.value = '';
		});
		input.addEventListener('keyup', function(evt){
			//console.log(evt.keyCode);
			if(evt.keyCode === 13) {
				var query = input.value;
				//console.log(query);
				gallery.filterphotos(query);
				//console.log(evt.keyCode);
			}
		})
	}

	this.init();
}

