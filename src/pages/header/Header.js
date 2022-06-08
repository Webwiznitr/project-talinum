import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import './Header.css';
import { useState } from "react";

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
   
    //   flex justify-center items-center bg-contain p-1.4 bg-cyanhead h-12 bg-[url('https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa36d5976b5d3_Banner%20Wave.svg')]
  return (
    <section className='header'>
        <div id="Banner" className="  banner">
            <div className=" banner-wrap">
                <div className="text-center text-white text-base notice-text text-notice-text">We're open and available for takeaway &amp; delivery.
                 <a href="/order" className="white-link text-white">Order Now</a>
                 </div>
            </div>
        </div>
        <div data-animation="default" class="flex p-5 items-center bg-white navbar w-nav z-1000" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="33c883c6-4afc-cc73-3bca-d2857a9d4bc2" role="banner" data-duration="400" id="Navigation">
        <div class="navigation-container flex w-full mr-auto ml-auto justify-between max-w-screen-xl">
        <div class="navigation-left flex items-center">
            <a href="/" aria-current="page" class="mr-10 brand w-nav-brand w--current float-left text-col2 bg-transparent"><img src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa341ab76b5e7_Logo.svg" width="40" alt=""/></a>
        </div>
        <div class="navigation-right flex items-center">
            <div class="menu-button w-nav-button float-right relative p-5 text-s cursor-pointer">
                <div class="icon w-icon-nav-menu">

                </div>
            </div>
            {/* <GiHamburgerMenu className='hamburger'/> */}
            <nav role="navigation" class={isNavExpanded ?"nav-menu  w-nav-menu" :"nav-menu"}>
                <a href="/" aria-current="page" class="pr-4 pl-4 opacity-80 text-s2 realtive inline-block p-5 ml-auto mr-auto align-top text-left nav-link w-nav-link w--current text-cyanhead">Home</a>
                <a href="/order" class="pr-4 pl-4 opacity-80 text-s2 realtive inline-block p-5 ml-auto mr-auto align-top text-left nav-link w-nav-link">Order</a>
                <a href="/company" class="pr-4 pl-4 opacity-80 text-s2 realtive inline-block p-5 ml-auto mr-auto align-top text-left nav-link w-nav-link">Company</a>
                <a href="/faq" class="pr-4 pl-4 opacity-80 text-s2 realtive inline-block p-5 ml-auto mr-auto align-top text-left nav-link w-nav-link">FAQ</a>
                <a href="mailto:hello@website.com?subject=Hi" class="pr-4 pl-4 opacity-80 text-s2 realtive inline-block p-5 ml-auto mr-auto align-top text-left nav-link w-nav-link">Contact</a>
                
                </nav>
            <GiHamburgerMenu className='hamburger absolute'   onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}/>
            <a href="/" data-node-type="commerce-cart-open-link"  class="w-commerce-commercecartopenlink cart-button relative pt-[19px] p-[13px] bg-cover border-0 min-h-cart min-w-cart max-w-full bg-cyanhead bg-[url('https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa36d5976b5d3_Banner%20Wave.svg')] items-center rounded text-white text-center text-s3 w-inline-block">
                <svg class="w-commerce-commercecartopenlinkicon cart-icon w-[25px] mr-0 h-[17px] overflow-hidden" width="17px" height="17px" viewBox="0 0 17 17">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z" fill="currentColor" fill-rule="nonzero">
                            </path>
                            </g>
                            </svg>
                            
                            <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity absolute left-auto top-[-6px] right-[-6px] bottom-auto flex h-[25px] min-w-[25px] justify-center items-center rounded-full shadow-xl bg-white text-cyanhead text-center">0</div>
                            </a>
           </div>
           </div>
           </div>
    </section>
  )
}

export default Header