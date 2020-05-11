document.addEventListener("DOMContentLoaded",function(){
	
	// khai bao cac bien can dung
	var nut = document.querySelector('.nut'),
		menutrai = document.querySelector('.menutrai'),
		den = document.querySelector('.den'),
		trang = document.querySelector('.mautrang'),
		khoito = document.querySelector('.noidungto');

	//khi click vao nut xanh 
	nut.onclick = function(){
		den.classList.add('len');

		// cho ca khoi to dich sang phai 
		//khoito.classList.add('dichphai');
		trang.classList.add('trangquay');
		menutrai.classList.remove('vetrai');

	}	

	//click nguoc lai
	den.onclick = function(){
		den.classList.remove('len');
		khoito.classList.remove('dichphai');
		trang.classList.remove('trangquay');
		menutrai.classList.add('vetrai');
	}

},false)
