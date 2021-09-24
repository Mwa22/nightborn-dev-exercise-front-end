import { FONT_SIZES, FONT_WEIGHT } from "../../../../../../constants/fonts";
import SearchField from "../../../../../all/fields/search-field";
import AddIcon from "../../../../../all/icons/add";
import Flex from "../../../../../shared/composers/flex";
import Text from "../../../../../shared/text";
import { UsersListActionsProps } from "./props";

const UsersListActions = ({
	search = "",
	setSearch,
}: UsersListActionsProps) => {
	//Render
	return (
		<Flex justify="between" align="center" className="w-full">
			<SearchField
				placeholder="Search for an user"
				name="search"
				value={search}
				setValue={setSearch}
			/>
			<Flex
				className="bg-white space-x-3 rounded-[1.125rem] shadow-t1 p-[.625rem] cursor-pointer"
				align="center"
				onClick={() => null} // TODO: navigate to add new user page
			>
				<Flex
					justify="center"
					align="center"
					className="w-[2.375rem] h-[2.375rem] bg-blue rounded-xl"
				>
					<AddIcon
						width="1.125rem"
						height="1.125rem"
						fill="#FFFFFF"
					/>
				</Flex>
				<Text size={FONT_SIZES.SMALL} weight={FONT_WEIGHT.MEDIUM}>
					add new user
				</Text>
			</Flex>
		</Flex>
	);
};

export default UsersListActions;
