(function () {
  "use strict";

  function getUser() {
    return JSON.parse(sessionStorage.getItem("sittaUser") || "null");
  }

  function setupLogin() {
    var form = document.getElementById("loginForm");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var email = document.getElementById("email").value.trim().toLowerCase();
      var password = document.getElementById("password").value;
      var user = dataPengguna.find(function (item) { return item.email.toLowerCase() === email && item.password === password; });
      var message = document.getElementById("loginMessage");
      if (!user) { message.textContent = "Email atau password yang dimasukkan salah."; return; }
      sessionStorage.setItem("sittaUser", JSON.stringify(user));
      window.location.href = "dashboard.html";
    });
    document.getElementById("forgotPassword").addEventListener("click", function (event) { event.preventDefault(); alert("Silakan hubungi administrator untuk mengatur ulang password."); });
    document.getElementById("registerLink").addEventListener("click", function (event) { event.preventDefault(); alert("Pendaftaran akun dilakukan melalui administrator SITTA."); });
  }

  function setupUser() {
    var greeting = document.getElementById("userGreeting");
    if (greeting && getUser()) greeting.textContent = "Halo, " + getUser().nama;
  }

  function setupDashboard() {
    if (!document.getElementById("totalBooks")) return;
    document.getElementById("totalBooks").textContent = dataBahanAjar.length;
    document.getElementById("activeShipments").textContent = Object.keys(dataTracking).length;
    document.getElementById("lowestStock").textContent = Math.min.apply(null, dataBahanAjar.map(function (item) { return item.stok; }));
  }

  function setupTracking() {
    var form = document.getElementById("trackingForm");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var number = document.getElementById("orderNumber").value.trim();
      var result = dataTracking[number];
      var message = document.getElementById("trackingMessage");
      var box = document.getElementById("trackingResult");
      if (!result) { box.classList.remove("visible"); message.textContent = "Nomor delivery order tidak ditemukan."; return; }
      message.textContent = "";
      box.innerHTML = "<div class=\"tracking-header\"><div><h2>DO " + result.nomorDO + "</h2><p>Detail perjalanan paket " + result.nama + "</p></div><span class=\"badge\">" + result.status + "</span></div>" +
        "<div class=\"tracking-details\"><div><span>Ekspedisi</span><strong>" + result.ekspedisi + "</strong></div><div><span>Tanggal Kirim</span><strong>" + result.tanggalKirim + "</strong></div><div><span>Kode Paket</span><strong>" + result.paket + "</strong></div><div><span>Total</span><strong>" + result.total + "</strong></div></div>" +
        "<h2>Riwayat Perjalanan</h2><ul class=\"timeline\">" + result.perjalanan.map(function (item) { return "<li><time>" + item.waktu + "</time><p>" + item.keterangan + "</p></li>"; }).join("") + "</ul>";
      box.classList.add("visible");
    });
  }

  function renderStock(query, type) {
    var results = dataBahanAjar.filter(function (item) { return (type === "all" || item.jenisBarang === type) && (!query || (item.namaBarang + " " + item.kodeBarang).toLowerCase().indexOf(query.toLowerCase()) !== -1); });
    var container = document.getElementById("stockResults");
    container.innerHTML = results.length ? results.map(function (item) { return "<article class=\"panel result-card\"><img class=\"book-cover\" src=\"assets/" + item.cover + "\" alt=\"Sampul " + item.namaBarang + "\"><div class=\"book-info\"><h2>" + item.namaBarang + "</h2><dl class=\"book-meta\"><div><dt>Kode Barang</dt><dd>" + item.kodeBarang + "</dd></div><div><dt>Kode Lokasi</dt><dd>" + item.kodeLokasi + "</dd></div><div><dt>Jenis Barang</dt><dd>" + item.jenisBarang + "</dd></div><div><dt>Edisi</dt><dd>" + item.edisi + "</dd></div><div><dt>Stok Tersedia</dt><dd>" + item.stok + " eksemplar</dd></div></dl></div></article>"; }).join("") : "<div class=\"panel empty-state\">Data bahan ajar tidak ditemukan.</div>";
  }

  function setupStock() {
    var form = document.getElementById("stockForm");
    if (!form) return;
    renderStock("", "all");
    form.addEventListener("submit", function (event) { event.preventDefault(); renderStock(document.getElementById("stockQuery").value.trim(), document.getElementById("stockType").value); });
  }

  setupLogin(); setupUser(); setupDashboard(); setupTracking(); setupStock();
}());