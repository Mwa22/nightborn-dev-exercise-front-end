import { Form, Formik } from "formik";
import React from "react";
import Flex from "../../../shared/composers/flex";
import Page from "../../../shared/composers/page";
import TabBar from "../../tab-bar";
import EditUserBody from "./body";
import EditUserHeader from "./header";
import { EditUserFormik } from "./types";
import { validationEditUserSchema } from "./validate";

const EditUser = () => {
	//Attributes
	// TODO: Get data from back-end
	const user = {
		id: "0",
		first_name: "Lisa",
		last_name: " De Groof",
		email: "lisa@luminecapital.com",
		role: "Regular user",
	};

	//Render
	return (
		<Formik<EditUserFormik>
			initialValues={{
				first_name: user?.first_name,
				last_name: user?.last_name,
				email: user?.email,
				role: user?.role,
				password: "",
				confirm_password: "",
			}}
			validationSchema={validationEditUserSchema}
			onSubmit={(values) => {
				console.log(values); // TODO: handle data
			}}
		>
			<Form className="flex-grow h-full">
				<Flex dir="col" className="flex-grow h-full p-5 space-y-5">
					<EditUserHeader user={user} />
					<EditUserBody />
				</Flex>
			</Form>
		</Formik>
	);
};

export default EditUser;
