import { ReactNode } from "react";

export interface TabButtonProps {
	selected: boolean;
	icon: (color: string) => ReactNode;
}
