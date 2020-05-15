// Chỉ định đối tượng
var n1 = document.getElementById('nutso1');

var to = document.querySelector('.to');

n1.addEventListener('click', function(){
	to.classList.toggle('quayX');
})