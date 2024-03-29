import React, { Fragment } from "react";

import { IPrintSkillsProps } from "../../interfaces/sections/skill-set";

import SkillItem from "./SkillItem";

const PrintSkills = (props: IPrintSkillsProps) => {
    const { skillSetData } = props;

    return (
        <Fragment>
            {
                skillSetData.map((group, index) => 
                    <div key={index} className="border border-black">
                        <p className="border-b border-black pl-4 bg-blue-50">{group.title}</p>
                                    
                        <div className="flex flex-wrap gap-4 p-4">
                            {
                                group.skills.map((skill, index) => 
                                    <SkillItem key={index} {...skill} />
                                )
                            }
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}

export default PrintSkills;