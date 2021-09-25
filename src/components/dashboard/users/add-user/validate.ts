import * as Yup from "yup";

export const validationAddUserSchema = Yup.object({
	first_name: Yup.string().required(),
	last_name: Yup.string().required(),
	email: Yup.string().email().required(),
	role: Yup.object().required().shape({
		label: Yup.string().required(),
		value: Yup.number().required(),
	}),
	password: Yup.string()
		.required()
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			"Password must contain at least 8 characters, one uppercase, one number and one special case character"
		),
	confirm_password: Yup.string()
		.required()
		.oneOf([Yup.ref("password"), null], "Passwords don't match."),
});
