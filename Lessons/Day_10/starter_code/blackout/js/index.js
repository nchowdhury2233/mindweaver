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