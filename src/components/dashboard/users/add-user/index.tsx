import { Form, Formik } from "formik";
import React from "react";
import Flex from "../../../shared/composers/flex";
import Page from "../../../shared/composers/page";
import TabBar from "../../tab-bar";
import AddUserBody from "./body";
import AddUserHeader from "./header";
import { AddUserFormik } from "./types";
import { validationAddUserSchema } from "./validate";

const AddUser = () => {
	//Render
	return (
		<Formik<AddUserFormik>
			initialValues={{
				first_name: "",
				last_name: "",
				email: "",
				role: "",
				password: "",
				confirm_password: "",
			}}
			validationSchema={validationAddUserSchema}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			<Page>
				<Flex className="h-full">
					<TabBar />
					<Form className="flex-grow h-full">
						<Flex
							dir="col"
							className="flex-grow h-full p-5 space-y-5"
						>
							<AddUserHeader />
							<AddUserBody />
						</Flex>
					</Form>
				</Flex>
			</Page>
		</Formik>
	);
};

export default AddUser;
