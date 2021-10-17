export default interface IProjectCardProps {
	id: number;
	
	image: string;
	title: string;
	short: string;
	link: string;
	breathing?: string;
	
	toggleShowLightbox: () => void;
	changeLightboxData: (index: number) => void;
}