var nutphai = document.querySelector('.phai'),
	nuttrai = document.querySelector('.trai'),
	noidungslide = document.querySelector('.noidungslide');
 
// Click vào nút phải thì cho nút trái hiện lên và slide dịch sang
nutphai.addEventListener('click',function(){
	// Cho nó biến mất
	this.classList.remove('active');
	// Cho nút trái hiện ra
	nuttrai.classList.add('active');
	// Cho slide trượt sang
	noidungslide.classList.add('truotSang');
})

nuttrai.addEventListener('click',function(){
	// Cho nó biến mất
	this.classList.remove('active');
	// Cho nút phải hiện ra
	nutphai.classList.add('active');
	// Cho slide trượt về 
	noidungslide.classList.add('truotVe');
})