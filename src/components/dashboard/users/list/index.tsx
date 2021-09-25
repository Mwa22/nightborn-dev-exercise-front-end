import React from "react";
import Flex from "../../../shared/composers/flex";
import Page from "../../../shared/composers/page";
import TabBar from "../../tab-bar";
import UsersListBody from "./body";
import UsersListHeader from "./header";

const UsersList = () => {
	//Render
	return (
		<Flex className="flex-grow mx-[9.0625rem] my-[3.75rem]">
			<Flex dir="col" className="w-full space-y-[2.3125rem]">
				<UsersListHeader />
				<UsersListBody />
			</Flex>
		</Flex>
	);
};

export default UsersList;
