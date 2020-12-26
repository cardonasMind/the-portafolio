import react from "react";

import "./index.css";

export default function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${"/images/sections/hero.jpg"})` }}>
            <h1 className="hero__title">
                Diego Cardona
                <img src="/images/icons/colombia-flag.svg" className="hero__title-image" /> 
            </h1>
            <h2 className="hero__subtitle">JavaScript Developer (Web oriented)</h2>
        </div>
    )
}