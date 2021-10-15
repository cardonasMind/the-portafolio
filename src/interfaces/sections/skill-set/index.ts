interface ISkillItemProps {
	icon: string,
	name: string,
	knowledge: number
}

interface IPrintSkillsProps {
	skillSetData: {
		title: string,
		skills: { ISkillItemProps }[]
	}[]
}

export { ISkillItemProps, IPrintSkillsProps }; 