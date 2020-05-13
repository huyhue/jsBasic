document.addEventListener("DOMContentLoaded",function(){
	// khai báo một số biến cần dùng
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');
	var thoigian = setInterval(function(){ autoSlide(); }, 3000);
	
	 // nut trả về một mảng nút

	 // bắt sự kiện click cho từng nút
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			//Trước tiên tự hủy chuyển động (trong auto slide khi bạn muốn đựng tự chuyển động ở chỗ nào)
			clearInterval(thoigian);   //click trên nút

			// bỏ tất cả màu đen nút đi
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			// hết phần xử lý chuyển màu của nút slide

			// xủ lý phần tính vị trí
			//console.log(this.previousElementSibling);
			var nutkichhoat = this; 
			var vitrinut = 0 ; 
			for (vitrinut = 0;nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {	
				// console.log("bien i = "+vitrinut);
				// console.log('phan tu nut kich hoat la '+nutkichhoat);
			}
			// Hết vòng lặp này thì biến i = số thứ tự
			// console.log("Vị trí của phần tử có class kích hoạt là = " + vitrinut );			 		
			// Bước 1 : Cho tất cả các slide ẩn đi bằng cách remove class active
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				slides[vitrinut].classList.add('active');
			}
		 	
		})
	}   
	// Hết sự kiện cho nút
	
	// var thoigian = setInterval(function(){
	// 	console.log("Tada !");
	// },5000);


	// Viết hàm tự chuyển slide trong một khoảng thời gian xác định
	function autoSlide(){
		// Bước 1 : Xem slide nào đang hiển thị
		var vitrislide = 0; 
		var slideHienTai = document.querySelector('.cacslide ul li.active');
		// console.log(slideHienTai.previousElementSibling);			
		// console.log(slideHienTai);			
		for (vitrislide = 0; slideHienTai = slideHienTai.previousElementSibling; vitrislide++) {}

			// Nếu mà chưa đến slide cuối cùng tức là vitrislide < slides.length - 1 --> Hoạt động bình thường 
			if(vitrislide < (slides.length-1)){
				// Cho ẩn hết đi
				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
					nut[i].classList.remove('kichhoat');
				}
				// Cho phần tử tiếp theo của slide hiển thị ra
				slides[vitrislide].nextElementSibling.classList.add('active');
				nut[vitrislide].nextElementSibling.classList.add('kichhoat'); 
			}
			else {  //Đến phần tử cuối rồi
				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
					nut[i].classList.remove('kichhoat');
				}
				// Cho phần tử đầu tiên của slide hiển thị ra
				slides[0].classList.add('active');
				nut[0].classList.add('kichhoat');
			}

		// console.log("Vị trí của nút hiện tại là: " + vitrislide);	
	}

})
 