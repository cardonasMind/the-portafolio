import react from "react";

import "./index.css";

import Header from "../header";

export default function Halabalval({ toggleShowLightbox }) {
    return (
        <div id="santiamen-project">
            <Header toggleShowLightbox={toggleShowLightbox} repo="https://github.com/cardonasMind/halabalval" 
                thanks={["nextjs", "reactjs", "redux", "sass", "rest"]}/>
            
            <div id="halabalval-project__content">
                <h1>♒️ HALABALVAL ♒️</h1>
                <p>Halabalval is a countries quiz game which I have make to learn and refine my skills.</p> 

                <p>This project uses <a href="https://restcountries.eu/" target="_blank">https://restcountries.eu/</a> API to generate every question and their answers. Doing this project, back then, I learnt new skills like Redux and SASS.</p>
                
                <p>Just go ahead and test it yourself!</p>
                <b>And more importantly, check out the quality of the code by clicking on repo</b>
                <img src="/static/images/sections/worked-on/halabalval/simple.png" />
                <a href="https://halabalval.vercel.app/" target="_blank">click to Start!</a>
            </div>
        </div>
    )
}