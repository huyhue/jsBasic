document.addEventListener("DOMContentLoaded",function(){
	var khoangcachhienthai = 600; // day khoang thoi gian ma khoi chung toi hien thi

	// khai bao mot so bien can dung 
	var menudo = document.querySelector('.menu');
	var trangthaimenudo = "duoi100";
	var chungtoi = document.querySelector('.chungtoi');
	var vtkhoivang = chungtoi.offsetTop;  //offsetTop: tinh tu vi tri do so voi phần top
	var trangthaikhoivang = "duoi";
	var chancuoi = vtkhoivang + khoangcachhienthai; 

	//hieu ung load bang javascript
	var phantuload = document.querySelector('.s3');
	var trangthais3 = 'duoi';
	var vitris3 = phantuload.offsetTop - 300;


	window.addEventListener('scroll',function(){
		 console.log(window.pageYOffset);
		if(window.pageYOffset > 100){
			if(trangthaimenudo == "duoi100"){
				trangthaimenudo = 'tren100';
				menudo.classList.add('menuden');
			}
		}
		else if(window.pageYOffset < 100){
			if(trangthaimenudo == "tren100"){
				trangthaimenudo = 'duoi100';
				menudo.classList.remove('menuden');
			}
		} 

		// xu ly cho khoi vang 
		if((window.pageYOffset > vtkhoivang) && (window.pageYOffset < chancuoi)){
			if(trangthaikhoivang == 'duoi'){
				trangthaikhoivang = "danghienthi"; 
				chungtoi.classList.add('vangdunglai');
			}
		}else if((window.pageYOffset < vtkhoivang) || (window.pageYOffset > chancuoi)){
			if(trangthaikhoivang == "danghienthi"){
				trangthaikhoivang = 'duoi';
				chungtoi.classList.remove('vangdunglai');
			}
		} 


		//xu ly phan tu load
	if (window.pageYOffset > vitris3) {
		if (trangthais3 == 'duoi') {
			trangthais3 ='tren';
			phantuload.classList.add('dilen');
		}
	}

	
	})

})