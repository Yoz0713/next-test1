import React,{useState,useRef,useLayoutEffect} from "react"
import { SplitText } from "../config/splitText";
import { gsap} from "gsap"
import Image from "next/image"
const requireWebp = require.context("../../img/project", true, /^\.\/.*\.webp$/);
const requireWebp2 = require.context("../../img/ph-banner", true, /^\.\/.*\.webp$/);
const requireSvg = require.context("../../img/project", true, /^\.\/.*\.svg$/);
const requireSvg2 = require.context("../../img//SVG/SVG", true, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const svg2 = requireSvg2.keys().map(requireSvg2);
const webp = requireWebp.keys().map(requireWebp);
const webp2 = requireWebp2.keys().map(requireWebp2);
console.log(webp2)
export function FirstPage(){
    let [title]= useState(`為城市種下美的種子，\r為你築起一輩子的好宅。`)
    let animation = useRef()
    let gg = useRef()
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gg.current = gsap.timeline()
            gg.current.fromTo(".split",{
               
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:0.8,
                stagger:0.08
            }).fromTo(".imgBox",{
                x:-30,
                opacity:0,
            },{
                x:0,
                opacity:1,
                duration:0.8,
      
            },">-0.6")
        },animation)
        return()=>ctx.revert()
    })
    return(
        <section className="first-page" ref={animation}>
            <div className="first-page-bg magic-hover magic-hover__square">
                <Image src={webp[6]} className="computer" alt=""/>
                <Image src={webp2[7]} className="phone" alt=""/>
            </div>
            <div className="first-page-title word_level">
                <h2 className="ch_text_xl">
                    <SplitText word={title}/>
                </h2>
                <div className="imgBox">
                    <Image src={svg2[1]} alt="" width={286} height={260}/>
                    <div className="para">
                        <h2 className="ch_text_l">新作<br/>
                            鑑賞</h2>
                        <h4 className="en_text_xs">PORTFOLIO</h4>
                    </div>
                
                </div>
               
                </div>

        </section>
    )
}

export function SecondPage(){
    return(
        <section className="second-page" id="portfolio-second-page">
            <div className="second-page-left">
                <div className="imgBox">
                    <a href="./portfolioInner.html">
                        <div className="cover-glowing">

                        </div>
                        <Image src={webp[0]} alt=""/>
                    </a>
                  
                </div>
            </div>
            <div className="second-page-right">
                <div className="second-page-right-para word_level">
                   
                    <div className="second-page-right-para-para1">
                        <h2 className="ch_text_xl">典長成美</h2>
                        <p className="ch_text_xs">彰化高鐵特區 <br/>
                            成家成美</p>
                    </div>
                    <div className="second-page-right-para-para2">
                        <h3 className="ch_text_l">收藏一家人的幸福時光</h3>
                        <p className="ch_text_s">一座現代優雅的美墅聚落，刻劃家的美感，實現幸福樣貌，逐層陽台，是風光流暢的日常，舒適的空間，是家人的嚮往。</p>
                    </div>
                    <a href="./portfolioInner.html">
                        <div className="readmore">
                            <p>更多內容</p>
                            <Image src={svg[0]} alt=""/>
                        </div>
                    </a>
                  
                </div>
            </div>
        </section>
    )
}