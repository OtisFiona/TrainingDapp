import { ethers } from 'ethers';

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      return accounts[0];
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  } else {
    alert('Please install MetaMask');
  }
};
