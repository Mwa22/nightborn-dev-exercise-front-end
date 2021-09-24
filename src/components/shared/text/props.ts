import { ReactNode, ReactNodeArray } from "react";

export interface TextProps {
	children?: ReactNode | ReactNodeArray | string;
	className?: string;
	size?: number;
	weight?: number;
	color?: string;
}
