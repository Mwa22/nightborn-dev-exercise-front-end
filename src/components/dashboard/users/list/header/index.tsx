import { FONT_SIZES, FONT_WEIGHT } from "../../../../../constants/fonts";
import Text from "../../../../shared/text";

const UsersListHeader = () => {
	//Render
	return (
		<Text size={FONT_SIZES.EXTRA_BIG} weight={FONT_WEIGHT.BOLD}>
			Our Users
		</Text>
	);
};

export default UsersListHeader;
