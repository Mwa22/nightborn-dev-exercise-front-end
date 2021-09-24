import { useRouter } from "next/dist/client/router";
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
	//Attributes
	const router = useRouter();

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
				className="bg-white space-x-3 rounded-[1.125rem] shadow-t1 py-[.625rem] pl-[.625rem] pr-[2.0625rem] cursor-pointer"
				align="center"
				onClick={() => router.push("/users/add-user")}
			>
				<Flex
					justify="center"
					align="center"
					className="w-[2.375rem] h-[2.375rem] bg-blue rounded-xl"
				>
					<AddIcon
						width="18"
						height="18"
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
