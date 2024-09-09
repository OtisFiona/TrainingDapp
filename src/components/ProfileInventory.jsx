// NFTCard.js
import React from 'react';

function ProfileInventory({ image, name, price, sellerFee, floorDifference, status }) {
  return (
    <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px]">
                <img src={image} className="bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]"></img>
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              {name}
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            {price}
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            {sellerFee}
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            {floorDifference}
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            {status}
            </div>
          </div>
  );
}

export default ProfileInventory;
