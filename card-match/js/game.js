Element.prototype.Game = function () {
  var game = this,
  container = document.getElementById("container"),
  table = document.getElementById("table"),
  suites = ["diamond","diamond","diamond","diamond","clubs","clubs","clubs","clubs","heart","heart","heart","heart","spade","spade","spade","spade"];
  suitesOnTable = [],
  clickNum = 0,
  count = 0,
  matchNum = 0;

  // game over pop-up

  this.gameOver = function() {
    document.body.scrollTop = 0;
    var popup = document.createElement("div");
    popup.id = "game-over";
    popup.innerHTML = "Game Over";
    document.body.appendChild(popup);
    var score = document.createElement("div");
    score.id = "score";
    score.innerHTML = "Your score: "+matchNum;
    popup.appendChild(score);
    var close = document.createElement("div");
    close.id = "close";
    popup.appendChild(close);
    container.classList.add("blur-filter");
    close.addEventListener("click",function(){
      location.reload();
    });
  }

  //processes input

  game.model = function(target  ) {
    if(target.className == "back") {
      if(clickNum<=2) {
        target.style.transform = "rotateX(-90deg)";
        target.style.visibility = "hidden";
        suitesOnTable.push(target);
        suites.pop();
        if(clickNum==2) {
          var firstSuite = suitesOnTable[0];
          if(firstSuite.nextSibling.className==target.nextSibling.className) {
            suitesOnTable = [];
            clickNum = 0;
            matchNum++;
            console.log("match")
            if (count==suites.length) {
              setTimeout(function(){
                game.gameOver();
              }, 500);
            }
          } else {
            var firstSuite = suitesOnTable[0];
            setTimeout(function(){
              firstSuite.style.visibility = "visible";
              firstSuite.style.transform = "rotateX(0deg)";
            }, 200);
            setTimeout(function(){
              target.style.visibility = "visible";
              target.style.transform = "rotateX(0deg)";
            }, 500);
            suitesOnTable = [];
            clickNum = 0;
            console.log("no match")
            if (count==suites.length) {
              setTimeout(function(){
                game.gameOver();
              }, 500);
            }
          }
        }
      }
    } else {
      if(target.className!="back") {
        clickNum--;
        count--;
      }
    }
  }

  //runs validations on ev.target

  this.controller = function(ev) {
    var target = ev.target;
    clickNum++;
    count++;
    if(count<suites.length) {
      game.model(target)
    } else {
      setTimeout(function(){
        game.gameOver();
      }, 1000);
    }
  }

  // set cards on the table

  this.view = function (suites){
    for (var i=0;i<=suites.length;i++) {
      var el = document.createElement("div");
      el.classList.add("card");
      table.appendChild(el);
      var back = document.createElement("div");
      back.classList.add("back");
      el.appendChild(back);
      var suite = document.createElement("div");
      suite.classList.add(suites[i]);
      el.appendChild(suite);
    }

  };

  //shuffle cards in array, returns to same array

  this.shuffle = function(input) {
    for (var i = input.length-1; i >=0; i--) {
      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = input[randomIndex];
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  };

  this.init = function () {
    game.shuffle(suites);
    game.view(suites);
    table.addEventListener("click", function(ev){
      game.controller(ev);
    });
  }
  game.init();
};