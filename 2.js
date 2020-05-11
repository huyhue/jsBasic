//demo ham tao va dinh phan tu trong javascript
var phantu = document.createElement('h1');   //tao mot hte html moi
phantu.innerHTML="Day la noi dung ben trong";  //gan noi dung ben trong mot the html

var khoito = document.getElementById('caccm');
//gan noi dung vao web
khoito.appendChild(phantu);

//tao mang du lieu (binh thuong la tu cs du lieu thong qua API)
var mangdl=[
	{
		id:1,
		anh: "https://zicxa.com/hinh-anh/wp-content/uploads/2020/02/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-ho%E1%BA%A1t-h%C3%ACnh-ng%E1%BB%99-ngh%C4%A9nh-%C4%91%C3%A1ng-y%C3%AAu-10.jpg",
		ten: "Ho Thi Thao",
		noidungcm: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quis!"
	},
	{
		id:2,
		anh: "https://i.pinimg.com/originals/54/f6/9a/54f69a9345e40e77d3737a9689d2ffee.jpg",
		ten: "Truong Thi Hai",
		noidungcm: " phan 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quis!"
	}
];
for (var i = 0; i < mangdl.length; i++) {
	//1.su dung template string de xay dung mau
	var noidungkhoi=`
		<div class="kcm" id="kcm-${mangdl[i].id}">
					<img src="${mangdl[i].anh}" alt="" class="float-xs-left pr-1">
					<b>${mangdl[i].ten}</b><span>${mangdl[i].noidungcm}</span>
				</div>`;

	//2.tao phan tu html moi
	var phantumoi = document.createElement('div');
	//3.dat noi dung mau da xay dung o buoc 1 vao
	phantumoi.innerHTML = noidungkhoi;
	//4.lay vi tri div can dinh vao append
	var bo=document.getElementById('caccm');
	//5.dinh phan tu moi vao bo
	bo.appendChild(phantumoi);
	console.log(noidungkhoi);
}