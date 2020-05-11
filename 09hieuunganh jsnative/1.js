 var anhs = document.querySelectorAll('.cacAnh img'),
	nenDen = document.querySelector('.nenden'),
	dongLai = document.querySelector('.dongLai'),
	thongtinanh = document.querySelector('.thongtinanh'),
	khoiCacAnhLis = document.querySelectorAll('.khoiCacAnh ul li'),
	nphai = document.querySelector('.nphai'),
	ntrai = document.querySelector('.ntrai'),
	thuTuCuaActive = 0;

 	 		
// khi click vao nut dong
// dongLai.addEventListener('click',function(){
// 	nenDen.classList.remove('ra');		
// 	thongtinanh.classList.remove('ra');		
// })

// khi click vao nen den cũng như click vào nút đóng nên bỏ nút đóng đi
nenDen.addEventListener('click',function(){
	nenDen.classList.remove('ra');
	thongtinanh.classList.remove('ra');		
	var anhActive = document.querySelector('.khoiCacAnh ul li.active');
	anhActive.classList.remove('active');
})
  
for (var i = 0; i < anhs.length; i++) {
	anhs[i].addEventListener('click',function(){
		nenDen.classList.add('ra');		
		thongtinanh.classList.add('ra');
		var anhDuocClick = this; 
		for (var chiSo = 0;anhDuocClick = anhDuocClick.previousElementSibling; chiSo++){}	
		// in ra ra phan tu dc active  
		thuTuCuaActive = chiSo;
	 	khoiCacAnhLis[chiSo].classList.add('active');
	})
}		

var hienTai2 = thuTuCuaActive;  //khai báo biến toàn cục để không bị lỗi

nphai.addEventListener('click',function(){
	// console.log("so luong Anh la "+ khoiCacAnhLis.length);
	//Xac dinh phan tu tiep theo
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