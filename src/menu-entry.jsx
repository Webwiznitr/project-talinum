import React from "react";


function MenuEntry(prop){
    return(
        <div>
           <span> {prop.name}</span>
           <span> {prop.data}</span>
           <span> {prop.price}</span>
          <img src={prop.imgUrl} alt="bc"></img>
        </div>

    );

}
export default MenuEntry;