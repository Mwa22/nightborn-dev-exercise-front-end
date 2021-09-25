import { useRouter } from "next/dist/client/router";
import React from "react";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../../constants/fonts";
import ArrowLeftIcon from "../../../../all/icons/arrow-left";
import PowerIcon from "../../../../all/icons/power";
import Flex from "../../../../shared/composers/flex";
import Text from "../../../../shared/text";
import { EditUserHeaderProps } from "./props";

const EditUserHeader = ({ user }: EditUserHeaderProps) => {
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
					Edit user
					{user?.first_name && user?.last_name
						? ` - ${user.first_name} ${user.last_name}`
						: ""}
				</Text>
			</Flex>
			<Flex className="space-x-[1.6875rem]" align="center">
				<Flex
					justify="center"
					align="center"
					className="w-[2.5625rem] h-[2.5625rem] bg-white shadow-t2 rounded-full"
				>
					<PowerIcon width="19.13" height="20.5" fill="#FF1C45" />
				</Flex>
				<button
					type="submit"
					className="cursor-pointer bg-green shadow-t1 rounded-xl px-12 h-12 w-[8.125rem] text-center"
				>
					<Text
						size={FONT_SIZES.SMALL}
						weight={FONT_WEIGHT.MEDIUM}
						color="white"
					>
						save
					</Text>
				</button>
			</Flex>
		</Flex>
	);
};

export default EditUserHeader;
