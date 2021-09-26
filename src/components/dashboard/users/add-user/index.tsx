import { Form, Formik } from "formik";
import React from "react";
import { useAddUser } from "../../../../services/users/users";
import { Role, User } from "../../../../types/dtos";
import Flex from "../../../shared/composers/flex";
import AddUserBody from "./body";
import AddUserHeader from "./header";
import { AddUserFormik } from "./types";
import { validationAddUserSchema } from "./validate";

const AddUser = () => {
	//Attributes
	const { mutate: addUser } = useAddUser();

	//Render
	return (
		<Formik<AddUserFormik>
			initialValues={{
				first_name: "",
				last_name: "",
				email: "",
				role: Role.RegularUser,
				password: "",
				confirm_password: "",
			}}
			validationSchema={validationAddUserSchema}
			onSubmit={(values) => {
				const newUser: User = {
					first_name: values.first_name,
					last_name: values.last_name,
					email: values.email,
					role: values.role,
					password: values.password,
				};

				addUser({
					data: newUser,
				});
			}}
		>
			<Form className="flex-grow h-full">
				<Flex dir="col" className="flex-grow h-full p-5 space-y-5">
					<AddUserHeader />
					<AddUserBody />
				</Flex>
			</Form>
		</Formik>
	);
};

export default AddUser;
