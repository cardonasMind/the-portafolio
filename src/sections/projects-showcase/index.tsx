import { PureComponent, Fragment } from "react";

import PrintProjects from "./PrintProjects";

import Lightbox from "./Lightbox";

import { Santiamen, Halabalval, Hippopotamus, ThePortfolio } from "./projects-content";

export default class extends PureComponent {
    state = {
        showLightbox: false,
		lightbox: {
			repo: "",
			technologies: [],
			content: undefined
		},
		
		projectsData: [
			{
				// This is for ProjectCard
				image: "/static/images/sections/projects/the-portfolio/cover.jpg",
				title: "The Portfolio",
				short: "This portfolio itself is one of my projects.",
				link: "https://www.cardona.ml",
				breathing: "0.1.0",
				
				// and this for Lightbox
				repo: "https://github.com/cardonasmind/the-portafolio",
				technologies: ["nextjs", "reactjs", "tailwindcss", "typescript"],
				content: <ThePortfolio />
			},
			{
				image: "/static/images/sections/projects/hippopotamus/cover.png",
				title: "Hippopotamus 💬",
				short: "Real-time chat.",
				link: "https://hippopotamus-client.vercel.app",
				repo: "https://github.com/cardonasmind/hippopotamus",
				technologies: ["nextjs", "reactjs", "tailwindcss", "expressjs", "socketio"],
				content: <Hippopotamus />
			},
			{
				
				image: "/static/images/sections/projects/halabalval/cover.png",
				title: "♒️ HALABALVAL ♒️",
				short: "The Countries Quiz Game",
				link: "https://halabalval.vercel.app/welcome",
				repo: "https://github.com/cardonasMind/halabalval",
				technologies: ["nextjs", "reactjs", "redux", "sass", "rest"],
				content: <Halabalval />
			},
			{
				image: "/static/images/sections/projects/santiamen/cover.png",
				title: "Santiamén",
				short: "Fast-food delivery platform",
				link: "https://santiamen.ml/",
				repo: "https://github.com/cardonasMind/santiamen",
				technologies: ["nextjs", "reactjs", "firebase"],
				content: <Santiamen />
			}
		]
    }

    toggleShowLightbox = () => this.setState(prevState => ({ showLightbox: !prevState.showLightbox }));
	
	// This index is passed when click on About it button on ProjectCard and it´s the index for projectsData
	changeLightboxData = index => {
		const projectDataForLightbox = this.state.projectsData[index];
		const { repo, technologies, content } = projectDataForLightbox; 
		
		this.setState({ lightbox: { repo, technologies, content } });
		window.scrollTo(0, document.getElementById("projects").offsetTop);
	}
    
    render() {
        const { showLightbox, lightbox, projectsData } = this.state;
        
        return (
            <Fragment>
                <div id="projects" style={{ display: showLightbox ? "none" : "block" }} className="my-24">
                    <h1 className="text-2xl text-center">Projects Showcase</h1>

                    <PrintProjects projectsData={projectsData} toggleShowLightbox={this.toggleShowLightbox} changeLightboxData={this.changeLightboxData} />
                </div>

                <Lightbox showLightbox={showLightbox} toggleShowLightbox={this.toggleShowLightbox} lightboxData={lightbox} />
            </Fragment>
        )
    }
}