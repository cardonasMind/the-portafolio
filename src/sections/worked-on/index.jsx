import { PureComponent, Fragment } from "react";

import "./index.css";

import WorkCard from "./work-card";

import { Santiamen } from "./works-content";

export default class extends PureComponent {
    state = {
        showLightbox: false,
        lightboxContent: undefined
    }

    toggleShowLightbox = () => this.setState(prevState => ({ showLightbox: !prevState.showLightbox }));

    changeLightboxContent = content => this.setState({ lightboxContent: content });
    
    render() {
        const { showLightbox, lightboxContent } = this.state;
        
        return (
            <Fragment>
                <div id="worked-on" style={{ display: showLightbox ? "none" : "block" }}>
                    <h1 id="worked-on__title">I've worked on</h1>

                    <div id="worked-on__cards">
                        <WorkCard changeLightboxContent={this.changeLightboxContent}
                            toggleShowLightbox={this.toggleShowLightbox} 
                            image="/static/images/sections/worked-on/santiamen/cover.png" 
                            title="Santiamén" short="Fast-food delivery platform">
                            <Santiamen />
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