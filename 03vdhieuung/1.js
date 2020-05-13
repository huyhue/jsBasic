document.addEventListener("DOMContentLoaded",function(){
	// biến sử dụng để .declick
	var nut = document.getElementsByClassName('declick');
	var nd = document.getElementsByClassName('dehienthi');

	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
			// click vào cái đã hiển thị rồi
			// console.log(this.classList); 
			if(this.classList[1] == 'mautrang')	{ 
				console.log(this.classList[1]);
				// bỏ màu trắng của chính nó
				this.classList.remove('mautrang'); 

				// 3 dòng dưới là cho div của đối tượng được click ẩn đi
				var ndhienra = this.getAttribute('data-hienlen');
				var phan_tu_hien_ra = document.getElementById(ndhienra);
				phan_tu_hien_ra.classList.remove('ra');
			}
			else  // click vào các cái còn lại
			{
				// cho tất cả bỏ màu trắng đi
				for (var k = 0; k < nut.length; k++) {
					nut[k].classList.remove('mautrang');  
				}

				// đối tượng được click (this) thành màu trắng
				this.classList.toggle('mautrang');


				//lấy về cái data-hienlien 
				var ndhienra =  this.getAttribute('data-hienlen');
				var phan_tu_hien_ra = document.getElementById(ndhienra);

				// cho tất cả các div  .dehienthi khác ẩn đi
				for (var i = 0; i < nd.length; i++) {
					nd[i].classList.remove('ra');
				}

				// cho div của đối tượng được click hiển thi ra
				phan_tu_hien_ra.classList.toggle('ra');
			}
	 		
		}
	}
},false)
