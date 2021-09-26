import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import React, { Fragment } from "react";
import {
	useGetUserById,
	useUpdateUser,
} from "../../../../services/users/users";
import { Role, UpdateUserInput } from "../../../../types/dtos";
import Flex from "../../../shared/composers/flex";
import EditUserBody from "./body";
import EditUserHeader from "./header";
import { EditUserFormik } from "./types";
import { validationEditUserSchema } from "./validate";

const EditUser = () => {
	//Attributes
	const router = useRouter();
	const { id } = router.query;

	const {
		data: user,
		isLoading,
		refetch,
	} = useGetUserById(id?.toString() ?? "", {
		query: { enabled: !!id },
	});
	const { mutateAsync: updateUser } = useUpdateUser();

	if (isLoading) return <Fragment />;

	//Render
	return (
		<Formik<EditUserFormik>
			initialValues={{
				first_name: user?.first_name ?? "",
				last_name: user?.last_name ?? "",
				email: user?.email ?? "",
				role: user?.role ?? Role.RegularUser,
				password: "",
				confirm_password: "",
			}}
			validationSchema={validationEditUserSchema}
			onSubmit={async (values) => {
				const newUser: UpdateUserInput = {
					first_name: values.first_name,
					last_name: values.last_name,
					email: values.email,
					role: values.role,
				};

				if (
					values.password &&
					values.confirm_password &&
					values.password !== "" &&
					values.confirm_password !== ""
				) {
					newUser.password = values.password;
				}

				try {
					await updateUser({
						id: Array.isArray(id) ? id[0] : id ?? "",
						data: newUser,
					});

					refetch();
				} catch (err) {}
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
