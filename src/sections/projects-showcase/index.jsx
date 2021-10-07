import { PureComponent, Fragment } from "react";

import PrintProjects from "./PrintProjects";

import { Santiamen, Halabalval, Hippopotamus } from "./works-content";

/*

image: string
title: string
short: string 
link: string 
content: React Element
breathing?: string "0.0.1"

*/

export default class extends PureComponent {
    state = {
        showLightbox: false,
        lightboxContent: undefined,
		
		projectsData: [
			{
				image: "/static/images/sections/worked-on/hippopotamus/cover.png",
				title: "Hippopotamus 💬",
				short: "Real-time chat.",
				link: "https://hippopotamus-client.vercel.app"
			},
			{
				image: "/static/images/sections/worked-on/halabalval/cover.png",
				title: "♒️ HALABALVAL ♒️",
				short: "The Countries Quiz Game",
				link: "https://halabalval.vercel.app/welcome"
			},
			{
				image: "/static/images/sections/worked-on/santiamen/cover.png",
				title: "Santiamén",
				short: "Fast-food delivery platform",
				link: "https://santiamen.ml/"
			}
		]
    }

    toggleShowLightbox = () => this.setState(prevState => ({ showLightbox: !prevState.showLightbox }));

    changeLightboxContent = content => {
        this.setState({ lightboxContent: content });
        window.scrollTo(0, document.getElementById("worked-on").offsetTop);
    }
    
    render() {
        const { showLightbox, lightboxContent, projectsData } = this.state;
        
        return (
            <Fragment>
                <div id="worked-on" style={{ display: showLightbox ? "none" : "block" }}>
                    <h1 id="worked-on__title">Projects Showcase</h1>

                    <PrintProjects projectsData={projectsData} />
                </div>

                <div id="lightbox" style={{ display: showLightbox ? "block" : "none" }}>
                    {lightboxContent}
                </div>
            </Fragment>
        )
    }
}