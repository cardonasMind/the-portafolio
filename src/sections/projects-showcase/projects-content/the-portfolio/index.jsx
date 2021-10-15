import react from "react";

import Header from "../header";

export default function ThePortfolio({ toggleShowLightbox }) {
    return (
        <div id="the-portfolio-project">
            <Header toggleShowLightbox={toggleShowLightbox} repo="https://github.com/cardonasmind/the-portafolio" 
                thanks={[]}/>
            
            <div className="space-y-4 m-4 text-justify">
                <h1 className="text-2xl text-center mb-2">The Portfolio</h1>

            </div>
        </div>
    )
}