function stop() {
  // set red bulb to red
  document.getElementById('stopLight').style.background = "red";
  document.getElementById('slowLight').style.background = "#111";
  document.getElementById('goLight').style.background = "#111";
}

function slow() {
  document.getElementById('slowLight').style.background = "yellow";
  document.getElementById('stopLight').style.background = "#111";
  document.getElementById('goLight').style.background = "#111";
}

function go() {
  document.getElementById('slowLight').style.background = "#111";
  document.getElementById('stopLight').style.background = "#111";
  document.getElementById('goLight').style.background = "green";
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

// attach stop redLight
document.getElementById('stopButton').onclick = stop;
document.getElementById('slowButton').onclick = slow;
document.getElementById('goButton').onclick = go;
document.getElementById('header').onclick = next;

// setInterval(next, 1000);

