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
								width="1.600625rem"
								height="1.3125rem"
							/>
						)}
					/>
					<TabButton
						selected={true}
						icon={(color) => (
							<UserIcon
								fill={color}
								width="1.604375rem"
								height="1.604375rem"
							/>
						)}
					/>
					<TabButton
						selected={false}
						icon={(color) => (
							<SettingsIcon
								fill={color}
								width="1.75rem"
								height="1.75rem"
							/>
						)}
					/>
					<TabButton
						selected={false}
						icon={(color) => (
							<MoneyIcon
								fill={color}
								width="1.66125rem"
								height="1.510625rem"
							/>
						)}
					/>
				</Flex>
			</Flex>

			<TabButton
				selected={false}
				icon={(color) => (
					<SignOutIcon
						fill={color}
						width="1.705rem"
						height="1.625rem"
					/>
				)}
			/>
		</Flex>
	);
};

export default TabBar;
