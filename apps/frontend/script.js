const connectBtn = document.getElementById("connectBtn");
const statusEl = document.getElementById("status");
const addressEl = document.getElementById("address");
const networkEl = document.getElementById("network");
const balanceEl = document.getElementById("balance");

//chainId Avalanche Fuji Testnet (hex)
const AVALANCHE_FUJI_CHAIN_ID = "0xa869";

//menyingkat address dengan membuat fungsi shortenAddress
function shortenAddress(addr){
  return addr.slice(0, 6) + "..." + addr.slice(-4);
}

function formatAvaxBalance(balanceWei){
  const balance = parseInt(balanceWei, 16);
  console.log({ balance });
  return (balance / 1e18).toFixed(4);
}

async function connectWallet(){
  if (typeof window.ethereum === "undefined") {
    alert("Core Wallet not detected. Please install Core Wallet.");
    return;
  }

  console.log("window.ethereum", window.ethereum);

  try{
    statusEl.textContent = "Connecting...";

    //request wallet accounts
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const address = accounts[0];

    //memanggil fungsi shortenAddress
    addressEl.textContent = shortenAddress(address);

    console.log({ address });

    //mendapatkan chainId yang aktif
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });

    console.log({ chainId });

    if (chainId === AVALANCHE_FUJI_CHAIN_ID){
      networkEl.textContent = "Avalanche Fuji Testnet";
      statusEl.textContent = "Connected ✅";
      statusEl.style.color = "#4cd137";

      //disable button setelah connected
      connectBtn.disabled = true;
      connectBtn.innerText = "Connected ✅";

      //mengambil AVAX balance
      const balanceWei = await window.ethereum.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });

      console.log({ balanceWei });

      balanceEl.textContent = formatAvaxBalance(balanceWei);
    } else {
      networkEl.textContent = "Wrong Network ❌";
      statusEl.textContent = "Please switch to Avalanche Fuji";
      statusEl.style.color = "#fbc531";
      balanceEl.textContent = "-";
    }
  } catch (error){
    console.error(error);
    //mengembalikan button agar user bisa klik lagi
    connectBtn.disabled = false;
    connectBtn.innerText ="Connect Wallet";

    if(error.code === 4001){
      statusEl.textContent = "Connection Rejected by User ❌";
    } else{
      statusEl.textContent = "Connection Failed ❌";
    }
    
    statusEl.style.color = "#E81818";
  }
}

connectBtn.addEventListener("click", connectWallet);

if(window.ethereum){
  //listener untuk mendeteksi jika ganti akun core wallet
  window.ethereum.on('accountsChanged', (accounts) => {
    if(accounts.length > 0){
      const shorten = shortenAddress(accounts[0]);
      addressEl.textContent = shorten;
      console.log("Account changed to: ", accounts[0]);
    } else{
      window.location.reload();
    }
  });
  
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
}