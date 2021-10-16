export default interface IProjectCardProps {
	readonly id: number;
	
	readonly image: string;
	readonly title: string;
	readonly short: string;
	readonly link: string;
	readonly breathing?: string;
	
	readonly repo: string,
	readonly technologies: string[];
	readonly content: JSX.Element;
	
	toggleShowLightbox: () => void;
	changeLightboxData: (index: number) => void;
}