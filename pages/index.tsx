import { PureComponent, Fragment } from "react";

import { Principal, SkillSet, WorkedOn, Social } from "../src/sections";

export default class extends PureComponent {
	render() {
		return (
			<Fragment>
				<Principal />
				<SkillSet />
				<Social />
			</Fragment>
		);
	}
}
