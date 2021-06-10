import { PureComponent } from "react";

import "./index.css";

export default class extends PureComponent {
    state = {
        showContent: false,
        lightboxRef: document.getElementById("lightbox")
    }

    toggleShowContent = () => {
        const { lightboxRef } = this.state;
        //this.setState(prevState => ({ showContent: !prevState.showContent }));
        
        //lightboxRef.style.display = "block";
        
        document.getElementById("lightbox").append(...this.props.children);
        
        
        
        
    }
    
    
    
    render() {
        return (
            <div className="worked-on__button" onClick={this.toggleShowContent}>
                <b>See it</b>
            </div>
        )
    }
}