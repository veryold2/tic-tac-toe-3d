

let Y = 0;
let X = 0;

document.onkeydown = e => {	

	if(e.keyCode === 37) Y -= 4;
	else if (e.keyCode === 38) X += 4;
	else if (e.keyCode === 39) Y += 4;
	else if (e.keyCode === 40) X -= 4;
  
  document.querySelector('.cube').style.transform = 'rotateY(' + Y + 'deg)' + 
  'rotateX(' + X + 'deg)'
}

let c1 = document.querySelectorAll('.c1 .cell');
let c2 = document.querySelectorAll('.c2 .cell');
let c3 = document.querySelectorAll('.c3 .cell');
let c4 = document.querySelectorAll('.c4 .cell');
let c5 = document.querySelectorAll('.c5 .cell');
let c6 = document.querySelectorAll('.c6 .cell');
let btn = document.querySelector('.btn');
let x = document.querySelector('.x');
let o = document.querySelector('.o');



function clickCells(cells) {
  let step = 0;
	for (var i = 0; i < cells.length; i++) {
		 cells[i].addEventListener('click', addSimbol);
	}


	function addSimbol(){
	 if (step%2 == 0) {
	 	 this.innerHTML = 'x';
	 	 this.removeEventListener('click',addSimbol);
	 	 
	 } else {
	 	 this.innerHTML = 'o';
	 	 this.removeEventListener('click',addSimbol);
	}

	step++;
	checkCells();

	}


	function disBlock() {
		for (var i = 0; i < cells.length; i++) {
		 cells[i].removeEventListener('click', addSimbol);
		
	  }

	}

	function checkCells() {
	  //x
	  if (cells[0].innerHTML == 'x' && cells[1].innerHTML == 'x' && cells[2].innerHTML == 'x') {
	  	x.innerHTML = Number(x.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[3].innerHTML == 'x' && cells[4].innerHTML == 'x' && cells[5].innerHTML == 'x') {
	  	x.innerHTML = Number(x.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[6].innerHTML == 'x' && cells[7].innerHTML == 'x' && cells[8].innerHTML == 'x') {
	  	x.innerHTML = Number(x.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[0].innerHTML == 'x' && cells[3].innerHTML == 'x' && cells[6].innerHTML == 'x') {
	  	x.innerHTML = Number(x.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[1].innerHTML == 'x' && cells[4].innerHTML == 'x' && cells[7].innerHTML == 'x') {
	  	x.innerHTML = Number(x.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[2].innerHTML == 'x' && cells[5].innerHTML == 'x' && cells[8].innerHTML == 'x') {
	  	x.innerHTML = Number(x.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[0].innerHTML == 'x' && cells[4].innerHTML == 'x' && cells[8].innerHTML == 'x') {
	  	x.innerHTML = Number(x.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[2].innerHTML == 'x' && cells[4].innerHTML == 'x' && cells[6].innerHTML == 'x') {
	  	x.innerHTML = Number(x.innerHTML) + 1;
	  	disBlock();
	  }
	  //o
	  if (cells[0].innerHTML == 'o' && cells[1].innerHTML == 'o' && cells[2].innerHTML == 'o') {
	  	o.innerHTML = Number(o.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[3].innerHTML == 'o' && cells[4].innerHTML == 'o' && cells[5].innerHTML == 'o') {
	  	o.innerHTML = Number(o.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[6].innerHTML == 'o' && cells[7].innerHTML == 'o' && cells[8].innerHTML == 'o') {
	  	o.innerHTML = Number(o.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[0].innerHTML == 'o' && cells[3].innerHTML == 'o' && cells[6].innerHTML == 'o') {
	  	o.innerHTML = Number(o.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[1].innerHTML == 'o' && cells[4].innerHTML == 'o' && cells[7].innerHTML == 'o') {
	  	o.innerHTML = Number(o.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[2].innerHTML == 'o' && cells[5].innerHTML == 'o' && cells[8].innerHTML == 'o') {
	  	o.innerHTML = Number(o.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[0].innerHTML == 'o' && cells[4].innerHTML == 'o' && cells[8].innerHTML == 'o') {
	  	o.innerHTML = Number(o.innerHTML) + 1;
	  	disBlock();
	  }
	  if (cells[2].innerHTML == 'o' && cells[4].innerHTML == 'o' && cells[6].innerHTML == 'o') {
	  	o.innerHTML = Number(o.innerHTML) + 1;
	  	disBlock();
	  }

	}

	btn.addEventListener('click',function(){
	  location.reload()
	});

}

clickCells(c1);
clickCells(c2);
clickCells(c3);
clickCells(c4);
clickCells(c5);
clickCells(c6);