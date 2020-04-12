let call = 0;
let id;

function intervalPrintTime() {
	let date = new Date();
	console.log(date);
	call++;
	if (call > 9) {
		clearInterval(id);
	}
}

id = setInterval(intervalPrintTime, 1000);

