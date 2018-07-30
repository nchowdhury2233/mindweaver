// $('#stopLight').css('background', 'green');
function stop() {
  // set red bulb to red
  $('#stopLight').css('background', 'red');
  $('#slowLight').css('background', '#111');
  $('#goLight').css('background', '#111');
}
// attached click handler to button
$('#stopButton').click(stop);
