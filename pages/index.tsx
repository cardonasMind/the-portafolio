import { PureComponent, Fragment } from "react";

import Principal from "..src/sections/principal";
import SkillSet from "..src/sections/skill-set";
import WorkedOn from "..src/sections/worked-on";
import Social from "..src/sections/social";

export default class extends PureComponent {
  render() {
    return (
      <Fragment>
        <Principal />
        <SkillSet />
        <WorkedOn />
        <Social />
      </Fragment>
    );
  }
}
