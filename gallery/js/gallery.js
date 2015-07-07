//Define prototypical Gallery function
Element.prototype.Gallery = function(){

  // Define global variables
  var gallery = this;
  var ul = gallery.children[0];
  var photos = {};
  var photo = this;
  var tags = document.getElementsByTagName('data-section')
  var container = document.getElementById('container');
  //var closeBtn = document.createElement('div');
  this.allThetags = [];

  this.filterphotos = function(query){
    //console.log(query);

    
    for(var i=0; i<ul.children.length; i++){
      var tags = ul.children[i].dataset.tags;
      var arr = tags.split(',');
      //console.log(arr);
      var matched = false;

      arr.forEach(function(tag){
        if(tag === query){
          ul.children[i].style.display = 'block';
          matched = true;
        }
      })
      //grab the tags

      //check if tags is equal to the query
      //if there is a match show the li
      //if it isn't a match, hide the li
      if (matched === false) {
        ul.children[i].style.display = 'none';
      };

      if (query === 'all') {
        ul.children[i].style.display = 'block';
      }
    }


  }

   this.singlePhoto = function(evt){
      //console.log(evt.target.style.backgroundImage);
      console.log(evt)
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


  }

  this.layoutPhotos = function(){
      // add logic for each photo in here
      photos.forEach(function(photo, index){
        
        var li = document.createElement('li');
        li.style.backgroundImage = 'url("'+photo.image_url+'")';
        li.style.backgroundSize = 'cover';
        li.innerHTML = '<div class="meta"><h5>'+photo.name+'</h5><h6>'+photo.user.fullname+'</h6></div><div class="stats"><div>'+photo.rating+'</div></div>'+'</div>';
        
        //Create an empty array that we will populate.
        // we have access to the photo array
        var tags = [];
        //loop to array and push to new array  
        photo.tags.forEach(function(tag){
          //convert to lowecase
          tags.push(tag.toLowerCase());
        })
        //gallery.allThetags.push(tags);
        li.dataset.tags = tags;
        //li.dataset.tags = photo.tags

        li.dataset.description = photo.description;

        li.addEventListener('click', gallery.singlePhoto)
        ul.appendChild(li);
        //console.log(li);
      })
      //console.log(this.allThetags);
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
