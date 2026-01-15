# 🚀 Avalanche Full Stack dApp (Student Project)

Repository ini berisi source code proyek **Full Stack Decentralized Application (dApp)** yang sedang dikembangkan di jaringan **Avalanche**.

Proyek ini merupakan bagian dari **Short Course Pamulang University (Januari 2026)**. Saat ini progres pengerjaan telah mencapai tahap **Smart Contract Deployment**.

---

## 📌 Development Log & Status

Update terakhir: **Day 2 (Smart Contract)**

|   Stage   | Modul                       |     Status     | Output                     |
| :-------: | :-------------------------- | :------------: | :------------------------- |
| **Day 1** | **Blockchain Fundamentals** |    ✅ Selesai   | Setup Environment & Wallet |
| **Day 2** | **Smart Contract**          |    ✅ Selesai   | Deployed to Avalanche Fuji |
| **Day 3** | **Frontend (Next.js)**      | 🚧 On Progress | *Coming Soon*              |
| **Day 4** | **Backend (NestJS)**        |    ⏳ Waiting   | *Coming Soon*              |
| **Day 5** | **Integration & Deploy**    |    ⏳ Waiting   | *Coming Soon*              |

---

## 📍 Smart Contract Info

Backend Blockchain (Smart Contract) telah berhasil dideploy ke jaringan testnet.

* **Network:** Avalanche Fuji Testnet (C-Chain)
* **Contract Address:** `[MASUKKAN_ALAMAT_KONTRAK_BARU_DISINI]`
* **Fitur:** Ownership, Event Logging, Access Control (*OnlyOwner*)

---

## 🧱 Tech Stack

* **Blockchain:** Solidity (v0.8.28), Hardhat
* **Frontend:** Next.js, Tailwind CSS *(Planned)*
* **Backend:** NestJS, PostgreSQL *(Planned)*

---

## 📂 Struktur Repository

```bash
avalanche-fullstack-dapp/
├── apps/
│   ├── contracts/    # ✅ Smart Contract (Ready)
│   ├── frontend/     # 🚧 Frontend (In Development)
│   └── backend/      # ⏳ Backend (Coming Soon)
└── README.md
```

---

## 🚀 Cara Menjalankan (Smart Contract)

Karena saat ini baru tahap **Smart Contract** yang selesai, berikut langkah menjalankannya:

### 1️⃣ Clone Repository

```bash
git clone https://github.com/intannz/avalanche-fullstack-dapp.git
cd avalanche-fullstack-dapp
```

---

### 2️⃣ Masuk ke Folder Contracts

```bash
cd apps/contracts
```

---

### 3️⃣ Install & Setup

```bash
yarn install
# Buat file .env dan isi PRIVATE_KEY & RPC_URL
```

---

### 4️⃣ Compile & Test

```bash
yarn hardhat compile
yarn hardhat test
```

---

✨ **Happy building on Avalanche!** 🔺
