//Define prototypical Gallery function
Element.prototype.Gallery = function(){

  // Define global variables
  var gallery = this;
  var ul = gallery.children[0];
  var photos = {};
  var photo = this;
  //var section = container.children[1];
  //or var photos = new object();

   this.singlePhoto = function(ev){
    //create a section
    //then add a classname to that section so that it could get its CSS
    //bring image to section
    var div = document.createElement('div');
    div.classList.add('single-photo');
  
      gallery.appendChild(div);
      div.style.backgroundImage = ev.toElement.style.backgroundImage;
      div.style.backgroundSize = 'cover';
      //div.style.opacity= 1;
      div.innerHTML = '<div class="meta"><h5>'+photo.name+'</h5><h6>'+photo.user+'</h6></div><div class="stats"><div>'+photo.rating+'</div></div>'+'</div>';
   

    console.log(ev.toElement.style.backgroundImage)

  }

  this.layoutPhotos = function(){
      // add logic for each photo in here
      photos.forEach(function(photo, index){
        //console.log(photo);
        var li = document.createElement('li');
        li.style.backgroundImage = 'url("'+photo.image_url+'")';
        li.style.backgroundSize = 'cover';
        li.innerHTML = '<div class="meta"><h5>'+photo.name+'</h5><h6>'+photo.user.fullname+'</h6></div><div class="stats"><div>'+photo.rating+'</div></div>'+'</div>';
        li.addEventListener('mousedown', gallery.singlePhoto)
        ul.appendChild(li);
      })

  };

  this.connect = function(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./models/popular-photos.json", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          photos = response.photos;
          gallery.layoutPhotos();
          

          // JSON.parse does not evaluate the attacker's scripts via xhr.responseText.

        }
      }
      xhr.send();
  };

  this.init = function(){

    this.connect();

  };


  this.init(); // do tasks on initialization.


};
/* end Gallery */
