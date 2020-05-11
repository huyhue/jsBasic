/*document.addEventListener("DOMContentLoaded",function(){
	var trangthai = 'duoi300';
	//bat su kien khi nguoi dung scroll
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);  //vi tri khi scroll
		if (window.pageYOffset > 300) {

			//no chi bao 1 lan thoi
			if (trangthai == 'duoi300') {
				console.log('dang o menu, lam gi lam di');
				trangthai = 'tren300';
			}
			
		}
	})
})
*/


document.addEventListener("DOMContentLoaded",function(){
	//bat xu kien cuon chuot
	var trangthai = 'duoi300';  //cho no chay dung 1 lan, do ton bo nho
	//la ve menu
	var doituongmenu = document.querySelector('.menu');

	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if (window.pageYOffset > 300) {
			if (trangthai == 'duoi300') {
				console.log('ok roi');  //su dung cl de test
				trangthai = 'tren300';

				doituongmenu.classList.add('nholai');
			}
		}
		//cuon len lai thay doi nhu cu
		else if (window.pageYOffset <= 300) {
			if (trangthai == 'tren300') {
				doituongmenu.classList.remove('nholai');
				trangthai = 'duoi300';
			}
		}
	})
})