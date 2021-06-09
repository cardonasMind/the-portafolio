import react from "react";

import "./index.css";

import Lightbox from "./lightbox"

export default function WorkCard({ image, title, short, children }) {
    return (
        <div className="worked-on__card" style={{ backgroundImage: `url(${image})` }}>
            <h2>{title}</h2>
            <p>{short}</p>
            <Lightbox>
                {children}
            </Lightbox>
        </div>
    )
}