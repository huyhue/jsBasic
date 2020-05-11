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
	//moi lan click la giam di 1
	b++;
	//nhung den so 0 lai quay tro ve 5, ung dung trong chuyen slide 
	console.log("gia tri cua b : " + b%5);
}
// dieu kien
var diem = 4;
if (diem == 4) {
	console.log("duoi trung binh");
}else{
	console.log("tren trung binh");
}

//mang
var hv =["tai","tam","tien"];
var hv2=[];
hv2[1]="ok";
hv2[0]="ok2";
var hv3 = new Array("o1","o2","o3");
console.log(hv); //in het luon
console.log(hv[1]);

//kieu du lieu object, de hinh dung trong thuc te
var dongho = {
	hangsx :"casino",
	mau: "den",
	gia: 50000,
	gioitinh: "nam",
	hienthingay: function(){   //cach hoat dong cua doi tuong
		console.log("hom nay ngay 18-8-2017");
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
console.log("hom nay troi dep ! Toi lam \"chuyen do\" "); //hien thi dau nhay phai them \ truoc no

//vong lap truyen thong
for (var i = 0; i < 5; i++) {
	console.log(i);
}
var sv = ["viet", "nam","que","huong"];
for (var i = 0; i < sv.length; i++) {
	console.log(sv[i]);
}
//chuyen xu ly voi kieu du lieu doi tuong Object
var hs = {
	ten:"huy",
	tuoi:19,
	diemToan:9,
	dienHoa: 8,
	diemLy:7
}
var x;
for(x in hs){
	console.log(hs[x]);
}

//use strict : moi thu nghiem khac hon
"use strict"
var j = 10; //bat buoc phai co var vi co che do use strict
console.log(j);

//ham xu ly text
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

//ham xu ly so
var so1 = 10;
var so2 = 7;
so2=so2.toString();
console.log(so1+so2);
var chu="20";
chu=Number(chu); //bien chu thanh so, hoac dung parseInt
console.log(chu+so1);

//ham
function tinhtong(x1,x2){
	var tong = x1 + x2;
	console.log("Tong cua 2 so la: " + tong);
}
tinhtong(20,8);  //goi ham
function chao(){
	console.log("Konichiwa");
}
chao();
function vd1(){  //ham khong co tham so
	var ten="huy";
	console.log("Di choi khong " + ten);
}
function vd2(ten){ //ham co tham so
	console.log("Toi di hoc khong " + ten);
}
vd2("huong");
function tinhtbc(x,y,z,k,h,l){
	console.log("Trung binh cong cua 6 so la "+(x+y+z+k+h+l)/6);
}
tinhtbc(1,2,3,5,6,8);
function tbc(x,y) {
	var z = (x + y) / 2;
	return z;  //cau lenh return trong ham
}
console.log(tbc(8,10));
if (tbc(5,10) > 5) {
	console.log("Trung binh cong lon hon 5");
}
//annoymous function ==ham khong ten, tiet kien du lieu
var zz = function (x,y){
	return (x+y)/2;
}
console.log(zz(5,10));
//closure function == tao ra bien 
function chaao(){
	var ten ="huy";
	var thongbao =  function(){
		console.log("Cafe khong ha "+ten);
	}
	ten = ten + " - Dep trai";
	return thongbao;
}
var h=chaao(); //h luc nao la mot ham annoymous
h();  //goi ham closure function gom 2 buoc

//constructor
var cacmonan = {
	ten: "thit kho tau",
	nguyenlieu: "thit lon",
	gia: 200
};
function MonAn(t,nl,g) {  //khai bao constructor : tao cai khung
	this.ten = t;
	this.nguyenlieu = nl;
	this.gia = g;
}
var mon1 = new MonAn("Rau xao","rau muon",900);
var mon2 = new MonAn("Dau ran","dau phu",400);
console.log(mon1);
console.log(mon2);

const xx = 5;  //khong thay doi trong toan bo code, thuong viet in hoa
// xx = 10;
console.log(xx);

//xu ly chuoi thay the. su dung dau nhay cho html
var q="huy";
var w="31 tuoi";
console.log("Xin chao "+q+"co phai anh "+w+" hay khong");

var zz= "Beo the em";
var comment ="<div class='cm-2'>" +z+"</div>";
var comment2 = `<div class='cm-2'>
					<i>${q}</i> <br>
					<b>${w}</b>
					<h2 class='tieude'>
						${zz}
					</h2>
				"</div>`;
console.log(comment2);