Element.prototype.Nav = function(){

  var nav = this,

      navItems = nav.children[0].children;
      sections = document.getElementsByTagName('section');
      btn = document.createElement('div'),
      container = document.getElementById('container');

      console.log(sections.gallery);

  this.toggleNav = function(){
    if(container.style.left === "0px"){
      container.style.left = "320px";
    }
    else{
      container.style.left = "0px";
    }
  };

  this.createButton = function(){

    btn.classList.add('hamburger');

    btn.addEventListener('mousedown',nav.toggleNav);

    container.appendChild(btn);

  };


  //Hide all the sections
  this.hideSection = function(){
    for(var i=0; i<sections.length; i++){
      sections[i].style.opacity = '0';
      sections[i].style.zIndex = '0';
      sections[i].style.display = 'none';
    }

  }

  // Show a section
  this.showSection = function(id){
    this.hideSection();
    //console.log(document.getElementById('id').style)
    console.log(document.getElementById(id))
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).style.opacity = '1.0';
    document.getElementById(id).style.zIndex = '50';
  }




  this.init = function(){

    nav.createButton();

    //loop thru all li and add event listener
    for(var i=0; i<navItems.length; i++){
      navItems[i].addEventListener('click', function(evt){
        
        var id = evt.target.dataset.section;
        nav.showSection(id);
        nav.toggleNav();

        //console.log(id);
      })
    };


  };

  this.init();
};
