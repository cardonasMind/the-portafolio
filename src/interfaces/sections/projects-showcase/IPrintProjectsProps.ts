import IProjectCardProps from "./IProjectCardProps";

export default interface IPrintProjectsProps {
    readonly projectsData: IProjectCardProps[];
	toggleShowLightbox: () => void;
	changeLightboxContent: (content: JSX.Element) => void;
}