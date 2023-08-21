// BÀI 1: Tính tiền lương nhân viên

var tinhLuong = document.getElementById("tinhLuong");
tinhLuong.onclick = function () {
  var luongMotNgay = document.getElementById("luongMotNgay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;
  var tienLuong = document.getElementById("tienLuong");
  var total = luongMotNgay * soNgayLam;
  tienLuong.innerHTML = "Tiền lương của bạn là: " + total + " VND";
};

//BÀI 2: Tính giá trị trung bình

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
  ketQuaTB.innerHTML = "Giá trị trung bình là = " + trungBinh;
};

// BÀI 3: Quy đổi tiền

var tinhTienUSD = document.getElementById("tinhTienUSD");
tinhTienUSD.onclick = function () {
  const tyGiaUSD = 23500;
  var soTienUSD = document.getElementById("soTienUSD").value * 1;
  var soTienVND = tyGiaUSD * soTienUSD;
  var ketQuaVND = document.getElementById("ketQuaVND");
  ketQuaVND.innerHTML = soTienVND + " VND";
};

// BÀI 4: Tính diện tích, chu vi hình chữ nhật

var btnDienTich = document.getElementById("btnDienTich");
btnDienTich.onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;
  var ketQuaDienTich = document.getElementById("ketQuaDienTich");
  ketQuaDienTich.innerHTML = "Diện tích = " + dienTich + " (m2)";
};
btnChuVi = document.getElementById("btnChuVi");
btnChuVi.onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;
  var ketQuaDienTich = document.getElementById("ketQuaChuVi");
  ketQuaDienTich.innerHTML = "Chu vi = " + chuVi + " (m)";
};

// BÀI 5: Tính tổng 2 ký số

var btnTinhKySo = document.getElementById("btnTinhKySo");
btnTinhKySo.onclick = function () {
  var nguyenDuong2 = document.getElementById("nguyenDuong2").value * 1;
  var hangChuc = +nguyenDuong2 / 10;
  hangChuc = Math.floor(hangChuc);
  var hangDonVi = nguyenDuong2 % 10;
  hangDonVi = Math.floor(hangDonVi);
  var tongKySo = +hangChuc + +hangDonVi;
  var ketQuaTongKySo = document.getElementById("ketQuaTongKySo");
  ketQuaTongKySo.innerHTML = "Kết quả tổng ký số = " + tongKySo;
};
