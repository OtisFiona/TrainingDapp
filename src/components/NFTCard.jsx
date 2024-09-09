// components/NFTCard.js
import React from 'react';

function NFTCard({ imageUrl, collectionName, nftName, price }) {
  return (
    <div className="rounded-[16px] border-[0.5px_solid_#E3E3E3] bg-[#FFFFFF] flex flex-col p-[7.5px_7.5px_11.5px_7.5px] box-sizing-border">
      <div className="m-[0_0_12px_0] flex w-[229px] h-[236px] box-sizing-border">
        <div className="rounded-[12px] bg-cover bg-no-repeat w-[213px] h-[220px]" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </div>
      <div className="m-[0_4px_0_4px] flex flex-col self-start w-[fit-content] box-sizing-border">
        <div className="m-[0_0_8px_1.3px] flex flex-row w-[fit-content] box-sizing-border">
          <div className="m-[1.3px_5.3px_1.3px_0] flex w-[16px] h-[16px] box-sizing-border">
            <img className="w-[13.3px] h-[13.3px]" src="assets/logos/icon_PhotoList.jpg" alt="collection icon"/>
          </div>
          <span className="break-words font-['Inter'] font-[var(--body-12-reguler-font-weight,400)] text-[12px] leading-[var(--body-12-reguler-line-height,1.333)] text-[#6A6A6A]">
            {collectionName}
          </span>
        </div>
        <div className="m-[0_0_8px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-14-medium-font-weight,500)] text-[14px] tracking-[var(--body-14-medium-letter-spacing,-0.2px)] leading-[var(--body-14-medium-line-height,1.429)] text-[#252525]">
          {nftName}
        </div>
        <span className="self-start break-words font-['Inter'] font-[var(--body-12-reguler-font-weight,400)] text-[12px] leading-[var(--body-12-reguler-line-height,1.333)] text-[#252525]">
          {price} ETH
        </span>
      </div>
    </div>
  );
}

export default NFTCard;
