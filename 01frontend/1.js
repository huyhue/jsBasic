var x1 = document.getElementsByTagName('h1');
console.log(x1);

var x2 = document.getElementsByTagName('h2');
console.log(x2[0]);

var p1 = document.getElementsByTagName('p');
console.log(p1[1].innerHTML);
p1[1].innerHTML="Web da bi hack";

var cactieude = document.getElementsByTagName('h4');
console.log(cactieude);
for (var i = 0; i < cactieude.length; i++) {
	if (i == 1) {
	cactieude[i].innerHTML = "<button class='btn btn-dark btn-block'>HUY GIA</button>";
	}
}

var y = document.getElementById('tieude');
var y1 = document.getElementById('xxx');
console.log(y);
console.log(y1);

var z1 = document.getElementsByClassName('ok');
console.log(z1.length);
for (var i = 0; i < z1.length; i++) {
	z1[i].innerHTML ="class name nay tra ve mang nen dung x[i]";
}

var q = document.querySelector('.list-group-item');//lấy cái đầu tiên
console.log(q);
var q1 = document.querySelector('.list-group');
console.log(q1);

var a = document.querySelectorAll('.list-group .s1'); 
console.log(a);  // a la mot mang array()

for (var i = 0; i < a.length; i++) {
	if (i == 1) {
		console.log("day la thu 2");
		console.log(a[i]);
		a[i].innerHTML = "Phan tu duoc chon";
	}
}

var b = document.querySelectorAll('#nd');
console.log(b[0]);

var c = document.querySelectorAll('[data-thongbao]');
console.log(c[0]);

var nn1 = document.querySelectorAll('.n1');
nn1[0].classList.remove('btn-outline-info');  //xu ly voi giao dien
nn1[0].classList.remove('btn');
nn1[0].classList.add('btn');
nn1[0].classList.add('btn-block');
nn1[0].classList.add('btn-warning');

var nn3 = document.querySelectorAll('.n3');
nn3[0].classList.toggle('btn-block');   //toggle giong nhu cong tat 

document.addEventListener("DOMContentLoaded",function () {
	// phần code ở đây
	var o = document.getElementById('n1');
	console.log(o);
	o.onclick = function(){
		console.log('Ban vua click vao ' + o);
		o.classList.add('dixuong');
	}
},false)  //thi click thi function, con khong thi false khong lam chi het