import IProjectCardProps from "./IProjectCardProps";

export default interface IPrintProjectsProps {
    readonly projectsData: IProjectCardProps[];
	toggleShowLightbox: any;
	changeLightboxContent: any;
}