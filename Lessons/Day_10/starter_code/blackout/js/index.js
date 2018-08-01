
var names = ["Noushin", "Sanjida", "Amrin", "Hrithik"];

// for (var i=0; i < names.length; i++) {
// 	console.log("The name is " + names[i]);
// }

names.forEach(function(name){
	$('#names').append('<li>'+ name + '</li>')
});


// names.forEach(newInput)

function newInput(name){ 
	$('#new_name').val();
	$('#new_name').append('<li>'+ $('#new_name').val() + '</li>')};

$('#add_name').click(newInput);

// $('#light_switch').click(function() {
// 	alert("This is an anonymous function");
// })

// // OR

// var alertCode = function() {alert("This is an anonymous function")};
// $('#light_switch').click(alertCode);

// -------------------------------------------------------------------------
// $('#light_switch').click(switchLights);
// $("#box").click(addBox);

// var lights = true;
// var box = true;

// function checkName(name) {
// 	// if the name is present say "found it"
// 	var nameIndex = (names.indexOf(name));
// 	if  (nameIndex === -1) {
// 		console.log("I don't know that name")
// 	} else {
// 		 console.log("Found it")
// 	}
// 	// else say "I don't know that name"
// }

// function switchLights() {
// 	 if (lights) {
// 	 	$('body').addClass('dark');
// 	 	// lights = false;
// 	 } else {
// 	 	$('body').removeClass('dark');
// 	 	// lights = true;
// 	 }
// 	 lights = !lights 
// }

// function addBox() {
// 	if (box) {
// 		$('div').addClass('show')
// 	} else {
// 		$('div').removeClass('show')
// 	}
// 	box = !box
// }

