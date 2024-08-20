export default function ProfileInventory() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center w-[1440px] box-sizing-border">
      <div className="bg-[#FFFFFF] flex flex-row justify-between p-[20px_80px_20px_80px] w-[1440px] box-sizing-border">
        <div className="m-[12px_0_12px_0] flex flex-row justify-between w-[426.7px] h-[fit-content] box-sizing-border">
          <div className="flex flex-row w-[109.6px] box-sizing-border">
            <img className="m-[0_4px_0_0] w-[20px] h-[24px]" src="assets/logos/iconWeb.jpg"/>
            <img className="m-[4px_0_5px_0] w-[82px] h-[15px]" src="assets/logos/icon_textWeb.jpg"/>
          </div>
          <div className="m-[2px_0_2px_0] flex flex-row justify-between w-[191.1px] h-[fit-content] box-sizing-border">
            <div className="bg-[#E3E3E3] m-[2px_0_2px_0] w-[16px] h-[0px]">
            </div>
            <div className="flex flex-row justify-between w-[168px] h-[fit-content] box-sizing-border">
              <span className="m-[0_10px_0_0] w-[50px] break-words font-['Inter'] font-semibold text-[14px] tracking-[-0.2px] leading-[1.429] text-[#6A6A6A]">
              Explore
              </span>
              <span className="break-words font-['Inter'] font-semibold text-[14px] tracking-[-0.2px] leading-[1.429] text-[#6A6A6A]">
              Create
              </span>
              <span className="break-words font-['Inter'] font-semibold text-[14px] tracking-[-0.2px] leading-[1.429] text-[#6A6A6A]">
              Sell
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-[12px] bg-[#F5F5F5] flex flex-row justify-between p-[12px_12px_12px_16px] w-[426.7px] h-[fit-content] box-sizing-border">
          <div className="m-[2px_10px_2px_0] inline-block w-[374.7px] break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#6A6A6A]">
          Type for collections, NFTs etc
          </div>
          <div className="rounded-[8px] bg-[#E3E3E3] flex p-[6.7px_9.7px_6.7px_9.7px] w-[24px] h-[24px] box-sizing-border">
            <img className="w-[4.7px] h-[10.5px]" src="assets/logos/icon_search.jpg"/>
          </div>
        </div>
        <div className="flex flex-row box-sizing-border">
          <div className="rounded-[12px] bg-[#040404] m-[2px_16px_2px_0] p-[12px_20px_12px_20px] w-[137px] box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#FFFFFF]">
            Connect wallet
            </span>
          </div>
          <div className="rounded-[12px] bg-[#F5F5F5] m-[0_16px_0_0] flex p-[14px_14px_14px_14px] w-[48px] h-[48px] box-sizing-border">
            <img className="w-[20px] h-[20px]" src="assets/logos/icon_Shoping.jpg"/>
          </div>
          <div className="rounded-[16px] bg-[#F5F5F5] flex flex-row p-[4px_4px_4px_16px] w-[89px] box-sizing-border">
            <div className="m-[12px_13px_12px_0] flex w-[40px] h-[40px] box-sizing-border">
              <img className="w-[16px] h-[16px]" src="assets/logos/icon_Sun.jpg"/>
            </div>
            <div className="shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12),0px_8px_20px_0px_rgba(0,0,0,0.02)] rounded-[12px] bg-[#FFFFFF] flex p-[13.3px_13.3px_13.4px_13.4px] w-[40px] h-[40px] box-sizing-border">
              <img className="w-[13.3px] h-[13.3px]" src="assets/logos/icon_Moon.jpg"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[fit-content] box-sizing-border">
        <div className="bg-[#FFFFFF] flex flex-col p-[40px_80px_40px_80px] w-[fit-content] box-sizing-border">
          <div className="m-[0_0_32px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_0_8px_0] inline-block break-words font-['Inter'] font-[var(--heading-medium-semibold-font-weight,600)] text-[32px] tracking-[var(--heading-medium-semibold-letter-spacing,-1px)] leading-[var(--heading-medium-semibold-line-height,1.25)] text-[#252525]">
            Inventory
            </div>
            <span className="self-start break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#6A6A6A]">
            Your assest
            </span>
          </div>
          <div className="border-b-[1px_solid_#E3E3E3] w-[fit-content] box-sizing-border">
            <div className="border-b-[2px_solid_#252525] flex p-[12px_16.3px_10px_16px] box-sizing-border">
              <span className="break-words font-['Inter'] font-[var(--body-14-medium-font-weight,500)] text-[14px] tracking-[var(--body-14-medium-letter-spacing,-0.2px)] leading-[var(--body-14-medium-line-height,1.429)] text-[#252525]">
              Listings
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col p-[16px_80px_80px_80px] w-[1440px] box-sizing-border">
          <div className="m-[0_0_16px_0] flex flex-row justify-between self-start w-[1280px] box-sizing-border">
            <div className="flex box-sizing-border">
              <span className="break-words font-['Inter'] font-normal text-[12px] leading-[1.333] uppercase text-[#A4A4A4]">
              Item
              </span>
            </div>
            <div className="flex box-sizing-border">
              <span className="break-words font-['Inter'] font-normal text-[12px] leading-[1.333] uppercase text-[#A4A4A4]">
              Price
              </span>
            </div>
            <div className="flex box-sizing-border">
              <span className="break-words font-['Inter'] font-normal text-[12px] leading-[1.333] uppercase text-[#A4A4A4]">
              Seller fee
              </span>
            </div>
            <div className="flex box-sizing-border">
              <span className="break-words font-['Inter'] font-normal text-[12px] leading-[1.333] uppercase text-[#A4A4A4]">
              Floor difference
              </span>
            </div>
            <div className="flex box-sizing-border">
              <span className="break-words font-['Inter'] font-normal text-[12px] leading-[1.333] uppercase text-[#A4A4A4]">
              Status
              </span>
            </div>
          </div>
          <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image13.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]">
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Explorer5523
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.0050 WETH
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.5%
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            2% Below
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            Selling
            </div>
          </div>
          <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image3.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]">
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Explorer5523
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.0050 WETH
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.5%
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            2% Below
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            Lock
            </div>
          </div>
          <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image12.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]">
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Explorer667
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.0050 WETH
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.5%
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            2% Below
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            Active
            </div>
          </div>
          <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image7.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]">
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Explorer245
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.0050 WETH
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.5%
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            2% Below
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            Active
            </div>
          </div>
          <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image2.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]">
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Explorer521
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.0050 WETH
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.5%
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            2% Below
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            Active
            </div>
          </div>
          <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image4.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]">
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Explorer522
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.0050 WETH
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.5%
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            2% Below
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            Active
            </div>
          </div>
          <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image6.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]">
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Explorer1222
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.0050 WETH
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.5%
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            2% Below
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            Active
            </div>
          </div>
          <div className="border-b-[0.5px_solid_#E3E3E3] flex flex-row justify-between p-[16px_0_15.5px_0] w-[1280px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image10.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_16px_0_0] w-[48px] h-[48px]">
              </div>
              <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Explorer221
              </div>
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.0050 WETH
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            0.5%
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            2% Below
            </div>
            <div className="m-[12px_0_12px_0] inline-block break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
            Active
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}