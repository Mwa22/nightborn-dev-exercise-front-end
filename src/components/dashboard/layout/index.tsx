import React from "react";
import Flex from "../../shared/composers/flex";
import Page from "../../shared/composers/page";
import TabBar from "../tab-bar";
import { LayoutProps } from "./props";

const Layout = ({ children }: LayoutProps) => {
	return (
		<Page>
			<Flex className="h-full">
				<TabBar />
				{children}
			</Flex>
		</Page>
	);
};

export default Layout;
