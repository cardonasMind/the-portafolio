export default interface IProjectCardProps {
	readonly image: string;
	readonly title: string;
	readonly short: string;
	readonly link: string;
	readonly content: JSX.Element;
	readonly breathing?: string;
	toggleShowLightbox: any;
	changeLightboxContent: any;
}