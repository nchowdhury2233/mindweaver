var unicorns = [
	{name: "Rainbow", power: "Lightning"},
	{name: "Sprinkles", power: "Invisibility"},
	{name: "Bruno", power: "Empathy"}
];

unicorns.forEach(function(unicorn) {
	//"Rainbow has the power of Lightning"
	$('#unicorns').append(unicornDescriptionListItem(unicorn));
});

function unicornDescriptionListItem(unicorn) {
	return (
	'<li>' + unicorn.name + " has the power of " + unicorn.power + '</li>');	
}

var ninjas = [
	{name: "Leonardo", eyeMask: "Blue"},
	{name: "Donatello", eyeMask: "Purple"},
	{name: "Michaelangelo", eyeMask: "Orange"},
	{name: "Raphael", eyeMask: "Red"}
	];

ninjas.forEach(function(ninja) {
	$('#ninjas').append(ninjaDescriptionListItem(ninja));
});

function ninjaDescriptionListItem(ninja) {
	return (
		'<li>' + ninja.name + " has the power of " + ninja.power + '</li>'
	)
}

var person = {
	name: "Brian",
	favoriteColor: "Blue",
	city: "Brooklyn",
	height: 72
};

// create a car object: make, model, year
var car = {
	make: "Honda",
	model: "Accord",
	year: 1998,
	features: {
		powerWindows: true,
		speakerPackage: false,
		premiumOptions: {
			satRadio: "XM",
			underCoat: false,
			VIN_Etching: true
		}
	},
description: function() {
	console.log("This is a Honda Accord");
	}
}
