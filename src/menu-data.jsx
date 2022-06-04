import React from "react";
import MenuEntry from "./menu-entry";
import menupedia from "./menupedia";

function MenuData (){
    function createMenuEntry(term){
        return(
    <div>
    <MenuEntry 
    key={term.id}
    name={term.name}
    price={term.data}
    data={term.price}
    />
    <img src={term.imgUrl} alt="burger"></img>
    </div>
    
        );
  }
     return(
        <div>
            <h1>
                jtftgf
            </h1>
           <h1>
          {menupedia.map(createMenuEntry)}
           </h1>
        </div>
    );
}
export default MenuData;