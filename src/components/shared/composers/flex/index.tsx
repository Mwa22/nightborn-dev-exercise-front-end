import { FlexProps } from "./props";

const Flex = ({
	children,
	className,
	dir = "row",
	justify = "start",
	align = "start",
	...rest
}: FlexProps) => {
	//Render
	return (
		<div
			className={`flex ${className}`}
			style={{
				flexDirection: dir === "col" ? "column" : dir,
				justifyContent:
					justify === "between" ? "space-between" : justify,
				alignItems: align,
			}}
			{...rest}
		>
			{children}
		</div>
	);
};

export default Flex;
