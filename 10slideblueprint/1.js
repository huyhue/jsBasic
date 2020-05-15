
var cacnut = document.querySelectorAll('._5nut ul li'),
	ul = document.querySelector('._5slide ul'); 

for (var i = 0; i < cacnut.length; i++) {
	cacnut[i].addEventListener('click',function(){
		//Xóa tất cả các nút active
		for (var k = 0; k < cacnut.length; k++) {
			cacnut[k].classList.remove('active');
		}
		this.classList.add('active');
		
		//Tính vị trí hiện tại của nó
		var phantuhientai = document.querySelector('.active');

		for (var vitri = 0; phantuhientai = phantuhientai.previousElementSibling; vitri++) {}

		for (var j = 0; j < cacnut.length; j++) {
			ul.classList.remove('so' + j);
		}
		ul.classList.add('so' + vitri);				
	})
}