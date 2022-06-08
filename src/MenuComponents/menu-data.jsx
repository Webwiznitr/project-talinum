import React,{useState} from "react";
import MenuEntry from "./menu-entry";
import {menupedia,menupedia_sides,menupedia_drinks} from "./menupedia";

function MenuData (){

    const info= function createMenuEntry(term){
     return(
    <div key={term.id}>
      
      <MenuEntry 
      key={term.id}
      name={term.name}
      price={term.price}
      data={term.data}
      imgUrl={term.imgUrl}
      
    />
    </div> 
   );
  }
    
    const[data,setData]=useState([menupedia.map(info)]);


     return(
      <div className="bg-cover ">
          <div  className=" flex-row text-center mb-[50px] place-content-evenly" >


           <button className="inline-flex items-center text-[#fff] bg-[#35b8be] h-[52px] mx-[15px] text-[17px]
           px-[45px] min-w-[52px] leading-5 font-[500] text-[ Inter, sans-serif] rounded-[6px] border border-[#61728333] "
            onClick={()=>setData([menupedia.map(info)])}
            >Burgers</button>

           <button className="inline-flex items-center  text-black bg-transparent h-[52px] mx-[15px] text-[17px]
           px-[45px] min-w-[52px] leading-5 font-[500] text-[ Inter, sans-serif] rounded-[6px] border border-[#61728333]"
            onClick=  {()=>setData([menupedia_sides.map(info)])}
            >Sides</button>

           <button className="inline-flex items-center text-black bg-transparent h-[52px] mx-[15px] text-[17px]
           px-[45px] min-w-[52px]  leading-5 font-[500] text-[ Inter, sans-serif] rounded-[6px] border border-[#61728333] "
            onClick={()=> setData([menupedia_drinks.map(info)])}>Drinks</button>
          </div>

          <div className="mx-auto sm:grid-cols-1">
            <div className=" mx-auto max-h-[100%] max-w-[1200px] grid lg:grid-cols-2 sm:grid-cols-1  ">
               {data}
            </div>
          </div>

         <div className="flex justify-center my-6">
           <button className=" mx-auto text-[#fff] bg-[#35b8be] h-[52px]  text-[17px]
              px-[45px] min-w-[52px] leading-5 font-[500] text-[ Inter, sans-serif]
              rounded-[6px] border border-[#61728333]">
                    See Full Menu
           </button>
         </div>
          

      </div>
           
       
    );
}
export default MenuData;