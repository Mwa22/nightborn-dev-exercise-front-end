import { HTMLProps } from "react";

export interface SelectFieldProps extends HTMLProps<HTMLSelectElement> {
	name: string;
	options: { label: string; value: any }[];
}
