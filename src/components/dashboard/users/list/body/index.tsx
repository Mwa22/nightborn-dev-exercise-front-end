import { useMemo, useState } from "react";
import { useGetAll } from "../../../../../services/users/users";
import Flex from "../../../../shared/composers/flex";
import UsersListActions from "./actions";
import UserField from "./user-field";

const UsersListBody = () => {
	//Attributes
	const { data: users } = useGetAll();

	const [search, setSearch] = useState<string>();

	const usersFilterd = useMemo(() => {
		if (!search || search === "") return users;

		return users?.filter(
			(user) =>
				user.first_name
					?.toLocaleLowerCase()
					?.includes(search.toLocaleLowerCase()) ||
				user.last_name
					?.toLocaleLowerCase()
					?.includes(search.toLocaleLowerCase())
		);
	}, [users, search]);

	//Render
	return (
		<Flex dir="col" className="w-full space-y-[3.1875rem]">
			<UsersListActions search={search} setSearch={setSearch} />
			<Flex className="flex-wrap gap-[1.875rem]">
				{usersFilterd?.map((user) => (
					<UserField key={`user_${user.ID}`} user={user} />
				))}
			</Flex>
		</Flex>
	);
};

export default UsersListBody;
