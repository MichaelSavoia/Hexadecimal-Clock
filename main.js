var color = " ";

function hexConverter(number){
	number = parseInt(number);
	number = number.toString(16);
	number = number.length == 1 ? '0' + number : number;
	return number;
}

function time(){

	var time = new Date();

	h = time.getHours();
	if (h<10){
		h= "0"+h;
	}
	h=hexConverter(h);
	console.log(h);

	m = time.getMinutes();
	if (m<10){
		m = '0'+m;
	}
	m=hexConverter(m)

	s = time.getSeconds();
	if (s<10){
		s = '0'+s;
	}
	s=hexConverter(s)

	color = '#' + h + m + s;

	// console.log(color)

	console.log()

	document.getElementById('clock').innerHTML = color;
	document.body.style.backgroundColor = color;
}

// console.log(color)

// function backgroundColor(){
// 	console.log(color);
// 	document.body.style.backgroundColor = color;
// }

setInterval(function(){
	time()
},1000)

