// NFTList.js
import React from 'react';
import NFTCard from './ProfileInventory';

// Sample data for the NFT cards (replace this with your actual data source)
const ProfileData = [
  {
    name: 'Explorer5523',
    image: 'assets/images/Image13.jpeg',
    price: '0.0050 WETH',
    sellerFee: '0.5%',
    floorDifference: '2% Below',
    status: 'Selling',
  },
  {
    name: 'Explorer667',
    image: 'assets/images/Image3.jpeg',
    price: '0.0050 WETH',
    sellerFee: '0.5%',
    floorDifference: '2% Below',
    status: 'Active',
  },
  {
    name: 'Explorer245',
    image: 'assets/images/Image12.jpeg',
    price: '0.0050 WETH',
    sellerFee: '0.5%',
    floorDifference: '2% Below',
    status: 'Active',
  },
  {
    name: 'Explorer266',
    image: 'assets/images/Image7.jpeg',
    price: '0.0050 WETH',
    sellerFee: '0.5%',
    floorDifference: '2% Below',
    status: 'Active',
  },
  {
    name: 'Explorer789',
    image: 'assets/images/Image2.jpeg',
    price: '0.0050 WETH',
    sellerFee: '0.5%',
    floorDifference: '2% Below',
    status: 'Active',
  },
  {
    name: 'Explorer357',
    image: 'assets/images/Image4.jpeg',
    price: '0.0050 WETH',
    sellerFee: '0.5%',
    floorDifference: '2% Below',
    status: 'Active',
  },
  {
    name: 'Explorer064',
    image: 'assets/images/Image6.jpeg',
    price: '0.0050 WETH',
    sellerFee: '0.5%',
    floorDifference: '2% Below',
    status: 'Active',
  },
];

function ProfileInventoryList() {
  return (
    <div>
      {ProfileData.map((item, index) => (
        <NFTCard key={index} 
         image = {item.image}
         name = {item.name}
         price = {item.price}
         sellerFee = {item.sellerFee}
         floorDifference = {item.floorDifference}
         status = {item.status}/>
      ))}
    </div>
  );
}

export default ProfileInventoryList;
