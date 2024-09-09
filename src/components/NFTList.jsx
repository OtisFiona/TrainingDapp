// components/NFTList.js
import React from 'react';
import NFTCard from './NFTCard';

const nftData = [
  {
    imageUrl: 'assets/images/Image8.jpeg',
    collectionName: 'Winter Madagascar',
    nftName: 'Clown Ape',
    price: '0.002',
  },
  {
    imageUrl: 'assets/images/Image14.jpeg',
    collectionName: 'Winter Madagascar',
    nftName: 'Clown Ape',
    price: '0.002',
  },
  {
    imageUrl: 'assets/images/Image16.jpeg',
    collectionName: 'Winter Madagascar',
    nftName: 'Clown Ape',
    price: '0.002',
  },
  {
    imageUrl: 'assets/images/Image11.jpeg',
    collectionName: 'Winter Madagascar',
    nftName: 'Clown Ape',
    price: '0.002',
  }
];

function NFTList() {
  return (
    <div className="flex flex-row gap-[0_12px] w-[fit-content] box-sizing-border">
      {nftData.map((nft, index) => (
        <NFTCard
          key={index}
          imageUrl={nft.imageUrl}
          collectionName={nft.collectionName}
          nftName={nft.nftName}
          price={nft.price}
        />
      ))}
    </div>
  );
}

export default NFTList;
