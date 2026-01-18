# 🚀 Avalanche Full Stack dApp (Student Project)

Repository ini berisi source code proyek **Full Stack Decentralized Application (dApp)** yang sedang dikembangkan di jaringan **Avalanche**.

Proyek ini merupakan bagian dari **Short Course Pamulang University (Januari 2026)**. Saat ini progres pengerjaan telah **SELESAI** hingga tahap Deployment (Day 5).

---

## 🌐 Live Demo & Deployment (Day 5 Update)

Berikut adalah link akses untuk aplikasi yang telah di-deploy:

| Komponen | Link Akses | Platform |
| :--- | :--- | :--- |
| **Frontend dApp** | [**Buka Website Aplikasi**](https://avalanche-fullstack-dapp-psi.vercel.app/) | ▲ Vercel |
| **Backend API** | [**Buka Swagger Documentation**](https://avalanche-fullstack-dapp-production-ffdd.up.railway.app/documentation) | 🚂 Railway |
| **Smart Contract** | [**Lihat di Snowtrace (Explorer)**](https://testnet.snowtrace.io/address/0xAD8891B74c5Bb669e67B33b8A6Eb714e2f64e9c6) | ❄️ Snowtrace |

> **⚠️ Catatan untuk Demo:**
> 1.  Jika transaksi tidak muncul otomatis, mohon **Refresh Halaman** setelah transaksi sukses untuk mengambil data terbaru dari backend.
> 2.  Disarankan menggunakan **Core Wallet** untuk stabilitas koneksi jaringan Avalanche Fuji (jika MetaMask mengalami kendala network switching).

---

## 📌 Development Log & Status

Update terakhir: **Day 5 (Final Polish & Deployment)**

|   Stage   | Modul                       |  Status   | Output                               |
| :-------: | :-------------------------- | :-------: | :----------------------------------- |
| **Day 1** | **Blockchain Fundamentals** | ✅ Selesai | Setup Environment & Wallet           |
| **Day 2** | **Smart Contract** | ✅ Selesai | Deployed to Avalanche Fuji           |
| **Day 3** | **Frontend (Next.js)** | ✅ Selesai | Next.js dApp + Reown (WalletConnect) |
| **Day 4** | **Backend (NestJS)** | ✅ Selesai | REST API + Viem (Blockchain Data)    |
| **Day 5** | **Integration & Deploy** | ✅ Selesai | Live Deployment (Vercel & Railway)   |

---

## 📍 Smart Contract Info

Backend Blockchain (Smart Contract) telah berhasil dideploy ke jaringan testnet.

- **Network:** Avalanche Fuji Testnet (C-Chain)  
- **Contract Address:** [`0xAD8891B74c5Bb669e67B33b8A6Eb714e2f64e9c6`](https://testnet.snowtrace.io/address/0xAD8891B74c5Bb669e67B33b8A6Eb714e2f64e9c6)  
- **Fitur:** Ownership, Event Logging, Access Control (*OnlyOwner*)

---

## 🧱 Tech Stack

- **Blockchain:** Solidity (v0.8.28), Hardhat  
- **Frontend:** Next.js 15, Tailwind CSS, Wagmi, Reown (AppKit), Vercel  
- **Backend:** NestJS, Viem (EVM Client), Swagger UI, Railway

---

## 📂 Struktur Repository

```bash
avalanche-fullstack-dapp/
├── apps/
│   ├── contracts/        # ✅ Smart Contract (Ready)
│   ├── frontend/
│   │   └── web/          # ✅ Frontend Next.js (Ready)
│   └── backend/          # ✅ Backend NestJS (Ready)
└── README.md
```

------------------------------------------------------------------------

## 🚀 Cara Menjalankan (Local)

Frontend: 
```bash
cd apps/frontend/web npm install npm run dev
```

Backend: 
```bash
cd apps/backend pnpm install pnpm run start:dev
```

Contract: 
```bash
cd apps/contracts yarn install yarn hardhat test
```
---
✨ Happy building on Avalanche! 🔺
