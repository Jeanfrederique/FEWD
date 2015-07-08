//var deck = ['s', 's', 's', 's', 'd', 'd', 'd', 'd', 'c', 'c', 'c', 'c', 'h', 'h', 'h', 'h'];

// var deck = [{
// 	value: 'spade',
// 	matched: false
// },
// {
// 	value: 'spade',
// 	matched: false
// },
// {
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
// },
// {
// 	value: 'diamond',
// 	matched: false
// },
// {
// 	value: 'diamond',
// 	matched: false
// },
// {
// 	value: 'club',
// 	matched: false
// },
// {
// 	value: 'club',
// 	matched: false
// },
// {
// 	value: 'club',
// 	matched: false
// },
// {
// 	value: 'club',
// 	matched: false
// },
// {
// 	value: 'heart',
// 	matched: false
// },
// {
// 	value: 'heart',
// 	matched: false
// },
// {
// 	value: 'heart',
// 	matched: false
// },
// {
// 	value: 'heart',
// 	matched: false
// }];

var container = document.getElementById('cards_container');




var deck = [{
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
}];



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
		
			compareMatched(evt.target.className)
		})
      
	});
	
}

shuffle();
//console.log(deck);
showDeckLayout();
var currentCards = [];
compareMatched = function(curVal){
	//console.log(curVal)
	//var val = curVal.target.className
	currentCards.push(curVal, function(val) {
	        return val === val;
	        console.log(val)
	});

}




checkMatched = function(c1){
	//console.log('card1', deck[card1-1].value)
	//console.log('card2', deck[card2-1].value)
	console.log(c1)
	//console.log(c1.target)
	console.log(c1.toElement.className)
	//console.log(c2)
	//console.log(c2.target)
	//console.log(c2.toElement.className)
	var one = c1.toElement.className ;
	var two = c2.toElement.className ;
	if (c1.toElement.className != null) {
		if (c2.toElement.className != null) {
			console.log("what")
		};
	};
}


















