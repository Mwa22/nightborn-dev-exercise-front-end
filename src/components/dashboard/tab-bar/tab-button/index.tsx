import Flex from "../../../shared/composers/flex";
import { TabButtonProps } from "./props";

const TabButton = ({ selected, icon }: TabButtonProps) => {
	//Render
	return (
		<Flex
			justify="center"
			align="center"
			className={`rounded-xl w-12 h-12 ${
				selected ? "bg-blue" : "bg-gray"
			}`}
		>
			{icon(selected ? "#FFFFFF" : "#A4A8BB")}
		</Flex>
	);
};

export default TabButton;
