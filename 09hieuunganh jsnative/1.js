//khai báo các biến cần thiết
 var anhs = document.querySelectorAll('.cacAnh img'),
	nenDen = document.querySelector('.nenden'),
	dongLai = document.querySelector('.dongLai'),
	thongtinanh = document.querySelector('.thongtinanh'),
	khoiCacAnhLis = document.querySelectorAll('.khoiCacAnh ul li'),
	nphai = document.querySelector('.nphai'),
	ntrai = document.querySelector('.ntrai'),
	thuTuCuaActive = 0;

 	 		
// Khi click vao nút đóng
// dongLai.addEventListener('click',function(){
// 	nenDen.classList.remove('ra');		
// 	thongtinanh.classList.remove('ra');		
// })


// Khi click vào nền đen cũng như click vào nút đóng nên bỏ nút đóng đi
nenDen.addEventListener('click',function(){
	nenDen.classList.remove('ra');
	thongtinanh.classList.remove('ra');		
	var anhActive = document.querySelector('.khoiCacAnh ul li.active');
	anhActive.classList.remove('active');
})
  

//Click vào ảnh thì ảnh đó hiển thị ra
for (var i = 0; i < anhs.length; i++) {
	anhs[i].addEventListener('click',function(){
		nenDen.classList.add('ra');		
		thongtinanh.classList.add('ra');
		var anhDuocClick = this; 
		for (var chiSo = 0;anhDuocClick = anhDuocClick.previousElementSibling; chiSo++){}	
		// In ra phần tử được active  
		thuTuCuaActive = chiSo;
	 	khoiCacAnhLis[chiSo].classList.add('active');
	})
}		

var hienTai2 = thuTuCuaActive;  //Khai báo biến toàn cục để không bị lỗi

nphai.addEventListener('click',function(){
	// console.log("Số lượng các ảnh là: "+ khoiCacAnhLis.length);
	//Xác định phần tử tiếp theo
	var soLuongAnh = khoiCacAnhLis.length;
	var phanTuHienTai = khoiCacAnhLis[hienTai2];

	hienTai2 = (hienTai2 < (soLuongAnh-1)) ? (hienTai2+1) : 0;
	var phanTuTiepTheo = khoiCacAnhLis[hienTai2];

	phanTuHienTai.classList.remove('active');
	phanTuTiepTheo.classList.add('active');
})

ntrai.addEventListener('click',function(){
	var soLuongAnh = khoiCacAnhLis.length;
	var phanTuHienTai = khoiCacAnhLis[hienTai2];

	hienTai2 = (hienTai2 > 0) ? (hienTai2-1) : (soLuongAnh-1);
	var phanTuTiepTheo = khoiCacAnhLis[hienTai2];

	phanTuHienTai.classList.remove('active');
	phanTuTiepTheo.classList.add('active');
})