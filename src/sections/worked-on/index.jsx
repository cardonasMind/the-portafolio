import react from "react";

import "./index.css";

import WorkCard from "./work-card";

export default function WorkedOn() {
    return (
        <div className="worked-on">
            <h1>I've worked on</h1>
            
            <div className="worked-on__cards">
                <WorkCard />
                <WorkCard />
            </div>
        </div>
    )
}