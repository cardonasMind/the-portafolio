import react, { Fragment } from "react";

import "./index.css";

export default function Santiamen() {
    return (
        <Fragment>
            <div id="santiamen-project__header">
                <h1>Santiamén</h1>
                
                <p>Santiamén is a colloquial spanish word that means very fast. I found a similar english word which is trice. This was a fast-food delivery platform made using NextJS(witch uses ReactJS) and Firebase, this was mainly for me to learn NextJS, to make a real project and like three months ago I was thinking to make money with the platform but after many interviews with fast-food business owners I realize this was not the best idea, maybe for the moment.</p>
            </div>
            
            <div id="santiamen-project__content">
                <div>
                    <h2>Here you're client</h2>

                    <iframe 
                        frameborder="0"
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="340"
                        height="600"
                        src="https://www.santiamen.ml">
                    </iframe>
                </div>
            
                <div>
                    <h2>Business owner demo</h2>

                    <iframe 
                        frameborder="0"
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="340px"
                        height="600px"
                        src="https://www.santiamen.ml">
                    </iframe>
                </div>
            </div>
        </Fragment>
    )
}