var nut = document.querySelector('.n1'),
	khoi = document.querySelector('.khoi');

khoi.addEventListener('webkitAnimationEnd',function(){
	console.log("Kết thúc chuyển động, làm gì thì làm đi");
	this.classList.add('dixuong');
})

nut.addEventListener('click',function(){
	khoi.classList.add('chuyendong');
})