import react from "react";

import "./index.css";

export default function Hero() {
    return (
        <div id="hero" style={{ backgroundImage: `url(${"/static/images/sections/hero.jpg"})` }}>
            <h1>Diego Cardona</h1>
            <h2>Front-end developer <img src="/static/icons/colombia-flag.svg" /></h2>
        </div>
    )
}