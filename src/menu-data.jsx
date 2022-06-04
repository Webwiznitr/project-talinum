import React from "react";
import MenuEntry from "./menu-entry";
import menupedia from "./menupedia";

function MenuData (){
    function createMenuEntry(term){
        return(
    <MenuEntry 
    key={term.id}
    name={term.name}
    price={term.data}
    data={term.price}
    URL={term.img}
    />
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