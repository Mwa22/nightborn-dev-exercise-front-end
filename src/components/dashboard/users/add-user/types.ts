import { Role } from "../../../../types/dtos";

export interface AddUserFormik {
	first_name: string;
	last_name: string;
	email: string;
	role: Role;
	password: string;
	confirm_password: string;
}
