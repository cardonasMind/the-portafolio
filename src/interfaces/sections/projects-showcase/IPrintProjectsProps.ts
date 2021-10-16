import IProjectCardProps from "./IProjectCardProps";

export default interface IPrintProjectsProps {
    readonly projectsData: IProjectCardProps[];
	toggleShowLightbox: () => void;
	changeLightboxData: (index: number) => void;
}