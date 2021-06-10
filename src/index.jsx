import { PureComponent, Fragment } from "react";
import { render } from "react-dom";

// Global styles
import "./index.css";

import Principal from"./sections/principal";
import SkillSet from "./sections/skill-set";
import WorkedOn from "./sections/worked-on";
import Social from "./sections/social";

class App extends PureComponent {
	render() {
		return (
			<Fragment>
                <Principal />
                <SkillSet />
                <WorkedOn />
                <Social />
			</Fragment>
		)
	}
}

render(<App />, document.getElementById('root'));
