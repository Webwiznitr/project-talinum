import React from "react";


function MenuEntry(prop){
    return(
        <div className="w-[600px] px-6 ">

        
        <div className="flex max-w-[100%] min-h-[200px] mb-5  items-center justify-center
        border border-[#35b8be26] rounding-[6px] p-[25px] bg-[#fff] grid-flow-col " >

            <div className="max-w-[120px] max-h-[120px] pr-5">
                <img className="max-h-[100%]  rounded-md  "
                 src={prop.imgUrl} alt="menu"></img>
            </div>

           <div className="max-w-[100%]  ">
               <div className="">
                   <div className="text-[16px]  mb-1  " > 
                      <div className=" inline-block w-[150px]   "> 
                       <h4 className="inline-block font-bold font-sans leading-[20px] 
                       tracking-head  ">{prop.name}</h4>
                       </div>
                    
                
                       <div className="inline-block text-[16px] text-[#35b8be] 
                        font-[500] font-sans leading-[20px] ml-[120px] ">
                             {prop.price}
                        </div>
                     
                       
                    </div>
              
             
               </div>

               <div className="text-[#546285] mb-[10px] tracking-base"> {prop.data}</div>
               <form>
                      <input type="number" placeholder="0" 
                         className="max-h-[45px] rounded-[6px] mr-[8px]
                         bg-[#fafafa] w-[60px] border border-[#ddd] py-[8px] px-[6px] " />
                         
                      <button className="bg-[#35b8be] rounded-md py-[9px] px-[15px]
                      text-[#fff] text-center min-h-[45px] tracking-base"
                      >Add To Cart</button>
               </form>
              
            </div>
               
        </div>

        </div>
           
        

    );

}
export default MenuEntry;