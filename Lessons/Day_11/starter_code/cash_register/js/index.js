var total = 0;

function enter() {
	// get value of #newEntry
	var newLineItem = $('#newEntry').val();
	// parse into Float
	var parsedItem = parseFloat(newLineItem)
	var paddedNumber = parsedItem.toFixed(2);
	console.log(paddedNumber);
	// add float value to table
	//<tr><td></td><td>43.56</td></tr>
	$('#entries').append('<tr><td></td><td>' + paddedNumber + '</td></tr>');
	// add value to total 
	total += parsedItem; 
	// update the total in the tfoot
	$('#total').html('$' + total.toFixed(2));
	$("#newEntry").val('');
	return false;
}
// ??? attatch listener to form submit 
$('#entry').submit(enter);
