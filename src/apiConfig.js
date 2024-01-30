// apiConfig.js
import devCodeBtc from "./assest/bitcoinQr.png"
import dBtc from "./assest/bitcoinQr.png"
import devCodeEthQR from "./assest/ethQR.png"
import dCodeEthQR from "./assest/ethQR.png"

export const apiUrl = import.meta.env.VITE_API_URL;

const versionDev = import.meta.env.VITE_VERSION_DEV === "true";

const devCodeBitcoinWalletAdress = "fhfgvndfjnnnfnfnfjhfjrjr"
const dBitcoinWalletAddress = "bc1qjyx2nvnclavw706h4a5434hr3hq78l3j23mzrg"

const devCodeEthWalletAddress = "fngfjnfnvnrjgjjfjgjrjfgjfjgjfjg"
const dEthWalletAddress = "0x8Bc65Bd3E760a42e9526Ae7577235BECD6536218"
 
const bitcoinWalletAddress = versionDev? devCodeBitcoinWalletAdress:dBitcoinWalletAddress
const bitcoinQR = versionDev?devCodeBtc:dBtc

const ethWalletAddress = versionDev?devCodeEthWalletAddress:dEthWalletAddress
const ethQR = versionDev?devCodeEthQR:dCodeEthQR

export { bitcoinWalletAddress,bitcoinQR,ethWalletAddress,ethQR}