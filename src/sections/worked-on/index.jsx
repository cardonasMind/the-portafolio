import react from "react";

import "./index.css";

import WorkCard from "./work-card";

export default function WorkedOn() {
    return (
        <div id="worked-on">
            <h1 id="worked-on__title">I've worked on</h1>
            
            <div id="worked-on__cards">
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </div>
        </div>
    )
}