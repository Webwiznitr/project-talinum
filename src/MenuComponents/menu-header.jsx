import React from "react";

function MenuHeader(){
  return(
    <div className="mx-auto mb-10 max-w-2xl  ">
      <div className="flex-col items-center justify-center text-center  ">
          <h2 className="text-center font-[Inter,Sans_Serif]  justify-items-center content-center
             px-auto font-bold tracking-head sm:text-[55px] s:text-[40px]
             mt-10 mb-[45px] text-[#35b8be] leading-4  ">
                  Browse our menu
          </h2>

          <p className="text-[#546285] font-[Inter,Sans_Serif] text-[18px] leading-6 tracking-base mb-[2.5]" >Use our menu to place an order online, or 
           <a href="https://www.w3schools.com " 
           className="text-[#35b8be] underline"> phone </a>
            our store to
            <br />
           place a pickup order. Fast and fresh food.</p>
      </div>
      </div>
  );
}
export default MenuHeader;