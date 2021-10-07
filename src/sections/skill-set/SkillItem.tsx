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
				<div className="flex space-x-2 px-2 bg-gradient-to-r from-gray-400 to-blue-200">
					<img src={icon} className="w-8"/> <p>{name}</p>
				</div>
			);
			
		case 1: 
			return (
				<div className="flex space-x-2 px-2 bg-gradient-to-r from-blue-200 to-yellow-400">
					<img src={icon} className="w-8"/> <p>{name}</p>
				</div>
			);
			
		case 2: 
			return (
				<div className="flex space-x-2 px-2 bg-gradient-to-r from-yellow-400 to-yellow-600">
					<img src={icon} className="w-8"/> <p>{name}</p>
				</div>
			);
	}
	
    
}

export default SkillItem;

/*
BASIC from-gray-400 to-blue-200
INTERMEDIUM from-blue-400 to-purple-400
ADVANCED
*/