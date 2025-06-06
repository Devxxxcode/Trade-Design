// apiConfig.js
import devCodeBtc from "./assest/devQR/devBTC.jpg"
import dBtc from "./assest/bitcoinQr.png"
import devCodeEthQR from "./assest/devQR/devEth.jpg"
import dCodeEthQR from "./assest/ethQR.png"
import newBtcCode from "./assest/newbtccode.png"
import newEthCode from "./assest/newEthCode.png"

// export const apiUrl = import.meta.env.VITE_API_URL;
export const apiUrl ="https://admin.fiptrades.net"

const versionDev = import.meta.env.VITE_VERSION_DEV === "true";

const devCodeBitcoinWalletAdress = "bc1qzzshwgmd56kqu4uc4yxuurghr2zme940fj5fpj"
const dBitcoinWalletAddress = "bc1qjyx2nvnclavw706h4a5434hr3hq78l3j23mzrg"

const devCodeEthWalletAddress = "0xd8d7B2B0845c92BA03F116Ea885A1A2e1358896f"
const dEthWalletAddress = "0x8Bc65Bd3E760a42e9526Ae7577235BECD6536218"
 
const bitcoinWalletAddress = "bc1qlqglhakfthz8u5jll9hj8y2hvg2wqh6ng62l3g"
const bitcoinQR = newBtcCode

const ethWalletAddress ="0x8Bc65Bd3E760a42e9526Ae7577235BECD6536218"
const ethQR =newEthCode


export { bitcoinWalletAddress,bitcoinQR,ethWalletAddress,ethQR}