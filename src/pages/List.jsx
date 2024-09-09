import NFTList from "../components/NFTList";

export default function List() {
  return (
    <div className="flex flex-col items-center w-[1440px] box-sizing-border">
      {/* menu */}
      <div className="bg-white flex flex-row justify-between p-[20px_80px_20px_80px] w-[1440px] box-sizing-border">
        {/* Horizontal Content */}
        <div className="m-[12px_0_12px_0] flex flex-row justify-between w-[426.7px] h-[fit-content] box-sizing-border">
          <div className="flex flex-row w-[109.6px] box-sizing-border">
            <img className="m-[0_4px_0_0] w-[20px] h-[24px]"  src="assets/logos/iconWeb.jpg"/>
            <img className="m-[4px_0_5px_0] w-[82px] h-[15px]" src="assets/logos/icon_textWeb.jpg" />
          </div>
          <div className="m-[2px_0_2px_0] flex flex-row justify-between w-[142.5px] h-[fit-content] box-sizing-border">
            <div className="bg-[#E3E3E3] m-[2px_0_2px_0] w-[16px] h-[0px]">
            </div>
            <div className="flex flex-row justify-between w-[119px] box-sizing-border">
              <span className="m-[0_10px_0_0] w-[50px] break-words font-['Inter'] font-semibold text-[14px] tracking-[-0.2px] leading-[1.429] text-[#6A6A6A]">
              Explore
              </span>
              <span className="break-words font-['Inter'] font-semibold text-[14px] tracking-[-0.2px] leading-[1.429] text-[#6A6A6A]">
              Create
              </span>
            </div>
          </div>
        </div>
        {/* search */}
        <div className="rounded-[12px] bg-[#F5F5F5] flex flex-row justify-between p-[12px_12px_12px_16px] w-[426.7px] h-[fit-content] box-sizing-border">
          <div className="m-[2px_10px_2px_0] inline-block w-[374.7px] break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#6A6A6A]">
          Type for collections, NFTs etc
          </div>
          <div className="rounded-[8px] bg-[#E3E3E3] flex p-[6.7px_9.7px_6.7px_9.7px] w-[24px] h-[24px] box-sizing-border">
            <img className="w-[4.7px] h-[10.5px]" src="assets/logos/icon_search.jpg"/>
          </div>
        </div>
        <div className="m-[2px_0_2px_0] w-[426.7px] box-sizing-border">
          <div className="rounded-[12px] bg-[#040404] p-[12px_20px_12px_20px] box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#FFFFFF]">
            Connect wallet
            </span>
          </div>
        </div>
      </div>
      {/* NFT */}
      <div className="bg-white flex-col-center w-full box-sizing-border">
        {/* Header explore */}
        <div className="bg-white flex flex-col p-[40px_80px_40px_80px] w-[fit-content] box-sizing-border">
          {/* Frame */}
          <div className="m-[0_0_24px_0] flex-col-center self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_0_8px_0] flex flex-row w-[fit-content] box-sizing-border">
              <span className="m-[0_8.8px_0_0] break-words font-['Inter'] font-[var(--heading-medium-semibold-font-weight,600)] text-[32px] tracking-[var(--heading-medium-semibold-letter-spacing,-1px)] leading-[var(--heading-medium-semibold-line-height,1.25)] text-[#252525]">
              Explore
              </span>
              <span className="break-words font-['Inter'] font-[var(--heading-medium-semibold-font-weight,600)] text-[32px] tracking-[var(--heading-medium-semibold-letter-spacing,-1px)] leading-[var(--heading-medium-semibold-line-height,1.25)] text-[#252525]">
              NFTs
              </span>
            </div>
            <span className="m-[0_1px_0_0] break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#6A6A6A]">
            Discover and collect cryptoart
            </span>
          </div>
          {/* Horizontal container */}
          <div className="flex flex-row flex-wrap gap-[0_16px] w-full max-w-[1280px] box-sizing-border">
            <div className="rounded-[16px] bg-[#F5F5F5] flex flex-row p-[16px_0] w-[122px] box-sizing-border">
              <div className="m-[2px_10.7px] inline-block break-words font-['Inter'] font-[400] text-[14px] tracking-[-0.2px] leading-[1.429] text-[#252525]">Filters</div>
              <div className="rounded-[8px] bg-[#E3E3E3] flex p-[6.2px_5px] w-[24px] h-[24px] box-sizing-border">
                <img className="w-[14px] h-[11.7px]" src="assets/logos/icon_Wrap.jpg" />
              </div>
            </div>
            {/* Search */}
            <div className="rounded-12 bg-[#F5F5F5] flex-row-between p-[16px] w-full lg:w-[866px] box-sizing-border">
              <div className="m-[2px_10px] inline-block w-[810px] break-words font-['Inter'] font-[400] text-[14px] tracking-[-0.2px] leading-[1.429] text-[#6A6A6A]">Type for NFTs</div>
              <div className="rounded-[8px] bg-[#E3E3E3] flex p-[6.7px_9.7px] w-[24px] h-[24px] box-sizing-border">
                <img className="w-[4.7px] h-[10.5px]" src="assets/logos/icon_search.jpg" />
              </div>
            </div>
            <div className="rounded-[16px] bg-[#F5F5F5] flex flex-row p-[16px_0] w-[139px] box-sizing-border">
              <div className="m-[2px_10.2px] inline-block break-words font-['Inter'] font-[400] text-[14px] tracking-[-0.2px] leading-[1.429] text-[#252525]">Trending</div>
              <div className="rounded-[8px] bg-[#E3E3E3] flex p-[9.7px_7.9px] w-[24px] h-[24px] box-sizing-border">
                <img className="w-[8.2px] h-[4.7px]" src="assets/logos/icon_Trending.jpg" />
              </div>
            </div>
            <div className="rounded-[16px] bg-[#F5F5F5] flex flex-row p-[4px_19.7px_4px_4px] w-[105px] box-sizing-border">
              <div className="shadow-[var(--shadow-md,0px_2px_10px_0px_rgba(0,0,0,0.05))] rounded-12 bg-white m-[0_16.7px] flex-col-center p-[15.7px] w-[48px] box-sizing-border">
                <div className="m-[0_0_1.7px] flex flex-row w-[16.7px] box-sizing-border">
                  <div className="rounded-[3px] bg-[#252525] m-[0_1.7px] w-[7.5px] h-[7.5px]"></div>
                  <div className="rounded-[3px] bg-[#252525] w-[7.5px] h-[7.5px]"></div>
                </div>
                <div className="flex flex-row w-[16.7px] box-sizing-border">
                  <div className="rounded-[3px] bg-[#252525] m-[0_1.7px] w-[7.5px] h-[7.5px]"></div>
                  <div className="rounded-[3px] bg-[#252525] w-[7.5px] h-[7.5px]"></div>
                </div>
              </div>
              <div className="rounded-12 m-[15.7px_0] flex-col-center w-[48px] box-sizing-border">
                <div className="m-[0_0_0.8px] flex flex-row gap-[0_0.8px] w-[16.7px] box-sizing-border">
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                </div>
                <div className="m-[0_0_0.8px] flex flex-row gap-[0_0.8px] w-[16.7px] box-sizing-border">
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                </div>
                <div className="flex flex-row gap-[0_0.8px] w-[16.7px] box-sizing-border">
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                  <div className="rounded-[2px] bg-[#A4A4A4] w-[5px] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-row p-[0_20px_80px] lg:p-[0_80px_80px] w-full max-w-[1440px] box-sizing-border">
          {/* Filters */}
          <div className="rounded-[16px] border-[0.7px_solid_#E3E3E3] bg-white m-[0_32px_784px_0] flex-col-center p-[19.3px_7.3px] box-sizing-border">
            <div className="m-[0_12px_16px] flex-row-between w-[296px] box-sizing-border">
              <span className="m-[0_12px_0] w-[92px] break-words font-['Inter'] font-[500] text-[18px] tracking-[-0.2px] leading-[1.333] text-[#252525]">
                Blockchain
              </span>
              <div className="rounded-[8px] bg-[#E3E3E3] flex p-[9.7px_7.9px] w-[24px] h-[24px] box-sizing-border">
                <img className="w-[8.2px] h-[4.7px]" src="assets/logos/icon_Trending.jpg" />
              </div>
            </div>
            <div className="m-[0_0_16px_0] flex-col-center w-[fit-content] box-sizing-border">
              <div className="rounded-12 bg-[#F5F5F5] m-[0_0_4px_0] flex-row-between p-[12px_12px_12px_12px] w-[280px] box-sizing-border">
                <div className="m-[2px_10px_2px_0] inline-block w-[220px] break-words font-['Inter'] font-[var(--body-14-medium-font-weight,500)] text-[14px] tracking-[var(--body-14-medium-letter-spacing,-0.2px)] leading-[var(--body-14-medium-line-height,1.429)] text-[#252525]">
                All
                </div>
                <div className="rounded-[8px] bg-[#E3E3E3] flex p-[7.9px_6.8px_8.5px_6.8px] w-[24px] h-[24px] box-sizing-border">
                  <img className="w-[10.5px] h-[7.6px]" src="assets/logos/icon_Wrap_Card.jpg"/>
                </div>
              </div>
              <div className="rounded-12 bg-white m-[0_0_4px_0] flex flex-row p-[12px_0_12px_12px] w-[280px] box-sizing-border">
                <img className="m-[0_12px_0_0] w-[24px] h-[24px]" src="assets/logos/icon_ETH.jpg"/>
                <div className="m-[2px_0_2px_0] inline-block break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#6A6A6A]">
                Ethereum
                </div>
              </div>
              <div className="rounded-12 bg-white m-[0_0_4px_0] flex flex-row p-[12px_0_12px_12px] w-[280px] box-sizing-border">
                <img className="m-[0_12px_0_0] w-[24px] h-[24px]" src="assets/logos/icon_ETH.jpg"/>
                <div className="m-[2px_0_2px_0] inline-block break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#6A6A6A]">
                BNB Chain
                </div>
              </div>
              <div className="rounded-12 bg-white m-[0_0_4px_0] flex flex-row p-[12px_0_12px_12px] w-[280px] box-sizing-border">
                <img className="m-[0_12px_0_0] w-[24px] h-[24px]" src="assets/logos/icon_ETH.jpg"/>
                <div className="m-[2px_0_2px_0] inline-block break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#6A6A6A]">
                Avalanche
                </div>
              </div>
              <div className="rounded-12 bg-white flex flex-row p-[12px_0_12px_12px] w-[280px] box-sizing-border">
                <img className="m-[0_12px_0_0] w-[24px] h-[24px]" src="assets/logos/icon_ETH.jpg"/>
                <div className="m-[2px_0_2px_0] inline-block break-words font-['Inter'] font-[var(--body-14-reguler-font-weight,400)] text-[14px] tracking-[var(--body-14-reguler-letter-spacing,-0.2px)] leading-[var(--body-14-reguler-line-height,1.429)] text-[#6A6A6A]">
                Solana
                </div>
              </div>
            </div>
            <div className="m-[0_12px_32px_12px] flex-row-between w-[296px] box-sizing-border">
              <span className="m-[0_12px_0_0] w-[55px] break-words font-['Inter'] font-[var(--body-18-medium-font-weight,500)] text-[18px] tracking-[var(--body-18-medium-letter-spacing,-0.2px)] leading-[var(--body-18-medium-line-height,1.333)] text-[#252525]">
              Status
              </span>
              <div className="rounded-[8px] bg-[#E3E3E3] flex p-[9.7px_7.9px_9.7px_7.9px] w-[24px] h-[24px] box-sizing-border">
                <img className="w-[8.2px] h-[4.7px]" src="assets/logos/icon_Trending.jpg"/>
              </div>
            </div>
            <div className="m-[0_12px_32px_12px] flex-row-between w-[296px] box-sizing-border">
              <span className="m-[0_12px_0_0] w-[43px] break-words font-['Inter'] font-[var(--body-18-medium-font-weight,500)] text-[18px] tracking-[var(--body-18-medium-letter-spacing,-0.2px)] leading-[var(--body-18-medium-line-height,1.333)] text-[#252525]">
              Price
              </span>
              <div className="rounded-[8px] bg-[#E3E3E3] flex p-[9.7px_7.9px_9.7px_7.9px] w-[24px] h-[24px] box-sizing-border">
                <img className="w-[8.2px] h-[4.7px]" src="assets/logos/icon_Trending.jpg"/>
              </div>
            </div>
            <div className="m-[0_12px_32px_12px] flex-row-between w-[296px] box-sizing-border">
              <span className="m-[0_12px_0_0] w-[79px] break-words font-['Inter'] font-[var(--body-18-medium-font-weight,500)] text-[18px] tracking-[var(--body-18-medium-letter-spacing,-0.2px)] leading-[var(--body-18-medium-line-height,1.333)] text-[#252525]">
              Category
              </span>
              <div className="rounded-[8px] bg-[#E3E3E3] flex p-[9.7px_7.9px_9.7px_7.9px] w-[24px] h-[24px] box-sizing-border">
                <img className="w-[8.2px] h-[4.7px]" src="assets/logos/icon_Trending.jpg"/>
              </div>
            </div>
            <div className="m-[0_12px_0_12px] flex-row-between w-[296px] box-sizing-border">
              <span className="m-[0_12px_0_0] w-[95px] break-words font-['Inter'] font-[var(--body-18-medium-font-weight,500)] text-[18px] tracking-[var(--body-18-medium-letter-spacing,-0.2px)] leading-[var(--body-18-medium-line-height,1.333)] text-[#252525]">
              Collections
              </span>
              <div className="rounded-[8px] bg-[#E3E3E3] flex p-[9.7px_7.9px_9.7px_7.9px] w-[24px] h-[24px] box-sizing-border">
                <img className="w-[8.2px] h-[4.7px]" src="assets/logos/icon_Trending.jpg"/>
              </div>
            </div>
          </div>
          <div className="flex-col-center box-sizing-border">
            <NFTList></NFTList>
            <NFTList></NFTList>
            <NFTList></NFTList>
            <NFTList></NFTList>
          </div>
        </div>
      </div>
    </div>
  )
}