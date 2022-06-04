import React from "react";
import BurgerImage from "./burger-images";

function MenuEntry(props){
    return(
        <div>
           <span> {props.name}</span>
           <span> {props.data}</span>
           <span> {props.price}</span>
           <BurgerImage />
        </div>

    );

}
export default MenuEntry;