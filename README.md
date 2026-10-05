# Tugas Tutorial 1 Pemrograman Berbasis Web

## Identitas Mahasiswa

Nama Mahasiswa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Raka Wiliana  
Program Studi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Sistem Informasi  
NIM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 053082686  
UPBJJ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Jakarta

## Informasi Tugas

**TUGAS TUTORIAL 1**  
**Pemrograman Berbasis Web - STSI4209.198**

## Deskripsi Aplikasi

Aplikasi ini merupakan website sederhana SITTA (Sistem Informasi Tracking dan Distribusi Bahan Ajar). Website dibuat menggunakan HTML5, CSS, dan JavaScript tanpa framework.

Fitur yang tersedia:

- Halaman login pengguna.
- Dashboard informasi bahan ajar dan pengiriman.
- Tracking pengiriman berdasarkan nomor Delivery Order.
- Informasi dan pencarian stok bahan ajar.
- Validasi form dan pesan kesalahan.
- Tampilan responsif untuk desktop dan perangkat mobile.

## Struktur Folder

```text
├── index.html
├── dashboard.html
├── tracking.html
├── stok.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   └── script.js
└── assets/
    └── img/
```

## Cara Menjalankan

1. Buka file `index.html` menggunakan browser.
2. Masukkan salah satu akun login dummy di bawah ini.
3. Setelah berhasil login, gunakan menu Dashboard, Tracking Pengiriman, atau Stok Bahan Ajar.

Website ini juga dapat dijalankan melalui GitHub Pages.

## Data Login Dummy

| Email / ID Login | Password | Role |
|---|---|---|
| `rina@ut.ac.id` | `rina123` | UPBJJ-UT |
| `agus@ut.ac.id` | `agus123` | UPBJJ-UT |
| `siti@ut.ac.id` | `siti123` | Puslaba |
| `doni@ut.ac.id` | `doni123` | Fakultas |
| `admin@ut.ac.id` | `admin123` | Administrator |

### Akun Percobaan Utama

```text
Email    : rina@ut.ac.id
Password : rina123
```

## Nomor yang Dapat Digunakan untuk Tracking

Gunakan salah satu nomor Delivery Order berikut pada halaman **Tracking Pengiriman**:

```text
2023001234
2023005678
```

Contoh percobaan:

```text
Nomor DO : 2023005678
Hasil    : Status Dikirim dengan riwayat perjalanan paket
```

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- GitHub Pages

## Catatan

Data login, data bahan ajar, dan data tracking pada aplikasi ini masih berupa data dummy yang disimpan pada file `js/data.js`. Aplikasi ini belum menggunakan database atau sistem autentikasi server.
