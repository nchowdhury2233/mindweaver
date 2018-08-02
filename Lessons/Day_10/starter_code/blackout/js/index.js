<<<<<<< HEAD

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

=======
var awesomePeople = ["Brian", "Steve", "Lisa", "Jill"];

// for (var i = 0; i < names.length; i++) {
//   console.log(" The name is " + names[i]);
// }

// add a text input and 'add name button' that appends name to list
// BONUS: have a span that says "there are n names on the list"
// BONUS: add an uppercase button that changes all of the names to uppercase

awesomePeople.forEach(function(unicorn) {
  $('#names').append('<li>' + unicorn + '</li>');
});

// var alertCode = function() {alert('Wait! This also works?')};
// $('#light_switch').click(alert('This is an anonymous function'));
// $('#light_switch').click(function() {
//   alert('This is an anonymous function');
// });
// $('#light_switch').click(alertCode);

// function checkName(name) {
//   var nameIndex = names.indexOf(name);
//   if (nameIndex === -1) {
//     console.log("I don\'t know that name.");
//   } else {
//     console.log(name + "  is in position " + (nameIndex + 1) + ".");
//   }
// }

// function switchLights() {
//   if (lights) {
//     $('body').addClass('dark');
//     // lights = false
//   } else {
//     $('body').removeClass('dark');
//     // lights = true
//   }
//   lights = !lights
// }

// $('#light_switch').click(switchLights);
// var lights = true;
>>>>>>> 2d919e1e21eb5a2e1f9873bc3bcd18d6ff0884b7
