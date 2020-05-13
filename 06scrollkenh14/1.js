document.addEventListener("DOMContentLoaded",function(){
	var khoangcachhienthai = 600; // đây là khoảng thời gian mà chúng tôi hiển thị

	// khai báo một số biến cần dùng
	var menudo = document.querySelector('.menu');
	var trangthaimenudo = "duoi100";
	var chungtoi = document.querySelector('.chungtoi');
	var vtkhoivang = chungtoi.offsetTop;  //offsetTop: tính từ vị trí đó so với phần top
	var trangthaikhoivang = "duoi";
	var chancuoi = vtkhoivang + khoangcachhienthai; 

	//hiệu ứng load bằng javascript
	var phantuload = document.querySelector('.s3');
	var trangthais3 = 'duoi';
	var vitris3 = phantuload.offsetTop - 300;


	window.addEventListener('scroll',function(){
		 // console.log(window.pageYOffset);

		 //Xử lý phần menu trên
		if(window.pageYOffset > 100){

			if(trangthaimenudo == "duoi100"){
				trangthaimenudo = 'tren100';
				menudo.classList.add('menuden');
			}

		}else if(window.pageYOffset < 100){

			if(trangthaimenudo == "tren100"){
				trangthaimenudo = 'duoi100';
				menudo.classList.remove('menuden');
			}

		} 

		// xử lý phần khối vàng 
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


		//xử lý phần tử load
		if (window.pageYOffset > vitris3) {
			if (trangthais3 == 'duoi') {
				trangthais3 ='tren';
				phantuload.classList.add('dilen');
			}
		}

	
	})

})