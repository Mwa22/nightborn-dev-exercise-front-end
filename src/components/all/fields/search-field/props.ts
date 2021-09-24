import { HTMLProps, Dispatch, SetStateAction } from "react";

export interface SearchFieldProps extends HTMLProps<HTMLInputElement> {
	placeholder?: string;
	name: string;
	value?: string;
	setValue: Dispatch<SetStateAction<string | undefined>>;
}
