import { FONT_SIZES, FONT_WEIGHT } from "../../../constants/fonts";
import { TextProps } from "./props";

const Text = ({
	children,
	className,
	size = FONT_SIZES.REGULAR,
	weight = FONT_WEIGHT.REGULAR,
	color = "#1E1F20",
}: TextProps) => {
	//Render
	return (
		<span
			style={{ fontSize: size, fontWeight: weight, color: color }}
			className={className}
		>
			{children}
		</span>
	);
};

export default Text;
