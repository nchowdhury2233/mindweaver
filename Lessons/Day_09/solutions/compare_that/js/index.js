function compare() {
  // variable comparison
  var comparison;
  // get value of a
  var a = $('#a').val();
  a = parseFloat(a);
  // get value of b
  var b = $('#b').val();
  b = parseFloat(b);
  // if a > b
  if (a > b) {
    $('#comparison').html('>');
  } else if (a < b) {
    $('#comparison').html('<');
  } else if (a === b) {
    $('#comparison').html('===');
  } else {
    $('#comparison').html('???');
  }
}

$('#submit').click(compare);