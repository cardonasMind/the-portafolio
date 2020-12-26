import react from "react";

import "./index.css";

import WorkCard from "./work-card";

export default function WorkedOn() {
    return (
        <div className="worked-on">
            <h1>I've worked on</h1>
            
            <div className="worked-on__cards">
                <WorkCard 
                    image="/images/works/santiamen.png" title="Santiamén" 
                    description="Santiamén was a fast-food delivery platform where business owners of my location can upload their shit thii wuuehri ehreiqi sadia idhaidh ia Santiamén was a fast-food delivery platform where business owners of my location."
                >
                    fdfdf
                </WorkCard>
            </div>
        </div>
    )
}