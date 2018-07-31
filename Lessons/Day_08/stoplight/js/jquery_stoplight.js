// $('#stopLight').css('background', 'green');
function stop() {
  // set red bulb to red
  $('#stopLight').css('background', 'red');
  $('#slowLight').css('background', '#111');
  $('#goLight').css('background', '#111');
}

function slow() {
  // set red bulb to red
  $('#stopLight').css('background', '#111');
  $('#slowLight').css('background', 'yellow');
  $('#goLight').css('background', '#111');
}

function go() {
  // set red bulb to red
  $('#stopLight').css('background', '#111');
  $('#slowLight').css('background', '#111');
  $('#goLight').css('background', 'green');
}

function next() {
  if (document.getElementById('stopLight').style.background === "red") {
    go();
  } else if (document.getElementById('slowLight').style.background === "yellow") {
    stop();
  } else {
    slow();
  }
}

// attached click handler to button
$('#stopButton').click(stop);
$('#slowButton').click(slow);
$('#go').click(go);
$('#header').click(next);
