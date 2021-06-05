import { PureComponent, Fragment } from "react";
import { render } from "react-dom";

// Global styles
import "./index.css";

import Hero from"./sections/hero";
import AboutMe from "./sections/about-me";
import Social from "./sections/social";

class App extends PureComponent {
	render() {
		return (
			<Fragment>
                <Hero />
                <AboutMe />
                <Social />
			</Fragment>
		)
	}
}

render(<App />, document.getElementById('root'));
