import{useState,useContext,createContext} from "react";

export const isactive = createContext({isactive:false})
export function ActiveMenu(props){
        let active = useContext(isactive)
        let [menuToggle,setMenuToggle] = useState(active.isactive)
        return(
            <isactive.Provider value={{menuToggle,setMenuToggle}}>
               {props.children}
            </isactive.Provider>
        )
}