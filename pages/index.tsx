import { PureComponent, Fragment } from "react";

import { Principal, SkillSet, ProjectsShowcase, Social } from "../src/sections";

export default class extends PureComponent {
	render() {
		return (
			<Fragment>
				<Principal />
				<SkillSet />
				<ProjectsShowcase />
				<Social />
			</Fragment>
		);
	}
}
