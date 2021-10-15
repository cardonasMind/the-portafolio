import React from "react";

import Header from "../header";

export default function ThePortfolio({ toggleShowLightbox }) {
    return (
        <div id="the-portfolio-project">
            <Header toggleShowLightbox={toggleShowLightbox} repo="https://github.com/cardonasmind/the-portafolio" 
                thanks={["nextjs", "reactjs", "tailwindcss", "typescript"]}/>
            
            <div className="space-y-4 m-4 text-justify">
                <h1 className="text-2xl text-center mb-2">The Portfolio</h1>
				
				<h1 className="text-2xl border-b border-black">v0.1.0</h1>
				<p>For this version bla bla bla...</p>
				
				<h1 className="text-2xl border-b border-black">v0.0.0</h1>
				<p>This version was a mesh bla bla bla bla... Add It later :)</p>
				<img src="/static/images/sections/projects/the-portfolio/v0.0.0.png" />
            </div>
        </div>
    )
}