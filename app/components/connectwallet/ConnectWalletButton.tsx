// components/ConnectWalletButton.tsx
"use client";
import React, { useState } from 'react';
import { ethers } from 'ethers';

const ConnectWalletButton: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

//   const connectWallet = async () => {
//     // if (typeof window.ethereum !== 'undefined') {
//     //   try {
//     //     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     //     await provider.send('eth_requestAccounts', []);
//     //     const signer = provider.getSigner();
//     //     const accountAddress = await signer.getAddress();
//     //     setAccount(accountAddress);
//     //   } catch (error) {
//     //     console.error("Failed to connect wallet:", error);
//     //   }
//     // } else {
//     //   alert('Please install a Web3 wallet like MetaMask to connect.');
//     // }
//   };

  return (
    <button
    //   onClick={connectWallet}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWalletButton;
