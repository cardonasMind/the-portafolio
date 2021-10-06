import react from "react";

const SocialSection = () => (
	<div id="social" className="py-2 border border-black bg-gradient-to-r from-blue-400 to-purple-900 text-white flex align-center justify-center">
		<a id="social__github" href="https://github.com/cardonasmind" target="_blank" className="grid justify-items-center">
			<img src="/static/icons/github.svg" /> 
			<p>Github</p>
		</a>
	</div>
);

export default SocialSection;