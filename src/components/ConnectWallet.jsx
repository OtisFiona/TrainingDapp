import { useState } from 'react';
import { connectWallet } from '../services/web3Service';

export default function ConnectWallet() {
  const [account, setAccount] = useState(null);

  const handleConnectWallet = async () => {
    const walletAccount = await connectWallet();
    setAccount(walletAccount);
  };

  return (
    <div className="flex justify-center mt-4">
      {account ? (
        <span className="text-green-600">Connected: {account}</span>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleConnectWallet}
        >
          Connect wallet
        </button>
      )}
    </div>
  );
}
