$(document).ready(function() {
// Global varaiables
var topAthletes = ["Cristiano Ronaldo", "Lebron James", "Lionel Messi", "Neymar", 
				"Roger Federer", "Kevin Durant", "Tiger Woods", "Virat Kohli", "James Rodriguez", "Rafael Nadal"];

createButtons();
//======================
	function createButtons() {
		$("#buttons").empty();
		for (var i = 0; i < topAthletes.length; i++) {
			var button = $("<button>")
			button.html(topAthletes[i]);
			button.attr("data-person", topAthletes[i]);
			$("#buttons").append(button);
		}	
	};
	
	$('button').on('click', function() {
		$('#gifsGoHere').empty();
		var p = $(this).data('person');
		console.log(p);
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";
	
		$.ajax ({
			url: queryURL,
			method: 'GET'	
		})			
		.done(function(response) {
			var results = response.data;		

			for (var i = 0; i < results.length; i++) {
				var gifDiv = $('<div class="item">')

				var rating = results[i].rating;
				
				var p = $('<p>').html("Rating: " + rating);
				
				var personImage = $('<img>');

				personImage.attr('src', results[i].images.fixed_height.url);
				
				gifDiv.append(personImage)
				gifDiv.append(p)

				$('#gifsGoHere').prepend(gifDiv);
			}
		});	
	});	 	

	$("#userAdd").on("click", function() {
		$('#gifsGoHere').empty();
		var addAthlete = $("#userEntry").val().trim();
		topAthletes.push(addAthlete);	
		createButtons();
	});
	//createButtons();
//==============



});