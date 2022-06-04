import React from "react";

function MenuEntry(props){
    return(
        <div>
           <span> {props.name}</span>
           <span> {props.data}</span>
           <span> {props.price}</span>
           <span> {props.img}</span>
        </div>

    );

}
export default MenuEntry;