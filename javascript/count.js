var count = 0;
// JQuery
$('#increment').click(function (e) {
	e.preventDefault();
	console.log(count);
	count++;
});

// infinity loop
var count = 0;
(function loop() {
	setTimeout(function () {
		console.log(count);
		count++;
		loop()
	}, 1000);
}());	
