export interface EditUserFormik {
	first_name: string;
	last_name: string;
	email: string;
	role: Role;
	password: string;
	confirm_password: string;
}

// TODO: get Role enum from back-end
export enum Role {
	Administrator = 0,
	RegularUser,
}
