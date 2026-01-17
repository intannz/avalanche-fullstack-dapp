# 🚀 Avalanche Full Stack dApp (Student Project)

Repository ini berisi source code proyek **Full Stack Decentralized Application (dApp)** yang sedang dikembangkan di jaringan **Avalanche**.

Proyek ini merupakan bagian dari **Short Course Pamulang University (Januari 2026)**. Saat ini progres pengerjaan telah mencapai tahap **Backend Development**.

---

## 📌 Development Log & Status

Update terakhir: **Day 4 (Backend Integration)**

|   Stage   | Modul                       |  Status   | Output                               |
| :-------: | :-------------------------- | :-------: | :----------------------------------- |
| **Day 1** | **Blockchain Fundamentals** | ✅ Selesai | Setup Environment & Wallet           |
| **Day 2** | **Smart Contract**          | ✅ Selesai | Deployed to Avalanche Fuji           |
| **Day 3** | **Frontend (Next.js)**      | ✅ Selesai | Next.js dApp + Reown (WalletConnect) |
| **Day 4** | **Backend (NestJS)**        | ✅ Selesai | REST API + Viem (Blockchain Data)    |
| **Day 5** | **Integration & Deploy**    | ⏳ Waiting | *Coming Soon* |

---

## 📍 Smart Contract Info

Backend Blockchain (Smart Contract) telah berhasil dideploy ke jaringan testnet.

- **Network:** Avalanche Fuji Testnet (C-Chain)  
- **Contract Address:** `0xad8891b74c5bb669e67b33b8a6eb714e2f64e9c6`  
- **Fitur:** Ownership, Event Logging, Access Control (*OnlyOwner*)

---

## 🧱 Tech Stack

- **Blockchain:** Solidity (v0.8.28), Hardhat  
- **Frontend:** Next.js 15, Tailwind CSS, Wagmi, Reown (AppKit)  
- **Backend:** NestJS, Viem (EVM Client), Swagger UI

---

## 📂 Struktur Repository

```bash
avalanche-fullstack-dapp/
├── apps/
│   ├── contracts/        # ✅ Smart Contract (Ready)
│   ├── frontend/
│   │   └── web/          # ✅ Frontend Next.js (Ready)
│   └── backend/          # ✅ Backend NestJS (Ready - Day 4)
└── README.md
```

---

## 🚀 Cara Menjalankan

### A. Menjalankan Frontend (Web dApp)

```bash
cd apps/frontend/web
npm install
npm run dev
```

Buka: http://localhost:3000

---

### B. Menjalankan Backend (API Service)

```bash
cd apps/backend
pnpm install
pnpm run start:dev
```

Akses Swagger: http://localhost:3000/documentation

---

### C. Menjalankan Smart Contract

```bash
cd apps/contracts
yarn install
yarn hardhat test
```

---

✨ Happy building on Avalanche! 🔺
