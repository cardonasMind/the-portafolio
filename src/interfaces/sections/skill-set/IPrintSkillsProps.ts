import ISkillItemProps from "./ISkillItemProps";

export default interface IPrintSkillsProps {
	skillSetData: {
		title: string,
		skills: { ISkillItemProps }[]
	}[]
}