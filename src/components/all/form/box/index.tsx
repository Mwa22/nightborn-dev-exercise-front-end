import { Fragment } from "react";
import { FONT_WEIGHT } from "../../../../constants/fonts";
import Flex from "../../../shared/composers/flex";
import Text from "../../../shared/text";
import { FormBoxProps } from "./props";

const FormBox = ({ title, subtitle, fields }: FormBoxProps) => {
	//Render
	return (
		<Flex dir="col" className="space-y-8">
			<Flex dir="col" className="space-y-[1.4375rem]">
				<Text size={17} weight={FONT_WEIGHT.BOLD}>
					{title}
				</Text>
				{!!subtitle && (
					<Text
						size={13}
						weight={FONT_WEIGHT.LIGHT}
						className="max-w-[20.3125rem]"
					>
						{subtitle}
					</Text>
				)}
			</Flex>
			<Flex dir="col" className="space-y-8">
				{fields?.map((row, index) => (
					<Flex
						key={`field_row_${index}`}
						className="space-x-[6.75rem]"
					>
						{row?.map((field, index2) => (
							<Fragment key={`field_${index2}`}>{field}</Fragment>
						))}
					</Flex>
				))}
			</Flex>
		</Flex>
	);
};

export default FormBox;
