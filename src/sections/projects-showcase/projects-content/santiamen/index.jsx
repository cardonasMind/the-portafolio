import React from "react";

import Header from "../header";

export default function Santiamen({ toggleShowLightbox }) {
    return (
        <div id="santiamen-project">
            <Header toggleShowLightbox={toggleShowLightbox} repo="https://github.com/cardonasMind/santiamen" 
                thanks={["nextjs", "reactjs", "firebase", "npm", "javascript", "html5", "css3"]}/>
            
            <div id="santiamen-project__content" className="p-4 space-y-4 text-justify">
                <h1 className="text-2xl text-center">Santiamén</h1>
                <p>Santiamén is a colloquial spanish word that means very fast. 
                I found a similar english word which is trice.</p> 

                <p>I started this project last year in early October. I remember these times a lot because at that time I started this project with the idea of making money and with all the quarantine and that I live in a town where there was no such thing as a delivery platform like Rappi or something like that, Well I did.</p>

                <p>For me these where times of a lot of learning and growing wich someone uneducated could consider as "mistakes”. I learned both the technical part and the human one, since I did everything, from codding to contact local business.</p>
                
                <div>
                    <img src="/static/images/sections/projects/santiamen/santiamen-mvp.gif" />
                    <p>This was the first (really hasty) version, code was a disaster as well as the design (sort of) Check it by your own: <a href="https://santiamen-3fukott7r.vercel.app/" target="_blank" className="border border-black px-2 bg-blue-100 hover:bg-blue-200">https://santiamen-3fukott7r.vercel.app/</a> (resize screen to mobile)</p>
                </div>

                <div>
                    <img src="/static/images/sections/projects/santiamen/santiamen-order-stages.gif" />
                    <p>Then due to a business owner request I implemented a order status wich allows clients (business clients, not mine in the first place) to know the state of their order, (when was being prepared, shipped and that)</p>
                </div>

                <div>
                    <img src="/static/images/sections/projects/santiamen/santiamen-now.png" />
                    <p>This is how it looks like right now. Check it yourself here: <a href="https://www.santiamen.ml" target="_blank" className="border border-black px-2 bg-blue-100 hover:bg-blue-200">https://www.santiamen.ml</a> (resize screen to mobile)</p>
                </div>
                <div>
                    <img src="/static/images/sections/projects/santiamen/santiamen-business.gif" />
                    <p>And this is how business owners panel looks like.</p>
                </div>
                
                <p>At the time, last update was on December 11, 2020. I should mention that this is an abandoned project wich brought me a loooot of grownth.</p>
            </div>
        </div>
    )
}