import React from "react";

import LightboxHeader from "./Header";

const Lightbox = ({ showLightbox, toggleShowLightbox, lightboxData }) => {
	const { repo, technologies, content } = lightboxData; 
	
	return (
		<div id="lightbox" style={{ display: showLightbox ? "block" : "none" }} className="mb-24">
			<LightboxHeader toggleShowLightbox={toggleShowLightbox} repo={repo} technologies={technologies} />
			{content}
        </div>
	);
}

export default Lightbox;