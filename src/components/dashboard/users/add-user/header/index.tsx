import { useRouter } from "next/dist/client/router";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../../constants/fonts";
import ArrowLeftIcon from "../../../../all/icons/arrow-left";
import Flex from "../../../../shared/composers/flex";
import Text from "../../../../shared/text";

const AddUserHeader = () => {
	//Attributes
	const router = useRouter();

	//Render
	return (
		<Flex
			justify="between"
			align="center"
			className="h-[6.8125rem] w-full rounded-xl shadow-t1 bg-white py-[1.875rem] pl-[2.5rem] pr-[1.875rem]"
		>
			<Flex align="center" className="space-x-[2.3125rem]">
				<Flex
					justify="center"
					align="center"
					className="w-[2.375rem] h-[2.375rem] bg-orange rounded-full cursor-pointer"
					onClick={() => router.back()}
				>
					<ArrowLeftIcon width="17.73" height="15.2" fill="#FFFFFF" />
				</Flex>
				<Text size={FONT_SIZES.EXTRA_BIG} weight={FONT_WEIGHT.BOLD}>
					Add new user
				</Text>
			</Flex>
			<Flex
				justify="center"
				align="center"
				className="cursor-pointer bg-green shadow-t1 rounded-xl px-4 py-[.875rem]"
				onClick={() => null} // TODO: save data
			>
				<Text
					size={FONT_SIZES.SMALL}
					weight={FONT_WEIGHT.MEDIUM}
					color="white"
				>
					save and add
				</Text>
			</Flex>
		</Flex>
	);
};

export default AddUserHeader;
