import { FONT_SIZES, FONT_WEIGHT } from "../../../../../../constants/fonts";
import ArrowRightIcon from "../../../../../all/icons/arrow-right";
import Flex from "../../../../../shared/composers/flex";
import Text from "../../../../../shared/text";
import { UserFieldProps } from "./props";

const UserField = ({ user }: UserFieldProps) => {
	//Render
	return (
		<Flex
			justify="between"
			align="center"
			className="bg-white w-[20.625rem] h-[5.25rem] rounded-xl py-[1.375rem] pl-7 pr-[1.875rem] shadow-t1"
		>
			<Flex dir="col">
				<Text size={18} weight={FONT_WEIGHT.SEMI_BOLD}>
					{user?.first_name && user?.last_name
						? `${user.first_name} ${user.last_name}`
						: ""}
				</Text>
				<Text size={FONT_SIZES.EXTRA_SMALL}>{user?.role}</Text>
			</Flex>
			<Flex
				justify="center"
				align="center"
				className="bg-orange rounded-full cursor-pointer w-6 h-6"
				onClick={() => null} // TODO: Navigate to edit user page
			>
				<ArrowRightIcon width=".7rem" height=".6rem" fill="#FFFFFF" />
			</Flex>
		</Flex>
	);
};

export default UserField;
