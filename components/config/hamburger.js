
import { useState,useEffect,useContext} from "react"
import { isactive } from "./activeMenu"
export function Hamburger(props){

    let ctx = useContext(isactive)
   
    return(
    <button className={`hamburger hamburger--collapse ${ctx.menuToggle? "is-active" : null}`} type="button" onClick={()=>{
        ctx.setMenuToggle(ctx.menuToggle = !ctx.menuToggle)
        console.log(ctx.menuToggle)
    }}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
    </button> 
    )
}