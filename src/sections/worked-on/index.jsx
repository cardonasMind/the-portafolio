import react, { Fragment } from "react";

import "./index.css";

import WorkCard from "./work-card";

import { Santiamen } from "./works-content";

export default function WorkedOn() {
    return (
        <Fragment>
            <div id="worked-on">
                <h1 id="worked-on__title">I've worked on</h1>

                <div id="worked-on__cards">
                    <WorkCard image="/static/images/sections/worked-on/santiamen.png" 
                        title="Santiamén" short="Fast-food delivery platform">
                        <Santiamen />
                    </WorkCard>
                </div>
            </div>
            
            <div id="lightbox" />
        </Fragment>
    )
}