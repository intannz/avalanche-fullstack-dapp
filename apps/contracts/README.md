# ⛓️ Avalanche DApp – Smart Contracts (Day 2)

Folder ini merupakan **backend blockchain** untuk proyek **Avalanche Fullstack DApp**. Di dalamnya terdapat **Smart Contract (Solidity)**, **konfigurasi Hardhat**, serta **script deployment** ke jaringan Avalanche.

---

## 🛠️ Tech Stack

* **Hardhat** – Framework untuk development & testing smart contract Ethereum/Avalanche
* **Solidity** – Bahasa pemrograman smart contract
* **TypeScript** – Digunakan untuk scripting dan testing yang lebih aman
* **Yarn** – Package manager

---

## 🚀 Cara Menjalankan

### 1️⃣ Masuk ke Folder

Pastikan terminal berada di folder `contracts`:

```bash
cd apps/contracts
```

---

### 2️⃣ Install Dependencies

Install seluruh library yang dibutuhkan (Hardhat, dotenv, dll):

```bash
yarn install
```

---

### 3️⃣ Konfigurasi Environment (.env)

Buat file `.env` di dalam folder `apps/contracts`, lalu isi dengan konfigurasi berikut:

```env
PRIVATE_KEY=masukkan_private_key_metamask_disini_tanpa_0x
RPC_URL=https://api.avax-test.network/ext/bc/C/rpc
ETHERSCAN_API=opsional_jika_ada
```

⚠️ **PENTING:**

* Jangan pernah commit file `.env` ke GitHub
* File ini sudah otomatis di-ignore melalui `.gitignore`

---

### 4️⃣ Compile Smart Contract

Mengubah kode Solidity menjadi bytecode:

```bash
yarn hardhat compile
```

---

### 5️⃣ Testing

Menjalankan unit test untuk memastikan logika kontrak berjalan dengan benar:

```bash
yarn hardhat test
```

---

### 6️⃣ Deploy ke Avalanche Fuji (Testnet)

Deploy smart contract ke jaringan **Avalanche Fuji C-Chain**:

```bash
yarn hardhat run scripts/deployments.ts --network avalancheFuji
```

---

## 📂 Struktur Folder

```
contracts/        # File .sol (Smart Contract)
scripts/          # Script TypeScript untuk deployment (deployments.ts)
test/             # Unit test smart contract
helpers/          # Helper & environment config (constants.ts)
hardhat.config.ts # Konfigurasi utama Hardhat
```

---

## 📝 Catatan & Troubleshooting

Beberapa error umum yang sering muncul saat development:

### ❌ Error Type Definition (minimatch / process)

Pastikan type Node.js sudah ter-install:

```bash
yarn add -D @types/node @types/minimatch
```

---

### ❌ Error HH606 (Solidity Version Mismatch)

* Cek versi Solidity di `hardhat.config.ts`
* Pastikan sesuai dengan `pragma solidity` di file `.sol`

Contoh:

```solidity
pragma solidity 0.8.28;
```

---

### ❌ VS Code Solidity Extension Conflict

* Gunakan **Solidity by Nomic Foundation**
* Disable extension lain seperti **Wake** atau **Juan Blanco** jika terjadi error (highlight merah)

---

### ❌ Error Insufficient Funds

* Pastikan saldo **AVAX Fuji (C-Chain)** mencukupi
* Ambil AVAX gratis melalui **Avalanche Faucet** sebelum deploy

---

