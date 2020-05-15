/* 
PHẦN 1: phân tích và giải bài toán
var nutPhai = document.querySelector('.nuts b.phai'),
 	nutTrai = document.querySelector('.nuts b.trai'),
 	slides = document.querySelectorAll('.slides ul li'),
 	chiSoHienTai = 0 ,
 	soLuongSlide = slides.length,

 	// Xử lý lỗi khi click liên tiếp nhiều lần trong chương trình, bởi vì nó sẽ bị lắc khi kích liên tục
 	//giúp dù ta có click liên tục thì nó vẫn chạy ổn định.
 	trangThai = 'dangDungYen';
 	 		


// 1. Xác định slide hiện tại va slide tiếp theo khi click nút next

// goi su kien click vao nut phai
var chuyenSlideChoNutPhai = function(){
	// Kiểm tra luôn trạng thái, nếu đang chuyển động thì dừng chương trình
	if(trangThai == 'dangChuyenDong') { return false;	} 

	// den dong nay tuc la dang dung yen, xu ly chuyen dong
	// danh dau la dang chuyen dong 
	trangThai = 'dangChuyenDong';
	var trangThaiCua2ChuyenDong = 0;

	var phanTuHienTai = slides[chiSoHienTai];
	// Xác định chỉ số của phần tử tiếp theo dựa vào phần tử hiện tại
	if(chiSoHienTai < soLuongSlide - 1){ // chưa đến cuối
		chiSoHienTai = chiSoHienTai + 1; 
	}else { // là phần tử cuối cùng rồi
		chiSoHienTai = 0; 
	}
	var phanTuTiepTheo = slides[chiSoHienTai];
	// check chuyển động kết thúc
	var xuLyHienTaiKetThucCD = function(){		 
		this.classList.remove('dangxem');
		this.classList.remove('bienMatKhiAnNext');
		trangThaiCua2ChuyenDong++; // = 1 
		if(trangThaiCua2ChuyenDong==2){trangThai = 'dangDungYen';}
	} 
	var xuLyTiepTheoKetThucCD = function(){		
		this.classList.remove('diVaoKhiAnNext');
		this.classList.add('dangxem');
		trangThaiCua2ChuyenDong++;  // = 2
		if(trangThaiCua2ChuyenDong==2){trangThai = 'dangDungYen';}
	}
	//webkitAnimationEnd chuyển động cuối cùng
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);
	// Tạo chuyển động sau khi xác định được 2 phần tử
	phanTuHienTai.classList.add('bienMatKhiAnNext');
	phanTuTiepTheo.classList.add('diVaoKhiAnNext');
};
nutPhai.addEventListener('click',chuyenSlideChoNutPhai);

// Xong nut phải 

var chuyenSlideChoNutTrai = function(){
	if(trangThai == "dangChuyenDong") {return false ; }
	trangThai = "dangChuyenDong";

	 // 1 - xac dinh duoc 2 phan , hien tai va tiep theo 	
	 // phanTuHienTai truoc
	 var phanTuHienTai = slides[chiSoHienTai];
	 var trangThaiCua2ChuyenDong = 0 ; 
	 // phantu tiep theo 
	 if(chiSoHienTai > 0 )	
	 	// chua den cuoi cung
	  { 	chiSoHienTai-- ; 	 }	 
	 else{	 	
	 // Đang ở phần tử đầu tiên , không lùi được nữa, cho chuyển sang phần tử thứ 5 
	 	chiSoHienTai = soLuongSlide - 1 ;	 }
	 var phanTuTiepTheo = slides[chiSoHienTai];
	 //----------
	 var xuLyHienTaiKetThucCD = function(){
	 	this.classList.remove('dangxem');
	 	this.classList.remove('bienMatKhiAnPrev');
	 	trangThaiCua2ChuyenDong++ ; 
	 	if(trangThaiCua2ChuyenDong == 2) { trangThai = "dangDungYen";}

	 }
	 var xuLyTiepTheoKetThucCD= function(){
	 	this.classList.add('dangxem');
	 	this.classList.remove('diVaoKhiAnPrev')	;
	 	trangThaiCua2ChuyenDong++ ; 
	 	if(trangThaiCua2ChuyenDong == 2) { trangThai = "dangDungYen";}	
	 }
	 phanTuHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucCD);
	 phanTuTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucCD);

	 phanTuHienTai.classList.add('bienMatKhiAnPrev');
	 phanTuTiepTheo.classList.add('diVaoKhiAnPrev');

}
nutTrai.addEventListener('click',chuyenSlideChoNutTrai);*/




//PHẦN 2: Chuẩn hóa code, tối giãn lại code so với cách làm trên
/*
var nutPhai = document.querySelector('.nuts b.phai'),
 	nutTrai = document.querySelector('.nuts b.trai'),
 	slides = document.querySelectorAll('.slides ul li'),
 	chiSoHienTai = 0,
 	soLuongSlide = slides.length,
 	trangThai = 'dangDungYen';

function xacDinh2SlideVaChuyendong(nutnao){
	if(trangThai == 'dangChuyenDong') { return false ;	}
	trangThai = 'dangChuyenDong';
	var trangThaiCua2ChuyenDong = 0 ; 
	var phanTuHienTai = slides[chiSoHienTai] ;

	if(nutnao == 'nutTrai'){
		if(chiSoHienTai > 0 ){ 	chiSoHienTai-- ; 	 }	 
	 	else{ 	chiSoHienTai = soLuongSlide - 1 ;	 }		
	}
	else if(nutnao == 'nutPhai'){
		if(chiSoHienTai < soLuongSlide - 1){chiSoHienTai++ ; 
		} else {  chiSoHienTai = 0 ; }		
	}
	var phanTuTiepTheo = slides[chiSoHienTai];
 	var xuLyHienTaiKetThucCD = function(){		 
		this.classList.remove('dangxem');
		if(nutnao == 'nutTrai')
		{
			 this.classList.remove('bienMatKhiAnPrev') ;
		}
		else if(nutnao == 'nutPhai'){
			 this.classList.remove('bienMatKhiAnNext') ;
		}
		
		trangThaiCua2ChuyenDong++ ; 
		if(trangThaiCua2ChuyenDong==2){trangThai = 'dangDungYen' ;}
	} 
	var xuLyTiepTheoKetThucCD = function(){		
		if(nutnao == 'nutTrai')
		{
			this.classList.remove('diVaoKhiAnPrev') ;
		}
		else if(nutnao == 'nutPhai'){
			this.classList.remove('diVaoKhiAnNext') ;
		}
		
		this.classList.add('dangxem') ;
		trangThaiCua2ChuyenDong++;  
		if(trangThaiCua2ChuyenDong==2){trangThai = 'dangDungYen' ;}
	}
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD) ;
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD) ;

	if(nutnao == 'nutTrai')
	{
	 	phanTuHienTai.classList.add('bienMatKhiAnPrev');
		phanTuTiepTheo.classList.add('diVaoKhiAnPrev');
	}
	else if(nutnao == 'nutPhai'){
		phanTuHienTai.classList.add('bienMatKhiAnNext');
		 phanTuTiepTheo.classList.add('diVaoKhiAnNext');
	}
}
var chuyenSlideChoNutPhai = function(){
	xacDinh2SlideVaChuyendong('nutPhai');	 
};
var chuyenSlideChoNutTrai = function(){
	xacDinh2SlideVaChuyendong('nutTrai'); 
}
nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
nutTrai.addEventListener('click',chuyenSlideChoNutTrai);
*/








//PHẦN 3: Chuẩn hóa code, tối giãn lại code so với cách làm trên
//dùng rút gọn bằng toán tử 3 ngôi (nhị nguyên)
// (1) ? (2) : (3);
var nutPhai = document.querySelector('.nuts b.phai'),
 	nutTrai = document.querySelector('.nuts b.trai'),
 	slides = document.querySelectorAll('.slides ul li'),
 	chiSoHienTai = 0,
 	soLuongSlide = slides.length,
 	trangThai = 'dangDungYen';
function xacDinh2SlideVaChuyendong(nutnao){
	if(trangThai == 'dangChuyenDong') { return false ;	}
	trangThai = 'dangChuyenDong';
	var trangThaiCua2ChuyenDong = 0; 
	var phanTuHienTai = slides[chiSoHienTai] ;	 

	chiSoHienTai = (nutnao == 'nutTrai') ? ((chiSoHienTai > 0) ?  (chiSoHienTai-1)  : (soLuongSlide - 1)) : ((chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai+1) : 0); 
 
	var phanTuTiepTheo = slides[chiSoHienTai];				
 	var xuLyHienTaiKetThucCD = function(){		 
		this.classList.remove('dangxem');
		this.classList.remove((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext')) ;  
		trangThaiCua2ChuyenDong++; 
		trangThai = (trangThaiCua2ChuyenDong==2) ? 'dangDungYen' : trangThai; 
	} 
	var xuLyTiepTheoKetThucCD = function(){		
		this.classList.remove((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext')) ;		
		this.classList.add('dangxem');
		trangThaiCua2ChuyenDong++;  
		trangThai = (trangThaiCua2ChuyenDong==2) ? 'dangDungYen' : trangThai; 
	}
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD) ;
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD) ;
	phanTuHienTai.classList.add((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext'));
	phanTuTiepTheo.classList.add((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext'));	 
}
var chuyenSlideChoNutPhai = function(){	xacDinh2SlideVaChuyendong('nutPhai');}
var chuyenSlideChoNutTrai = function(){	xacDinh2SlideVaChuyendong('nutTrai');}
nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
nutTrai.addEventListener('click',chuyenSlideChoNutTrai);