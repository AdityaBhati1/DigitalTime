setInterval(function(){
	const d = new Date();
	let year = d.getFullYear();
	let month = ('0' + d.getMonth()).slice(-2);
	let date = ('0' + d.getDate()).slice(-2);
	let day = ('0' + d.getDay()).slice(-2);
	let hour = ('0' + d.getHours() % 12).slice(-2);
	let minute = ('0' +d.getMinutes()).slice(-2);
	let second = ('0' + d.getSeconds()).slice(-2);
	const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	document.getElementById('t').innerHTML = hour+":"+minute+":"+second;
	document.getElementById('da').innerHTML = days[d.getDay()]+ ","+'&nbsp' + date +'&nbsp'+ monthNames[d.getMonth()]+'&nbsp'+year;
	},1000);