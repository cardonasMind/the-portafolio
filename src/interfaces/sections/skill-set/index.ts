export interface ISkillItemProps {
	icon: string,
	name: string,
	knowledge: number
}

export interface IPrintSkillsProps {
	skillSetData: {
		title: string,
		skills: { ISkillItemProps }[]
	}[]
}