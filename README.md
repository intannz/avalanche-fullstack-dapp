# 🚀 Avalanche Full Stack dApp (Student Project)

Repository ini berisi source code proyek **Full Stack Decentralized Application (dApp)** yang sedang dikembangkan di jaringan **Avalanche**.

Proyek ini merupakan bagian dari **Short Course Pamulang University (Januari 2026)**. Saat ini progres pengerjaan telah mencapai tahap **Frontend Integration**.

---

## 📌 Development Log & Status

Update terakhir: **Day 3 (Frontend Integration)**

|   Stage   | Modul                       |   Status  | Output                               |
| :-------: | :-------------------------- | :-------: | :----------------------------------- |
| **Day 1** | **Blockchain Fundamentals** | ✅ Selesai | Setup Environment & Wallet           |
| **Day 2** | **Smart Contract**          | ✅ Selesai | Deployed to Avalanche Fuji           |
| **Day 3** | **Frontend (Next.js)**      | ✅ Selesai | Next.js dApp + Reown (WalletConnect) |
| **Day 4** | **Backend (NestJS)**        | ⏳ Waiting | *Coming Soon*                        |
| **Day 5** | **Integration & Deploy**    | ⏳ Waiting | *Coming Soon*                        |

---

## 📍 Smart Contract Info

Backend Blockchain (Smart Contract) telah berhasil dideploy ke jaringan testnet.

* **Network:** Avalanche Fuji Testnet (C-Chain)
* **Contract Address:** `0xad8891b74c5bb669e67b33b8a6eb714e2f64e9c6`
* **Fitur:** Ownership, Event Logging, Access Control (*OnlyOwner*)

---

## 🧱 Tech Stack

* **Blockchain:** Solidity (v0.8.28), Hardhat
* **Frontend:** Next.js 15, Tailwind CSS, Wagmi, Reown (AppKit)
* **Backend:** NestJS, PostgreSQL *(Planned)*

---

## 📂 Struktur Repository

```bash
avalanche-fullstack-dapp/
├── apps/
│   ├── contracts/        # ✅ Smart Contract (Ready)
│   ├── frontend/
│   │   └── web/          # ✅ Frontend Next.js (Ready)
│   └── backend/          # ⏳ Backend (Coming Soon)
└── README.md
```

---

## 🚀 Cara Menjalankan

### A. Menjalankan Frontend (Web dApp)

Ini adalah update terbaru (**Day 3**). Pastikan **Node.js** sudah ter-install.

Masuk ke folder web:

```bash
cd apps/frontend/web
```

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka browser di:

* `http://localhost:3000`

---

### B. Menjalankan Smart Contract

Jika ingin melakukan testing atau deploy ulang smart contract.

Masuk ke folder contracts:

```bash
cd apps/contracts
```

Install dependencies:

```bash
yarn install
# Pastikan file .env sudah terisi PRIVATE_KEY & RPC_URL
```

Compile & Test:

```bash
yarn hardhat compile
yarn hardhat test
```

---

✨ **Happy building on Avalanche!** 🔺
