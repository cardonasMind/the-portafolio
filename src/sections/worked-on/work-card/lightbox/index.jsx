import { PureComponent } from "react";

import "./index.css";

export default class extends PureComponent {
    state = {
        showContent: false
    }

    toggleShowContent = () => this.setState(prevState => ({ showContent: !prevState.showContent }));
    
    render() {
        const { showContent } = this.state;
        const { children } = this.props;
        
        return (
            <div className="work-card-lightbox">
                <div className="work-card-lightbox__button" onClick={this.toggleShowContent}><p>See it</p></div>
                
                <div className="work-card-lightbox__main" style={{ left: showContent ? "0" : "100vw" }}>
                    <div className="work-card-lightbox__header">
                        <div className="work-card-lightbox__header-tecnologies">
                            <b>Used technology</b>
                            
                            React NextJs 
                        </div>
                        <a className="work-card-lightbox__header-repo" 
                            href="https://github.com/cardonasmind" target="_blank">
                            <img src="/images/icons/github.svg" /> code
                        </a>
                        
                        <p className="work-card-lightbox__go-back" onClick={this.toggleShowContent}>go back</p>
                    </div>
                    <div className="work-card-lightbox__content">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}