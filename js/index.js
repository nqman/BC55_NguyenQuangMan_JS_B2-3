// BÀI 1: Tính tiền lương nhân viên

var tinhLuong = document.getElementById("tinhLuong");
tinhLuong.onclick = function () {
  var luongMotNgay = document.getElementById("luongMotNgay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;
  var tienLuong = document.getElementById("tienLuong");
  var total = luongMotNgay * soNgayLam;
  tienLuong.innerHTML = total + " VND";
};

//BÀI 2: Tính giá trị trung bình
// INPUT:
// 5 số thực được nhập từ người dùng
// PROGRESS:
// Tạo biến cho 5 số thực: n1, n2, n3, n4, n5;
// Tạo biến giá trị trung bình: trungBinh;
// Lấy giá trị 5 số thực từ input;
// Tính trung bình: trungBinh = (n1 + n2 + n3 + n4 + n5) / 5 ;
// In kết quả ra màn hình;
// OUTPUT:
// Giá trị trung bình của 5 số thực;

var tinhTB = document.getElementById("tinhTB");
tinhTB.onclick = function () {
  var n1 = document.getElementById("n1").value * 1;
  var n2 = document.getElementById("n2").value * 1;
  var n3 = document.getElementById("n3").value * 1;
  var n4 = document.getElementById("n4").value * 1;
  var n5 = document.getElementById("n5").value * 1;
  var trungBinh = document.getElementById("trungBinh");
  var ketQuaTB = document.getElementById("ketQuaTB");
  trungBinh = (n1 + n2 + n3 + n4 + n5) / 5;
  ketQuaTB.innerHTML = trungBinh;
};
