import { useMemo } from "react";
import { FlexProps } from "./props";

const Flex = ({
	children,
	className,
	dir = "row",
	justify = "start",
	align = "start",
}: FlexProps) => {
	//Attributes
	const dirRender = dir === "row" ? "flex-row" : "flex-col";

	const justifyRender = useMemo(() => {
		switch (justify) {
			case "start":
				return "justify-start";
			case "end":
				return "justify-end";
			case "center":
				return "justify-center";
			case "between":
				return "justify-between";
		}
	}, [justify]);

	const alignRender = useMemo(() => {
		switch (align) {
			case "start":
				return "items-start";
			case "end":
				return "items-end";
			case "center":
				return "items-center";
			case "stretch":
				return "items-stretch";
		}
	}, [align]);

	//Render
	return (
		<div
			className={`flex ${dirRender} ${justifyRender} ${alignRender} ${className}`}
		>
			{children}
		</div>
	);
};

export default Flex;
