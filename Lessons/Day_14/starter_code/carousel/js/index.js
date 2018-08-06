$(document).ready(function() {
	$("#buttons-wrapper .btn[value='Skip']").on("click", nextImage);
	$("#buttons-wrapper .btn[value='Back']").on("click", previousImage);
	$("#your-vote").on("change", voteAdded);
});

var i = 0; // keep track of image index
var votes = [];
var images = [
	"images/food1.jpg",
	"images/food2.jpg",
	"images/food3.jpg",
	"images/food4.jpg",
	"images/food5.jpg",
	"images/food6.jpg",
	"images/food7.jpg",
	"images/food8.jpg"
	];

function calculateVotes() {
	var sum = 0;
	var totalElemenets = 0;
	votes.forEach(function(num) {
		sum += num;
		if (num) {
			totalElemenets++
		}
	});
	$('#image-to-vote-on+div').html(
		"The average is " + (sum / totalElemenets).toFixed(2)
		);
}

function voteAdded() {
	// get value of vote, parse it into integer and store in votes.
	votes[i] = parseInt( $('#your-vote').val() );
	$('#your-vote').val("");
	if (i < images.length - 1) {
		nextImage();
	} 
		
}


function nextImage() {
	if (i < (images.length - 1)) {
		$('#image-to-vote-on').attr('src', images[i++]);
	}
}
	

function previousImage() {
	if (i > 0) {
		$('#image-to-vote-on').attr('src', images[--i]);
	}
	calculateVotes();
}