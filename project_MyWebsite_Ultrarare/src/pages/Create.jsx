export default function Create() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center p-[0_0_80px_0] w-[1440px] box-sizing-border">
      <div className="bg-[#FFFFFF] m-[0_0_80px_0] flex flex-row justify-between p-[20px_80px_20px_80px] w-[1440px] box-sizing-border">
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
        {/* Segmented picker */}
        <div className="flex flex-row box-sizing-border">
          {/* profile */}
          <div className="rounded-[12px] bg-[#F5F5F5] m-[0_16px_0_0] flex flex-row p-[12px_16px_12px_16px] box-sizing-border">
            <p className="m-[0_12.1px_0_0] break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            <span className="button-sub-0"></span>0.0050<span> ETH</span>
            </p>
            <div className="bg-[#E3E3E3] m-[0_11px_0_0] w-[24px] h-[0px]">
            </div>
            <img className="m-[2px_0_2px_0] w-[20px] h-[20px]" src="assets/logos/icon_User.jpg"/>
          </div>
          <div className="rounded-[12px] bg-[#F5F5F5] m-[0_16px_0_0] flex p-[14px_14px_14px_14px] w-[48px] h-[48px] box-sizing-border">
            <img className="w-[20px] h-[20px]" src="assets/logos/icon_Shoping.jpg"/>
          </div>
          <div className="rounded-[16px] bg-[#F5F5F5] flex flex-row p-[4px_17.3px_4px_4px] w-[89px] box-sizing-border">
            <div className="shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12),0px_8px_20px_0px_rgba(0,0,0,0.02)] rounded-[12px] bg-[#FFFFFF] m-[0_14.4px_0_0] flex p-[12px_12px_12px_12px] w-[40px] h-[40px] box-sizing-border">
              <img className="w-[16px] h-[16px]" src="assets/logos/icon_Sun.jpg"/>
            </div>
            <div className="m-[13.3px_0_13.4px_0] flex w-[40px] h-[40px] box-sizing-border">
              <img className="w-[13.3px] h-[13.3px]" src="assets/logos/icon_Moon.jpg"/>
            </div>
          </div>
        </div>
      </div>
      {/* Create New Item */}
      <div className="m-[0_0_0_110px] flex flex-col w-[fit-content] box-sizing-border">
        <div className="m-[0_0_60px_0] inline-block self-start break-words font-['Inter'] font-[var(--heading-large-semibold-font-weight,600)] text-[40px] tracking-[var(--heading-large-semibold-letter-spacing,-1.5px)] leading-[var(--heading-large-semibold-line-height,1.1)] text-[#252525]">
        Create New Item
        </div>
        <div className="flex flex-col items-end w-[fit-content] box-sizing-border">
        {/* Upload file */}
          <div className="m-[0_0_40px_0] flex flex-col w-[fit-content] box-sizing-border">
            <div className="m-[0_0_4px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            Upload file
            </div>
            <div className="rounded-[16px] border-[1px_dashed_#E3E3E3] relative flex w-[952px] h-[569px] box-sizing-border">
              <div className="rounded-[12px] bg-[url('assets/images/Image15.png')] bg-[50%_50%] bg-cover bg-no-repeat absolute top-[9px] right-[8px] w-[936px] h-[552px]">
              </div>
              <div className="rounded-[12px] bg-[#F5F5F5] relative flex p-[18.2px_18.2px_18.2px_18.2px] w-[48px] h-[48px] box-sizing-border">
                <img className="w-[11.7px] h-[11.7px]" src="assets/logos/icon_Close.jpg"/>
              </div>
            </div>
          </div>
          <div className="m-[0_0_40px_0] flex flex-col w-[fit-content] box-sizing-border ">
            <div className="m-[0_0_4px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            Name
            </div>
            <div className="rounded-[16px] border-[0.5px_solid_#252525] bg-[#F5F5F5] p-[15.5px_15.5px_15.5px_15.5px] w-[fit-content] box-sizing-border">
              <span className="break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#A4A4A4]">
              Placeholder
              </span>
            </div>
          </div>
          <div className="m-[0_0_40px_0] flex flex-col w-[fit-content] box-sizing-border">
            <div className="m-[0_0_4px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
            Description
            </div>
            <div className="rounded-[16px] bg-[#F5F5F5] flex p-[16px_39.6px_96px_16px] box-sizing-border">
              <span className="break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam fermentum odio vel metus tempor rhoncus. Nulla vel faucibus justo.
              </span>
            </div>
          </div>
          <div className="m-[0_0_40px_0] flex flex-col items-center w-[fit-content] box-sizing-border">
            <div className="m-[0_0_24px_0] flex flex-row w-[952px] box-sizing-border">
              <div className="rounded-[16px] border-[2px_solid_#929292] bg-[#F5F5F5] m-[0_16px_0_0] flex flex-row p-[14px_0_14px_0] w-[468px] box-sizing-border">
                <img className="m-[0_10px_0_0] w-[24px] h-[24px]" src="assets/logos/icon_Tag.jpg"/>
                <span className="break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
                Fixed price
                </span>
              </div>
              <div className="rounded-[16px] bg-[#F5F5F5] flex flex-row p-[16px_0_16px_0] w-[468px] box-sizing-border">
                <img className="m-[0_10px_0_0] w-[24px] h-[24px]" src="assets/logos/icon_Clock.jpg"/>
                <span className="break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#A4A4A4]">
                Timed auction
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[fit-content] box-sizing-border">
              <div className="m-[0_0_4px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-16-semibold-font-weight,600)] text-[16px] tracking-[var(--body-16-semibold-letter-spacing,-0.2px)] leading-[var(--body-16-semibold-line-height,1.5)] text-[#252525]">
              Price
              </div>
              <div className="rounded-[16px] border-[1px_solid_#F5F5F5] bg-[#F5F5F5] flex flex-row w-[952px] box-sizing-border">
                <div className="border-r-[1px_solid_#F5F5F5] m-[0_10px_0_0] flex flex-row p-[16px_18.3px_16px_16px] box-sizing-border">
                  <span className="m-[0_9.7px_0_0] break-words font-['Inter'] font-[var(--body-lg-regular-font-weight,400)] text-[16px] leading-[var(--body-lg-regular-line-height,1.5)] text-[#6A6A6A]">
                  wETH
                  </span>
                  <div className="m-[9.3px_0_9.3px_0] flex w-[16px] h-[16px] box-sizing-border">
                    <img className="w-[9.3px] h-[5.3px]" src="assets/logos/icon_Trending.jpg"/>
                  </div>
                </div>
                <div className="m-[15px_0_15px_0] flex box-sizing-border">
                  <span className="break-words font-['Inter'] font-[var(--body-16-reguler-font-weight,400)] text-[16px] tracking-[var(--body-16-reguler-letter-spacing,-0.2px)] leading-[var(--body-16-reguler-line-height,1.5)] text-[#252525]">
                  99
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] bg-[#040404] flex p-[14px_0.3px_14px_0] w-[97px] box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--body-18-reguler-font-weight,400)] text-[18px] tracking-[var(--body-18-reguler-letter-spacing,-0.2px)] leading-[var(--body-18-reguler-line-height,1.333)] text-[#FFFFFF]">
            Finish
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}