import { Dispatch, SetStateAction } from "react";

export interface UsersListActionsProps {
	search?: string;
	setSearch: Dispatch<SetStateAction<string | undefined>>;
}
