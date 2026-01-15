# 🟢 Wallet Connection — Day 1

Modul ini berisi implementasi dasar menghubungkan **Core Wallet** ke halaman web menggunakan **Vanilla JavaScript** (tanpa framework).

Kode ini telah dimodifikasi dari template asli untuk menyertakan validasi jaringan, formatting data, dan error handling yang lebih baik.

---

## ✨ Fitur Implementasi

Selain koneksi standar, script ini mencakup fitur tambahan:

1. **Network Validation:**

   * Mengecek apakah user berada di **Avalanche Fuji Testnet** (`0xa869`)
   * Menampilkan status warna **Hijau** (Connected) atau **Kuning** (Wrong Network)

2. **Data Formatting:**

   * **Shorten Address:** Menyingkat alamat wallet (`0x1234...5678`) agar rapi di UI
   * **Balance Conversion:** Mengubah format saldo dari Wei ke AVAX (4 desimal)

3. **Event Listeners:**

   * Auto-refresh halaman jika user mengganti akun atau jaringan di wallet
   * Indikator status yang dinamis (*Loading, Connected, Error*)

---

## 🛠️ Snippet Logic Utama

### Validasi Jaringan (Fuji Testnet)

Mencegah interaksi jika user berada di mainnet atau chain lain.

```javascript
const AVALANCHE_FUJI_CHAIN_ID = "0xa869";

if (chainId === AVALANCHE_FUJI_CHAIN_ID) {
  // Update UI: Connected (Green)
  statusEl.style.color = "#4cd137";
  connectBtn.disabled = true;
} else {
  // Update UI: Wrong Network (Yellow)
  statusEl.textContent = "Please switch to Avalanche Fuji";
  statusEl.style.color = "#fbc531";
}
```

### Formatting Utility

```javascript
// Menyingkat address
function shortenAddress(addr) {
  return addr.slice(0, 6) + "..." + addr.slice(-4);
}

// Konversi Wei ke AVAX
function formatAvaxBalance(balanceWei) {
  const balance = parseInt(balanceWei, 16);
  return (balance / 1e18).toFixed(4);
}
```

---

## 🚀 Cara Menjalankan

Project **Day 1** ini dijalankan menggunakan local static server.

### 1️⃣ Masuk ke Folder Day 1

```bash
cd docs/day-1
```

---

### 2️⃣ Jalankan Local Server

Gunakan `npx` agar tidak perlu install package global:

```bash
npx serve .
```

---

### 3️⃣ Buka di Browser

Biasanya akan berjalan di:

* `http://localhost:3000` *(atau port lain sesuai output terminal)*

---

✨ **Happy building on Avalanche!** 🔺
