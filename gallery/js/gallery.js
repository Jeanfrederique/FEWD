//Define prototypical Gallery function
Element.prototype.Gallery = function(){

  // Define global variables
  var gallery = this;
  var ul = gallery.children[0];
  var photos = {};
  var photo = this;
  var container = document.getElementById('container');
  //var closeBtn = document.createElement('div');

   this.singlePhoto = function(evt){
      //console.log(evt.target.style.backgroundImage);

      //Create element to add on the document that'll hold the photo
      var section = document.createElement('section');
      section.classList.add('single-photo');
      section.innerHTML = evt.target.innerHTML;
      section.style.backgroundImage = evt.target.style.backgroundImage;
      // section.style.backgroundRepeat = 'no-repeat';
      // section.style.backgroundSize = 'contain';
      // section.style.backgroundPosition = 'center center';
      // section.style.height = '100%';

      var p = document.createElement('p');
      p.innerHTML = evt.target.dataset.description;
      

      var closeBtn = document.createElement('div');
      closeBtn.classList.add('close');

      closeBtn.addEventListener('click', function(){
        section.style.display = 'none';
      })

      section.children[0].appendChild(p);
      section.appendChild(closeBtn);
      container.appendChild(section);












    // //create a section
    // //then add a classname to that section so that it could get its CSS
    // //bring image to section
    // var div = document.createElement('div');
    // closeBtn.classList.add('close');
    // div.classList.add('single-photo');
    // container.appendChild(div);
    // div.appendChild(closeBtn);
    // div.style.backgroundSize = 'cover';
    // div.style.backgroundImage = ev.toElement.style.backgroundImage;
    // //li.style.backgroundImage = 'url("'+photo.image_url+'")';
    // //div.innerHTML = '<div class="meta"><h5>'+toElement.innerText+'</h5><h6>'+toElement.innerHTML+'</h6></div><div class="stats"><div>'+photo.rating+'</div></div>'+'</div>';
    // console.log(ev)

  }

  this.layoutPhotos = function(){
      // add logic for each photo in here
      photos.forEach(function(photo, index){
        //console.log(photo);
        var li = document.createElement('li');
        li.style.backgroundImage = 'url("'+photo.image_url+'")';
        li.style.backgroundSize = 'cover';
        li.innerHTML = '<div class="meta"><h5>'+photo.name+'</h5><h6>'+photo.user.fullname+'</h6></div><div class="stats"><div>'+photo.rating+'</div></div>'+'</div>';
        
        li.dataset.description = photo.description;

        li.addEventListener('click', gallery.singlePhoto)
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
