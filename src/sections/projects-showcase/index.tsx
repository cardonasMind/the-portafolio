import { PureComponent, Fragment } from "react";

import PrintProjects from "./PrintProjects";

import { Santiamen, Halabalval, Hippopotamus, ThePortfolio } from "./projects-content";

export default class extends PureComponent {
    state = {
        showLightbox: false,
        lightboxContent: undefined,
		
		projectsData: [
			{
				image: "/static/images/sections/projects/the-portfolio/cover.jpg",
				title: "The Portfolio",
				short: "This portfolio itself is one of my projects.",
				link: "https://www.cardona.ml",
				content: <ThePortfolio />,
				breathing: "0.1.0"
			},
			{
				image: "/static/images/sections/projects/hippopotamus/cover.png",
				title: "Hippopotamus 💬",
				short: "Real-time chat.",
				link: "https://hippopotamus-client.vercel.app",
				content: <Hippopotamus />
			},
			{
				image: "/static/images/sections/projects/halabalval/cover.png",
				title: "♒️ HALABALVAL ♒️",
				short: "The Countries Quiz Game",
				link: "https://halabalval.vercel.app/welcome",
				content: <Halabalval />
			},
			{
				image: "/static/images/sections/projects/santiamen/cover.png",
				title: "Santiamén",
				short: "Fast-food delivery platform",
				link: "https://santiamen.ml/",
				content: <Santiamen />
			}
		]
    }

    toggleShowLightbox = () => this.setState(prevState => ({ showLightbox: !prevState.showLightbox }));

    changeLightboxContent = content => {
        this.setState({ lightboxContent: content });
        window.scrollTo(0, document.getElementById("projects").offsetTop);
    }
    
    render() {
        const { showLightbox, lightboxContent, projectsData } = this.state;
        
        return (
            <Fragment>
                <div id="projects" style={{ display: showLightbox ? "none" : "block" }} className="my-24">
                    <h1 className="text-2xl text-center">Projects Showcase</h1>

                    <PrintProjects projectsData={projectsData} toggleShowLightbox={this.toggleShowLightbox} changeLightboxContent={this.changeLightboxContent} />
                </div>

                <div id="lightbox" style={{ display: showLightbox ? "block" : "none" }} className="mb-24">
                    {lightboxContent}
                </div>
            </Fragment>
        )
    }
}