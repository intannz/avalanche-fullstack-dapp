# ⛓️ Avalanche Smart Contract — Day 2

Folder ini berisi **backend blockchain** untuk proyek **Avalanche Fullstack dApp**.
Smart contract dikembangkan menggunakan **Solidity** dengan **Hardhat** sebagai framework utama untuk compile, testing, dan deployment ke jaringan **Avalanche Fuji Testnet**.

---

## 📍 Deployment Info

| Item         | Detail                           |
| ------------ | -------------------------------- |
| **Network**  | Avalanche Fuji Testnet (C-Chain) |
| **Contract** | `SimpleStorage.sol`              |
| **Address**  | `0xPASTE_ALAMAT_KONTRAK_DI_SINI` |

🔎 Cek aktivitas kontrak melalui **Snowtrace** (events & transaksi).

---

## ✨ Fitur Smart Contract

Kontrak **`SimpleStorage.sol`** telah dimodifikasi sesuai tugas **Day 2**:

### ✅ Task 1 — Ownership

* Alamat **owner** disimpan otomatis saat kontrak dideploy
* Menggunakan `constructor`

### ✅ Task 2 — Event Logging

Semua aktivitas penting tercatat di blockchain:

* `OwnerSet(address indexed owner)`
* `ValueUpdated(uint256 oldValue, uint256 newValue)`

### ✅ Task 4 — Access Control (Security)

* Modifier `onlyOwner`
* Fungsi `setValue` **hanya bisa dipanggil oleh owner**
* Akses ilegal akan **revert**

> Intinya: aman, transparan, dan bisa diaudit. Blockchain-approved ✅

---

## 🛠️ Tech Stack

* **Hardhat** — Smart contract development & testing
* **Solidity** — v0.8.28
* **TypeScript** — Script & test yang lebih aman
* **Yarn** — Package manager

---

## 🚀 Cara Menjalankan Project

### 1️⃣ Masuk ke Folder

```bash
cd apps/contracts
```

### 2️⃣ Install Dependencies

```bash
yarn install
```

### 3️⃣ Setup Environment (.env)

Buat file `.env` (**jangan di-commit**) lalu isi:

```env
PRIVATE_KEY=private_key_metamask_tanpa_0x
RPC_URL=https://api.avax-test.network/ext/bc/C/rpc
```

---

### 4️⃣ Compile & Test

Pastikan tidak ada error:

```bash
yarn hardhat compile
yarn hardhat test
```

---

### 5️⃣ Deploy ke Avalanche Fuji

```bash
yarn hardhat run scripts/deployments.ts --network avalancheFuji
```

---

## 🧯 Troubleshooting

### ❌ Type Definition Error

Jika muncul error terkait `process` atau `minimatch`:

```bash
yarn add -D @types/node @types/minimatch
```

💡 **Tips:** Restart *TypeScript Server* di VS Code.

---

### ❌ Insufficient Funds

* Pastikan wallet memiliki saldo **AVAX Fuji**
* Ambil gratis melalui **Avalanche Faucet**

---

### ❌ Error "Not owner"

* Fungsi `setValue` dilindungi `onlyOwner`
* Gunakan wallet yang sama dengan wallet saat deploy

---

## 📝 Update README

1. Buka file:

   ```bash
   apps/contracts/README.md
   ```
2. Ganti isinya dengan file ini
3. Isi alamat kontrak hasil deploy
4. Commit perubahan:

```bash
git add apps/contracts/README.md
git commit -m "docs: finalize Day 2 smart contract README"
git push origin main
```
---

✨ **Happy building on Avalanche!** 🔺