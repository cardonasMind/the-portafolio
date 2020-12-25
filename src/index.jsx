import { PureComponent, Fragment } from "react";
import { render } from "react-dom";

// Global styles
import "./index.css";

import Hero from"./sections/hero";
import WorkedOn from "./sections/worked-on";
import Social from "./sections/social";

class App extends PureComponent {
	render() {
		return (
			<Fragment>
                <Hero />
                <WorkedOn />
                <Social />
			</Fragment>
		)
	}
}

render(<App />, document.getElementById('root'));