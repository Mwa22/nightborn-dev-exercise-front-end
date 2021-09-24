import * as Yup from "yup";

export const validationAddUserSchema = Yup.object({
	first_name: Yup.string().required(),
	last_name: Yup.string().required(),
	email: Yup.string().email().required(),
	role: Yup.array()
		.of(
			Yup.object().shape({
				label: Yup.string().required(),
				value: Yup.number().required(),
			})
		)
		.required(),
	password: Yup.string().required(),
	confirm_password: Yup.string().required(),
});
