# Prisma Asyncra

## Deskripsi
Prisma Asyncra adalah sebuah aplikasi berbasis Node.js yang menggunakan **Express.js** dan **Prisma** sebagai ORM untuk mengelola database MySQL. Aplikasi ini dirancang untuk mendemonstrasikan implementasi API sederhana dengan operasi CRUD (Create, Read, Update, Delete).

---

## Teknologi yang Digunakan
- **Node.js**
- **Express.js**
- **Prisma ORM**
- **MySQL**
- **dotenv** (untuk manajemen environment variables)
- **Nodemon** (untuk development hot-reloading)

---

## Fitur Utama
### 1. API Endpoint
#### a. **GET /users**
Mengembalikan daftar semua pengguna.

- **Response (200 OK)**:
```json
[
  {
    "id": "cm66yk5900002ne3s8rx0tgf7",
    "username": "pieresavio",
    "email": "pieresavio@gmail.com",
    "password": "autentikasiksk2024",
    "name": "Piere Savio",
    "role": "super_admin",
    "createdAt": "2025-01-21T20:59:08.052Z",
    "updatedAt": "2025-01-21T20:59:08.052Z"
  }
]
```

#### b. **POST /users**
Menambahkan pengguna baru.

- **Request Body** (JSON):
```json
{
  "username": "andredev",
  "email": "andre@gmail.com",
  "password": "securepassword123",
  "name": "Andre",
  "role": "admin"
}
```

- **Response (201 Created)**:
```json
{
  "id": "cm66yk5900002ne3s8rx0tgf7",
  "username": "andredev",
  "email": "andre@gmail.com",
  "password": "securepassword123",
  "name": "Andre",
  "role": "admin",
  "createdAt": "2025-01-21T20:59:08.052Z",
  "updatedAt": "2025-01-21T20:59:08.052Z"
}
```

---

## Instalasi dan Penggunaan

### 1. Clone Repository
```bash
git clone https://github.com/PierreSavio/Prisma-JS1.git
cd Prisma-JS1
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Konfigurasi Environment
Buat file `.env` dan tambahkan konfigurasi berikut:
```env
PORT=5000
DATABASE_URL=mysql://root:root@localhost:3306/asyncra_dbv
```

### 4. Jalankan Migrasi Database
Jalankan perintah berikut untuk menyinkronkan schema dengan database:
```bash
npx prisma migrate dev --name init
```

### 5. Jalankan Server
Gunakan perintah berikut untuk memulai server:
```bash
npm run dev
```
Server akan berjalan di [http://localhost:5000](http://localhost:5000).

---

## Struktur Proyek
```
Prisma-Asyncra/
├── prisma/
│   ├── schema.prisma  # Definisi model Prisma
├── .env               # Konfigurasi environment
├── index.js           # File utama aplikasi
├── package.json       # File konfigurasi Node.js
└── index.html         # File HTML statis untuk demo
```

---

## Catatan Tambahan
- Pastikan database MySQL telah berjalan sebelum memulai server.
- Gunakan tool seperti **Postman** atau **Insomnia** untuk mengetes endpoint API.
- Semua password harus di-hash di aplikasi produksi untuk keamanan lebih.

---

## Lisensi
Aplikasi ini dibuat untuk demonstrasi dan bersifat open-source.
