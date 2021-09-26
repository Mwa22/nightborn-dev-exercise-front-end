import * as Yup from "yup";
import { Role } from "../../../../types/dtos";

export const validationEditUserSchema = Yup.object({
	first_name: Yup.string().optional(),
	last_name: Yup.string().optional(),
	email: Yup.string().email().optional(),
	role: Yup.string().oneOf(Object.values(Role)).optional(),
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
