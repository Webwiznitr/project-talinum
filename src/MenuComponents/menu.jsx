import React from "react";
import MenuHeader from "./menu-header";
import MenuData from "./menu-data";

function Menu(){
    return(
        <div  className="mx-[10]  max-w-[500]">
            <MenuHeader />
            <MenuData />
        </div>
    );
}
export default Menu;