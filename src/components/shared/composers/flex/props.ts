import React from "react";

export interface FlexProps extends React.HTMLProps<HTMLDivElement> {
	children?: React.ReactNode | React.ReactNodeArray | string;
	className?: string;
	dir?: "row" | "col";
	justify?: "center" | "between" | "start" | "end";
	align?: "center" | "start" | "end" | "stretch";
}
