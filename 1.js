console.log("Tadaa!");
x = 1;
var y = 20;
var z = "hello";
console.log(y + z);
console.log(x);
console.log(x+y);
console.log(5%3);
b = 5;
function chaythu() {
	// console.log("Tadaa 2");
	//Mỗi lần click là giảm đi 1
	b++;
	//nhưng đến số 0 lại quay trở về 5, ứng dụng trong chuyển slide 
	console.log("Giá trị của b : " + b%5);
}
// Điều kiện
var diem = 4;
if (diem == 4) {
	console.log("Dưới trung bình");
}else{
	console.log("Trên trung bình");
}

//Mảng
var hv = ["tai","tam","tien"];
var hv2 = [];
hv2[1] = "ok";
hv2[0] = "ok2";
var hv3 = new Array("o1","o2","o3");
console.log(hv); //In hết luôn
console.log(hv[1]);

//Kiểu dữ liệu object, dễ hình dung trong thực tế
var dongho = {
	hangsx :"casino",
	mau: "den",
	gia: 50000,
	gioitinh: "nam",
	hienthingay: function(){   //Cách hoạt động của đối tượng
		console.log("Hôm nay ngày 18-8-2017");
	}
}
console.log(dongho.mau);
console.log(dongho.gia);
var hocvien = {
	ten:"viet",
	ho:"Nguyen",
	chieucao: 172,
	cannang:65,
	tuoi:31,
	tendaydu: function(){
		return this.ho + " " + this.ten;
	},
	danhgia: function(){
		if (this.chieucao/this.cannang < 3) {
			return "dep trai";
		}else{
			return "hoi gay";
		}
	}
}
console.log(hocvien.tendaydu());
console.log(hocvien['tuoi']);
console.log(hocvien.danhgia());
console.log("hom nay troi dep ! Toi lam \"chuyen do\" "); //Hiển thị dấu nháy phải thêm  \ trước nó

//Vòng lặp trước nó
for (var i = 0; i < 5; i++) {
	console.log(i);
}
var sv = ["viet", "nam","que","huong"];
for (var i = 0; i < sv.length; i++) {
	console.log(sv[i]);
}
//chuyển xử lý với kiểu dữ liệu đối tượng Object
var hs = {
	ten: "huy",
	tuoi: 19,
	diemToan: 9,
	dienHoa: 8,
	diemLy: 7
}
var x;
for(x in hs){
	console.log(hs[x]);
}

//use strict : mọi thứ nghiêm khắc hơn
"use strict"
var j = 10; //Bắt buộc phải có var vì có chế độ use strict
console.log(j);

//Hàm xử lý text
var t = "dien thoai iphone";
console.log(t.length);
var vitri = t.indexOf("iphone");
if (vitri != -1) {
	console.log("tim thay");
	var moi = t.replace("iphone","bphone");
	console.log(moi);
}else{
	console.log("ko tim thay");
}
var dt="iphone, samsung, nokia";
var mang = dt.split(',');
console.log(mang);
for (var i = 0; i < mang.length; i++) {
	console.log(mang[i]);
}

//Hàm xử lý số
var so1 = 10;
var so2 = 7;
so2 = so2.toString();
console.log(so1+so2);
var chu = "20";
chu = Number(chu); //Biến chữ thành số hoặc dùng parseInt
console.log(chu + so1);

//Hàm
function tinhtong(x1,x2){
	var tong = x1 + x2;
	console.log("Tổng của hai số là: " + tong);
}
tinhtong(20,8);  //gọi hàm
function chao(){
	console.log("Konichiwa");
}
chao();
function vd1(){  //hàm không có tham số
	var ten="huy";
	console.log("Di choi khong " + ten);
}
function vd2(ten){ //hàm có tham số
	console.log("Toi di hoc khong " + ten);
}
vd2("huong");
function tinhtbc(x,y,z,k,h,l){
	console.log("Trung binh cong cua 6 so la "+(x+y+z+k+h+l)/6);
}
tinhtbc(1,2,3,5,6,8);
function tbc(x,y) {
	var z = (x + y) / 2;
	return z;  //câu lệnh return trong hàm
}
console.log(tbc(8,10));
if (tbc(5,10) > 5) {
	console.log("Trung bình cộng lớn hơn 5");
}
//annoymous function == Hàm không tên, tiết kiệm dữ liệu
var zz = function (x,y){
	return (x+y)/2;
}
console.log(zz(5,10));

//closure function == tạo ra biến
function chaao(){
	var ten = "huy";
	var thongbao =  function(){
		console.log("Cafe khong ha " + ten);
	}
	ten = ten + " - Dep trai";
	return thongbao;
}
var h = chaao(); //h lúc nào là hàm annoymous
h();  //gọi hàm closure function gồm 2 bước

//constructor
var cacmonan = {
	ten: "thit kho tau",
	nguyenlieu: "thit lon",
	gia: 200
};
function MonAn(t,nl,g) {  //khai báo constructor : tạo cái khung
	this.ten = t;
	this.nguyenlieu = nl;
	this.gia = g;
}
var mon1 = new MonAn("Rau xao","rau muon",900);
var mon2 = new MonAn("Dau ran","dau phu",400);
console.log(mon1);
console.log(mon2);

const xx = 5;  //Không thay đổi trong toàn bộ code, thường viết in hoa
// xx = 10;
console.log(xx);

//Xử lý chuỗi thay thế. Sử dụng dấu nháy cho html
var q = "huy";
var w = "31 tuoi";
console.log("Xin chao " + q + "co phai anh " + w + " hay khong");

var zz = "Beo the em";
var comment = "<div class='cm-2'>" + z + "</div>";
var comment2 = `<div class='cm-2'>
					<i>${q}</i> <br>
					<b>${w}</b>
					<h2 class='tieude'>
						${zz}
					</h2>
				"</div>`;
console.log(comment2);