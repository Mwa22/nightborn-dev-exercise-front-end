import React from "react";
import Flex from "../../shared/composers/flex";
import Image from "next/image";
import TabButton from "./tab-button";
import ClientsIcon from "../../all/icons/clients";
import UserIcon from "../../all/icons/user";
import SettingsIcon from "../../all/icons/settings";
import MoneyIcon from "../../all/icons/money";
import SignOutIcon from "../../all/icons/sign-out";

const TabBar = () => {
	//Render
	return (
		<Flex
			dir="col"
			justify="between"
			align="center"
			className="bg-white min-w-[6.25rem] h-full pt-8 pb-[3.125rem]"
		>
			<Flex dir="col" className="space-y-[53px]">
				<Flex className="w-12 h-12">
					<Image
						src={"/images/app-icon.png"}
						alt="App icon"
						width="48"
						height="48"
					/>
				</Flex>
				<Flex dir="col" className="space-y-12">
					<TabButton
						selected={false}
						icon={(color) => (
							<ClientsIcon
								fill={color}
								width="25.61"
								height="21"
							/>
						)}
					/>
					<TabButton
						selected={true}
						icon={(color) => (
							<UserIcon
								fill={color}
								width="25.67"
								height="25.67"
							/>
						)}
					/>
					<TabButton
						selected={false}
						icon={(color) => (
							<SettingsIcon fill={color} width="28" height="28" />
						)}
					/>
					<TabButton
						selected={false}
						icon={(color) => (
							<MoneyIcon
								fill={color}
								width="26.58"
								height="24.17"
							/>
						)}
					/>
				</Flex>
			</Flex>

			<TabButton
				selected={false}
				icon={(color) => (
					<SignOutIcon fill={color} width="27.28" height="26px" />
				)}
			/>
		</Flex>
	);
};

export default TabBar;
