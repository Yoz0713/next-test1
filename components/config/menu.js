import React,{useState,useLayoutEffect,useRef,useEffect,useContext} from "react";
import logo1 from "../../img/SVG/logo_01.svg"
import logo2 from "../../img/SVG/logo_02.svg"
// import { Link,useLocation} from "react-router-dom";
import Link from "next/link";
import { gsap} from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {SplitText} from "./splitText"
import { isactive } from "./activeMenu"
import Image from "next/image"
gsap.registerPlugin(ScrollTrigger);
function Menu(props){
    console.log(Link)
    let menu = useRef()
    let gg = useRef()
    let h = 0

    let [menuEn] = useState([`ABOUT`,`PORTFOLIO`,`SERVICE`,`BLOG`,`NEWS`,`CONTACT`])
    let toggle = useContext(isactive)

    useEffect(()=>{
        window.scrollTo(0,0)
      
    })
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gg.current = gsap.timeline({
                scrollTrigger:{
                    trigger:"li",
                    start:"top bottom"
                }
            })
            gg.current.fromTo('li ',{
                y:30,
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:1,
            }).fromTo('ul :nth-child(2) p .split',{
                x:5,
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:0.8,
                stagger:0.08
            },">-0.35").fromTo('ul :nth-child(3) p .split',{
                x:5,
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:0.8,
                stagger:0.08
            },"<").fromTo('ul :nth-child(4) p .split',{
                x:5,
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:0.8,
                stagger:0.08
            },"<").fromTo('ul :nth-child(5) p .split',{
                x:5,
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:0.8,
                stagger:0.08
            },"<").fromTo('ul :nth-child(6) p .split',{
                x:5,
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:0.8,
                stagger:0.08
            },"<").fromTo('ul :nth-child(7) p .split',{
                x:5,
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:0.8,
                stagger:0.08
            },"<")
        },menu)
        return()=> ctx.revert()
    })
    return(
        <div className={`menu ${toggle.menuToggle? "is-active2":null}` }ref={menu}>
            <ul>
                <li className={h === "/" ? "menu-logo a" : "menu-logo"} onClick={()=>{
                  let getJSON = async(url) => {
                    let response = await fetch(url,{method:"GET"});
                    let JSON = await response.json();
                    console.log(JSON)
                    }
                
                getJSON("https://jsonplaceholder.typicode.com/posts/1")
                }}>
                        <Link href="/">
                        <Image src={logo1} alt=""/>
                        <Image src={logo2} alt="" className="star"/>
                  
                        </Link>
                </li>
                <li>
                        <div className={h === "/about" ? "menu-box a" : "menu-box"}>
                                <Link href="./about">
                                <h3 className="ch_text">關於典長</h3>
                                <p className="en_text"><SplitText word={menuEn[0]}/></p>
                                </Link>
                          
                        </div>
                    </li>
                    <li>
                    <div className={h === "/portfolio"? "menu-box a" : "menu-box"}>
                                <Link href="./portfolio">
                                <h3 className="ch_text">新作鑑賞</h3>
                                <p className="en_text"><SplitText word={menuEn[1]}/></p>
                                </Link>
                        
                        </div>
                  
                    </li>
                    <li>
                        <div className="menu-box">
                         
                                <h3 className="ch_text">貼心客服</h3>
                                <p className="en_text"><SplitText word={menuEn[2]}/></p>
                           
                         
                        </div>
                    
                    </li>
                    <li>
                        <div className="menu-box">
                         
                                <h3 className="ch_text">美宅札記</h3>
                                <p className="en_text"><SplitText word={menuEn[3]}/></p>
                           
                     
                        </div>
                     
                    </li>
                    <li>
                        <div className="menu-box">
                         
                                <h3 className="ch_text">典長新訊</h3>
                                <p className="en_text"><SplitText word={menuEn[4]}/></p>
                           
                    
                        </div>
                       
                    </li>
                    <li>
                        <div className="menu-box">
                         
                                <h3 className="ch_text">聯絡我們</h3>
                                <p className="en_text"><SplitText word={menuEn[5]}/></p>
                           
                      
                        </div>
                
                    </li>
            </ul>
        </div>
    )
}
export { Menu }