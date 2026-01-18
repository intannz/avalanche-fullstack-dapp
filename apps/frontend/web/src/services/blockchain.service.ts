//mengambil URL Backend dari environment variable
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

//validasi biar ga bingung kalau lupa setting .env
if (!BACKEND_URL) {
  console.error("⚠️ NEXT_PUBLIC_BACKEND_URL belum disetting di .env.local");
}

//ambil value terbaru ke backend (GET)
export async function getBlockchainValue() {
  if (!BACKEND_URL) return "Config Error";

  //hapus slash di akhir URL jika ada, biar ga double slash (//)
  const cleanUrl = BACKEND_URL.replace(/\/$/, "");

  try {
    const res = await fetch(`${cleanUrl}/blockchain/value`, {
      method: "GET",
      cache: "no-store", //anti cache
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    //ambil text mentah, ngga json parse
    return res.text(); 
  } catch (error) {
    console.error("Gagal fetch value:", error);
    return "Error";
  }
}

//ambil histori event (POST)
export async function getBlockchainEvents(fromBlock: number, toBlock: number) {
  if (!BACKEND_URL) return [];

  const cleanUrl = BACKEND_URL.replace(/\/$/, "");

  try {
    const res = await fetch(`${cleanUrl}/blockchain/events`, {
      method: "POST", //pakai POST menyesuaikan backend
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromBlock: fromBlock,
        toBlock: toBlock,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error ${res.status}: ${errorText}`);
    }

    return res.json(); //Backend return array events
  } catch (error) {
    console.error("Gagal fetch events:", error);
    return [];
  }
}