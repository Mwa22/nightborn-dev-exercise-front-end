import { ReactNode } from "react";

export interface FormBoxProps {
	title: string;
	subtitle?: string;
	fields?: ReactNode[][];
}
