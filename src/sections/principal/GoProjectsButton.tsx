import React from "react";

const GoProjectsButton = () => {
	const handleButton = () => {
		document.getElementById("projects").scrollIntoView(); //Not sure about this because Refs exists in React
	}
	
	return (
		<div className="flex justify-center">
			<p className="p-2 mt-2 border border-black cursor-pointer hover:bg-yellow-200" onClick={handleButton}>Go to Projects Showcase</p>
		</div>
	);
}

export default GoProjectsButton;