import { PureComponent, Fragment } from "react";
import { render } from "react-dom";

// Global styles
import "./index.css";

import Hero from"./sections/hero";
import LookingFor from "./sections/looking-for";
import SkillSet from "./sections/skill-set"
import WorkedOn from "./sections/worked-on";
import Social from "./sections/social";

class App extends PureComponent {
	render() {
		return (
			<Fragment>
                <Hero />
                <LookingFor />
                <SkillSet />
                <WorkedOn />
                <Social />
			</Fragment>
		)
	}
}

render(<App />, document.getElementById('root'));
