type FontProps = {
	family?: string;
	weight?: number;
	lineHeight?: string;
	Fmin?: number;
	Fmax?: number;
};

export const font = ({ family, weight, Fmin, Fmax, lineHeight }: FontProps) =>
	`
  font-family: ${
		family ||
		"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
	};
  font-weight: ${weight || 400};
  line-height: ${lineHeight || 1.2};
  font-size: calc((100vw - 365px) / (1920 - 365) * (${Fmax} - ${Fmin}) + ${Fmin}px);
  `;
