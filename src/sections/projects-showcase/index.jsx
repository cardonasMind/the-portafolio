import { PureComponent, Fragment } from "react";

//import "./index.css";

import WorkCard from "./work-card";

import { Santiamen, Halabalval, Hippopotamus } from "./works-content";

export default class extends PureComponent {
    state = {
        showLightbox: false,
        lightboxContent: undefined
    }

    toggleShowLightbox = () => this.setState(prevState => ({ showLightbox: !prevState.showLightbox }));

    changeLightboxContent = content => {
        this.setState({ lightboxContent: content });
        window.scrollTo(0, document.getElementById("worked-on").offsetTop);
    }
    
    render() {
        const { showLightbox, lightboxContent } = this.state;
        
        return (
            <Fragment>
                <div id="worked-on" style={{ display: showLightbox ? "none" : "block" }}>
                    <h1 id="worked-on__title">Projects showcase</h1>

                    <div id="worked-on__cards">
                        <WorkCard changeLightboxContent={this.changeLightboxContent}
                            toggleShowLightbox={this.toggleShowLightbox} 
                            image="/static/images/sections/worked-on/hippopotamus/cover.png" 
                            title="Hippopotamus 💬" short="Real-time chat."
                            link="https://hippopotamus-client.vercel.app">
                            <Hippopotamus toggleShowLightbox={this.toggleShowLightbox} />
                        </WorkCard>

                        <WorkCard changeLightboxContent={this.changeLightboxContent}
                            toggleShowLightbox={this.toggleShowLightbox} 
                            image="/static/images/sections/worked-on/halabalval/cover.png" 
                            title="♒️ HALABALVAL ♒️" short="The Countries Quiz Game"
                            link="https://halabalval.vercel.app/welcome">
                            <Halabalval toggleShowLightbox={this.toggleShowLightbox} />
                        </WorkCard>

                        <WorkCard changeLightboxContent={this.changeLightboxContent}
                            toggleShowLightbox={this.toggleShowLightbox} 
                            image="/static/images/sections/worked-on/santiamen/cover.png" 
                            title="Santiamén" short="Fast-food delivery platform"
                            link="https://santiamen.ml/">
                            <Santiamen toggleShowLightbox={this.toggleShowLightbox} />
                        </WorkCard>
                    </div>
                </div>

                <div id="lightbox" style={{ display: showLightbox ? "block" : "none" }}>
                    {lightboxContent}
                </div>
            </Fragment>
        )
    }
}