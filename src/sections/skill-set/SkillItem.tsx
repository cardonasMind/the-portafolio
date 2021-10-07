import React from "react";

interface ISkillItemProps { 
    icon: string,
    name: string,
    knowledge: number
}

const SkillItem = ({ icon, name, knowledge }: ISkillItemProps) => {
    return (
        <div className="inline-block bg-yellow-400 m-4 skill-set__item skill-set__item_intermedium">
			<img src={icon} className="w-8"/> <p>{name}</p>
		</div>
    );
}

export default SkillItem;