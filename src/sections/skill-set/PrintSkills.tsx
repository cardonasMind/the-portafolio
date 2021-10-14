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