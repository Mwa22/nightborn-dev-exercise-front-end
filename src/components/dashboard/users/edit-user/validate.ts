import * as Yup from "yup";

export const validationEditUserSchema = Yup.object({
	first_name: Yup.string().optional(),
	last_name: Yup.string().optional(),
	email: Yup.string().email().optional(),
	role: Yup.array()
		.of(
			Yup.object().shape({
				label: Yup.string().required(),
				value: Yup.number().required(),
			})
		)
		.optional(),
	password: Yup.string()
		.optional()
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			"Password must contain at least 8 characters, one uppercase, one number and one special case character"
		),
	confirm_password: Yup.string()
		.optional()
		.oneOf([Yup.ref("password"), null], "Passwords don't match."),
});
