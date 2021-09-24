import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/fonts";
import Flex from "../../../shared/composers/flex";
import Text from "../../../shared/text";
import { FieldLabelProps } from "./props";

const FieldLabel = ({ label, children }: FieldLabelProps) => {
	//Render
	return (
		<Flex dir="col" className="space-y-2">
			<Text
				size={FONT_SIZES.EXTRA_SMALL}
				weight={FONT_WEIGHT.SEMI_BOLD}
				color="#9FA3B9"
				className="tracking-[.0625rem] uppercase"
			>
				{label}
			</Text>
			{children}
		</Flex>
	);
};

export default FieldLabel;
