/*document.addEventListener("DOMContentLoaded",function(){
	var trangthai = 'duoi300';
	//bắt sự kiện khi người dùng scroll
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);  //vị trí khi scroll
		if (window.pageYOffset > 300) {

			//nó chỉ báo 1 lần thôi
			if (trangthai == 'duoi300') {
				console.log('dang o menu, lam gi lam di');
				trangthai = 'tren300';
			}
			
		}
	})
})
*/


document.addEventListener("DOMContentLoaded",function(){
	//bắt sự kiện cuộn chuột
	var trangthai = 'duoi300';  //cho nó chạy dừng 1 lần, đỡ tốn bộ nhớ
	//lấy về menu
	var doituongmenu = document.querySelector('.menu');

	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if (window.pageYOffset > 300) {
			if (trangthai == 'duoi300') {
				console.log('ok roi');  //sử dụng cl để test
				trangthai = 'tren300';

				doituongmenu.classList.add('nholai');
			}
		}
		//cuộn lên lại trở về như cũ
		else if (window.pageYOffset <= 300) {
			if (trangthai == 'tren300') {
				doituongmenu.classList.remove('nholai');
				trangthai = 'duoi300';
			}
		}

	})
})