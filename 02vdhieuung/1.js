//viet hieu ung facebook
document.addEventListener("DOMContentLoaded",function() {
	//khai bao bien can su dung trong app nay
	var tamgiac = document.getElementsByClassName('tamgiac');
	console.log(tamgiac);
	var tamgiac = tamgiac[0];
	var danhsach = document.getElementsByClassName('danhsach');
	var danhsach = danhsach[0];

	//su dung ham onclick va toggle class cho tam giac doi mau
	tamgiac.onclick = function(){
		// this.style.color ='white';  //cach1
		this.classList.toggle('tamgiactrang');
		danhsach.classList.toggle('ra');
	}
},false)



//truy xuat cai nut

//truoc khi truy xuat phai document ready
document.addEventListener("DOMContentLoaded",function() {
	// dung code
	var nut = document.getElementById('nut1');
	var khoi = document.getElementsByClassName('card');
	console.log(khoi[0]);
	// //goi su kien click
	nut.onclick = function(){
		khoi[0].classList.toggle('diphai');
	}
},false)


//hieu ung 2 chieu voi animation
document.addEventListener("DOMContentLoaded",function() {
	// dung code
	var nut = document.getElementById('nut2');
	var khoi = document.getElementById('kcm');
	var trangthai ="lan1";

	nut.onclick = function(){
		if (trangthai == "lan1") {
			console.log("click lan 1");
			trangthai = "lan2";
			khoi.classList.remove('ko-cdong');
			khoi.classList.add('chieuso1');

			//xu ly code cho viec hieu ung lan 1
		}
		else if (trangthai == "lan2") {
			console.log("click lan 2");
			trangthai = "lan1";
			khoi.classList.remove('chieuso1');
		}
	}
},false)


//Tong quat hoa: truyen vao gia tri, ap dung cho tat ca, viet 1 lan truyen cho nhieu cho
document.addEventListener("DOMContentLoaded",function() {
	var nut = document.getElementsByClassName('nuttongquat');
	// console.log(nut);
	
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
		console.log(this.getAttribute('data-matkhau'));
		}
	}
},false)