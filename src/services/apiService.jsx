export const fetchNFTs = async () => {
    try {
      const response = await fetch('https://api.example.com/nfts');
      return response.json();
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    }
  };
  