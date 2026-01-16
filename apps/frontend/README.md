# Avalanche Fullstack Bootcamp 🔺

Repository ini berisi dokumentasi dan progres pengerjaan **Avalanche Fullstack Bootcamp**. Project ini berfokus membangun aplikasi terdesentralisasi (dApp) di atas **Avalanche Fuji Testnet**, dimulai dari dasar koneksi wallet hingga integrasi frontend modern.

---

## 📂 Struktur Project

Silakan masuk ke direktori berikut sesuai dengan modul harian:

| Modul     | Deskripsi                | Lokasi Folder       | Tech Stack                    |
| :-------- | :----------------------- | :------------------ | :---------------------------- |
| **Day 1** | 🟢 **Wallet Connection** | `apps/frontend`        | Vanilla JS, HTML, Core Wallet |
| **Day 2** | 🟡 **Smart Contract**    | `apps/contracts` | Solidity, Hardhat             |
| **Day 3** | 🔴 **Frontend dApp**     | `apps/frontend/web` | Next.js 15, Reown, Wagmi      |

---

# 🟢 Day 1: Wallet Connection Basics

> **Lokasi:** `apps/frontend`

Modul ini berisi implementasi dasar menghubungkan **Core Wallet** ke halaman web menggunakan **Vanilla JavaScript** (tanpa framework). Kode ini dimodifikasi untuk menyertakan validasi jaringan dan formatting data.

### ✨ Fitur Implementasi

1. **Network Validation:** Mengecek apakah user berada di **Avalanche Fuji Testnet** (`0xa869`)
2. **Data Formatting:** Menyingkat alamat wallet (`0x123...`) dan konversi Wei ke AVAX
3. **Event Listeners:** Auto-refresh halaman jika user mengganti akun/network

### 🛠️ Snippet Logic (Vanilla JS)

```javascript
// Validasi Jaringan (Fuji Testnet)
const AVALANCHE_FUJI_CHAIN_ID = "0xa869";

if (chainId === AVALANCHE_FUJI_CHAIN_ID) {
  statusEl.style.color = "#4cd137"; // Connected (Green)
  connectBtn.disabled = true;
} else {
  statusEl.textContent = "Please switch to Avalanche Fuji"; // Wrong Network
}
```

### 🚀 Cara Menjalankan (Day 1)

```bash
cd docs/day-1
npx serve .
```

Buka di browser:

* `http://localhost:3000`

---

# 🔴 Day 3: Frontend dApp Integration

> **Lokasi:** `apps/frontend/web`

Implementasi **Frontend dApp modern** menggunakan **Next.js 15**, **Wagmi**, dan **Reown (WalletConnect)**. Aplikasi ini berinteraksi langsung (**Read & Write**) dengan Smart Contract **SimpleStorage**.

### ✨ Fitur Implementasi

Berbeda dengan **Day 1**, modul ini menggunakan *standard industry libraries*:

#### 🔗 Multi-Wallet Connection

* **Reown (WalletConnect):** Support QR Code untuk mobile wallet
* **Injected Wallet:** Support MetaMask, Core, Rabby
* **Filtered UI:** Hanya menampilkan opsi koneksi yang relevan

#### 📡 Smart Contract Interaction

* **Read:** Mengambil data realtime (`getValue`) tanpa gas fee
* **Write:** Mengubah state (`setValue`) dengan handling **BigInt**
* **Feedback:** Notifikasi status **Pending**, **Success**, **Error**

#### 🛡️ Network Guard

* Otomatis mendeteksi network
* Menyediakan tombol **"Switch to Fuji"**

---

### 🛠️ Snippet Logic (Next.js & Wagmi)

#### 1️⃣ Konfigurasi Reown (AppKit)

```ts
// src/app/providers.tsx
const projectId = 'c5cc253404c056ba9b3b203ba1b096ed';

const [config] = useState(() =>
  createConfig({
    chains: [avalancheFuji],
    connectors: [
      walletConnect({ projectId, showQrModal: true }), // Reown
      injected(), // Browser Wallet
    ],
  })
);
```

---

#### 2️⃣ Write Contract (BigInt Handling)

```ts
// src/components/WriteContract.tsx
writeContract({
  address: CONTRACT_ADDRESS,
  abi: ABI,
  functionName: 'setValue',
  args: [BigInt(inputValue)], // BigInt agar aman dari konversi desimal
});
```

---

### 🚀 Cara Menjalankan (Day 3)

```bash
cd apps/frontend/web
npm install
npm run dev
```

Buka di browser:

* `http://localhost:3000`

---

## 📜 Contract Details (Fuji Testnet)

* **Network:** Avalanche Fuji C-Chain
* **Contract Address:** `0xAD8891B74c5Bb669e67B33b8A6Eb714e2f64e9c6`
* **Explorer:** Snowtrace Testnet

---

✨ **Built with Next.js & Avalanche** 🔺
