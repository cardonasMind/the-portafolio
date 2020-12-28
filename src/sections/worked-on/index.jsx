import react from "react";

import "./index.css";

import WorkCard from "./work-card";
import { Santiamen } from "./works-content";

export default function WorkedOn() {
    return (
        <div className="worked-on">
            <h1 className="worked-on__title">I've worked on</h1>
            
            <div className="worked-on__cards">
                <WorkCard 
                    image="/images/works/santiamen.png" title="Santiamén" 
                    description="Santiamén is a fast-food delivery platform created for business on where I live that was receiving orders by WhatsApp. Creating an unificated site where all business can be on, adding more and better things for their clients and themselves (business owners)."
                    technologies={[
                        "/images/icons/skills/nextjs.png", "/images/icons/skills/reactjs.svg", "/images/icons/skills/firebase.svg"
                    ]}
                    repo="santiamen"
                >
                    <Santiamen />
                </WorkCard>
            </div>
        </div>
    )
}