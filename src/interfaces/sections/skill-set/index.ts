export interface IPrintSkillsProps {
	skillSetData: {
		title: string,
		skills: { ISkillItemProps }[]
	}[]
}

export interface ISkillItemProps {
	icon: string,
	name: string,
	knowledge: number
}