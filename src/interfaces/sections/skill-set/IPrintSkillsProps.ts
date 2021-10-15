import ISkillItemProps from "./ISkillItemProps";

export default interface IPrintSkillsProps {
	skillSetData: {
		readonly title: string;
		readonly skills: ISkillItemProps[]
	}[]
}