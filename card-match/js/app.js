//var deck = ['s', 's', 's', 's', 'd', 'd', 'd', 'd', 'c', 'c', 'c', 'c', 'h', 'h', 'h', 'h'];

var deck = [{
	value: 'spade',
	matched: false
},
{
	value: 'spade',
	matched: false
},
{
	value: 'spade',
	matched: false
},
{
	value: 'spade',
	matched: false
},
{
	value: 'diamond',
	matched: false
},
{
	value: 'diamond',
	matched: false
},
{
	value: 'diamond',
	matched: false
},
{
	value: 'diamond',
	matched: false
},
{
	value: 'club',
	matched: false
},
{
	value: 'club',
	matched: false
},
{
	value: 'club',
	matched: false
},
{
	value: 'club',
	matched: false
},
{
	value: 'heart',
	matched: false
},
{
	value: 'heart',
	matched: false
},
{
	value: 'heart',
	matched: false
},
{
	value: 'heart',
	matched: false
}];

var container = document.getElementById('cards_container');



// var deck = [{
// 	value: 'spade',
// 	matched: false
// },
// {
// 	value: 'spade',
// 	matched: false
// },
// {
// 	value: 'diamond',
// 	matched: false
// },
// {
// 	value: 'diamond',
// 	matched: false
// }];



shuffle = function(){
	deck.sort(function() {
	  	return .5 - Math.random();
	});
}

this.showDeckLayout = function(){
	var cards = [];
	
	deck.forEach(function(card){
		var div = document.createElement('div');
      		div.classList.add(card.value);
      		container.appendChild(div);

      	div.addEventListener('click', function(evt){
		
			compareMatched(evt)
		})
      
	});
	
}

shuffle();
//console.log(deck);
showDeckLayout();
var currentCards = [];
var click = 1;
compareMatched = function(curVal){

var cardBack = document.getElementById('curVal.target.className');
//console.log(curVal.target.className)
	//console.log(curVal.target.className)
	//console.log('click', click++);
	if (click>2){
		
		
		click = 1;
	checkMatched(curVal)
      	
	} 
	



	// currentCards.push(curVal) 
	//         return val === val;
	//         console.log(val)
	// if (!card.matched) {
	// 		cards.push('x')
	// 	}else{
	// 		cards.push(card.value)
	// 	};

}

// var currentCards = [];
// var click = 1;
// compareMatched = function(curVal){

// 	console.log('click', click++);
// 	if (click>2) click = 1;

// 	//console.log(curVal)


checkMatched = function(curVal){
	//console.log('card1', deck[card1-1].value)
	//console.log('card2', deck[card2-1].value)
	//console.log(c1)
	//console.log(c1.target)
	console.log(curVal)
	//console.log(c2)
	//console.log(c2.target)
	//console.log(c2.toElement.className)
	var one = curVal.toElement.className ;
	var two = curVal2.toElement.className ;
	if (one.toElement.className != null) {
		if (two.toElement.className != null) {
			console.log("what")
		};
	};
}


















