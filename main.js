let px=30;
let py=50;
let kierunek_poziomy="prawo";
let kierunek_pionowy="dol";
let speed = 20
let speedX = 6
let speedY = 2
let trail = [400, 400]
let color = rcg(false);
let colorToggle = document.querySelector('#color');
check();
function rysuj() {
	let c = document.getElementById('c');
	let p = c.getContext('2d');
	let trailToggle = document.querySelector('#trail');
	p.fillStyle = color;

	

	p.clearRect(0, 0, trail[0],trail[1]);
	trailToggle.addEventListener('change', ()=>{
		if(!trailToggle.checked){
			trail[0] = 400
			trail[1] = 400
		}else{
			trail[0] = 0
			trail[1] = 0
		}
	})
	

	
	p.beginPath();
	p.arc(px, py, 30, (Math.PI/180)*0,(Math.PI/180)*360,true);
	p.fill();
	if(px<=30)
	{
		kierunek_poziomy="prawo";
		check();
		p.fillStyle = color;
	}
	else if(px>=370)
	{
		kierunek_poziomy="lewo";
		check();
		p.fillStyle = color;
	}
	
	if(py<=30)
	{
		kierunek_pionowy="dol";
		check();
		p.fillStyle = color;
	}
	else if(py>=370)
	{
		kierunek_pionowy="gora";
		check();
		p.fillStyle = color;
	}
		
	if(px<=370 && kierunek_poziomy=="prawo")
	{
		px+=speedX;
	}
	else if(px>=30 && kierunek_poziomy=="lewo")
	{
		px-=speedX;
	}
	
	if(py<=370 && kierunek_pionowy=="dol")
	{
		py+=speedY;
	}
	else if(py>=30 && kierunek_pionowy=="gora")
	{
		py-=speedY;
	}
}
let intervalId;
function startInterval(_invertal) {
	intervalId = setInterval("rysuj()", _invertal);
}
startInterval(20)



function rcg(statement){
	if(statement){
		var letters = '0123456789ABCDEF';
  		var generatedColor = '#';
  		for (var i = 0; i < 6; i++) {
  		  generatedColor += letters[Math.floor(Math.random() * 16)];
  		}
  		return generatedColor;
	}else{
		return '#f00'
	}
}
colorToggle.addEventListener('change', check())
function check() {     
	if(colorToggle.checked){
		color = rcg(true)
	}else{
		color = rcg(false)
	}
}