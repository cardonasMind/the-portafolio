import React, { Fragment } from "react";

import SkillItem from "./SkillItem";

interface IPrintSkillsProps {
    skillSetData: { 
        title: string, 
        skills: { icon: string, name: string, knowledge: number }[] 
    }[]
}

const PrintSkills = (props: IPrintSkillsProps) => {
    const { skillSetData } = props;

    return (
        <Fragment>
            {
                skillSetData.map((group, index) => 
                    <div key={index} className="border border-black p-2 m-4 skill-set__cards-group">
                        <p>{group.title}</p>
                                    
                        <div className="skill-set__group-items">
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