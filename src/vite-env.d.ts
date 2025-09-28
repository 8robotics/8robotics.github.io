declare namespace JSX {
	interface IntrinsicElements {
			'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
				src?: string;
				alt?: string;
				'auto-rotate'?: boolean;
				'camera-controls'?: boolean;
				style?: React.CSSProperties;
				'shadow-intensity'?: string | number;
				exposure?: string | number;
				'environment-image'?: string;
			};
	}
}
/// <reference types="vite/client" />
