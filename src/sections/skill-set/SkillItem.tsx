import React from "react";

interface ISkillItemProps { 
    icon: string,
    name: string,
    knowledge: number
}

const SkillItem = ({ icon, name, knowledge }: ISkillItemProps) => {
	switch(knowledge) {
		case 0: 
			return (
				<div className="flex space-x-2 items-center px-2 bg-blueSky">
					<img src={icon} className="w-8"/> <p>{name}</p>
				</div>
			);
			
		case 1: 
			return (
				<div className="flex space-x-2 items-center px-2 bg-militar">
					<img src={icon} className="w-8"/> <p>{name}</p>
				</div>
			);
			
		case 2: 
			return (
				<div className="flex space-x-2 items-center px-2 bg-terracotta">
					<img src={icon} className="w-8"/> <p>{name}</p>
				</div>
			);
			
		default:
			return null;
	}
	
    
}

export default SkillItem;