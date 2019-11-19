$(document).ready(function() {
    // run function on initial page load
	flowerGuess();
});

function flowerGuess() {
	var flowerArray = ["Rose","Sunflower","Carnation","SpiderLily","Lily","ForgetMeNot","Lavender","Peony","Daffodil","Pansy","Honeysuckle","Tulip","Irises","Primrose","Chrysanthemum","Orchid","Violet","Hydrangea","SweetPea","Marigold","Gladiolus","WaterLily","Buttercup","Poppy","TigerLily","Snapdragon","Camellia","Wisteria"];
	var randomNumber = Math.floor(Math.random() * flowerArray.length);
	var stripped = flowerArray[randomNumber].toLowerCase();
	console.log(flowerArray[randomNumber]);
	console.log(stripped);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == flowerArray[randomNumber]) {
			$('h1').text('That is correct!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text('That is wrong!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	});
	$(document).keypress(function(e){
			if(e.which == 13){ //Enter key pressed
					$('#submit').click();//Trigger button click event
			}
	});
}
