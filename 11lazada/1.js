//Khai báo các biến cần dùng
var logo = document.querySelector(".logo"),
	menu = document.querySelector('.menu'),
	nutdanhmuc = document.querySelector('.tatcadanhmuc'),
	menubottom = document.querySelector('.menubottom'),
	nut = document.querySelector('.nut'),
	console.log(nutdanhmuc),
	trangthai = 'binhthuong';
	

nutdanhmuc.addEventListener('click',function(){
	if(trangthai == 'binhthuong'){
		menubottom.classList.add('botdira');
		nut.innerHTML = "Ẩn đi danh mục";
		trangthai = "da thay text";
	}else{
		menubottom.classList.remove('botdira');
		nut.innerHTML = "Tất cả danh mục";
		trangthai = "binhthuong";
	}
})

window.addEventListener('scroll',function(){
	var vitri = window.pageYOffset; 
	if(vitri > 300){
		logo.classList.add('truotlen');	
		menu.classList.add('bienhinh1');	
	}else{
		logo.classList.remove('truotlen');
		menu.classList.remove('bienhinh1');	
	}
})