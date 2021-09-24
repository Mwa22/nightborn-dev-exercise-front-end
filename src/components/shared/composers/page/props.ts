import React from "react";

export interface PageProps extends React.HTMLProps<HTMLDivElement> {
	children?: React.ReactNode | React.ReactNodeArray | string;
}
