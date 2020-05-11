var nutphai = document.querySelector('.phai'),
	nuttrai = document.querySelector('.trai'),
	noidungslide = document.querySelector('.noidungslide');
 
// click vào nut phai thi cho nut trai hien len
// va slide dich sang 
nutphai.addEventListener('click',function(){
	// cho chinh no bien mat 
	this.classList.remove('active');
	// cho trai hien ra 
	nuttrai.classList.add('active');
	// cho slide truot sang 
	noidungslide.classList.add('truotSang');
})

nuttrai.addEventListener('click',function(){
	// cho chinh no bien mat 
	this.classList.remove('active');
	// cho trai hien ra 
	nutphai.classList.add('active');
	// cho slide truot sang 
	noidungslide.classList.add('truotVe');
})