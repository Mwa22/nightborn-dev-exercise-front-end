import { useMemo, useState } from "react";
import Flex from "../../../../shared/composers/flex";
import UsersListActions from "./actions";
import UserField from "./user-field";

const UsersListBody = () => {
	//Attributes
	// TODO: get from back-end
	const users = [
		{
			id: "0",
			first_name: "David",
			last_name: "Leclerq",
			role: "Administrator",
		},
		{
			id: "1",
			first_name: "Matthieu",
			last_name: "Bocquet",
			role: "Administrator",
		},
		{
			id: "2",
			first_name: "Sharon",
			last_name: "Dupont",
			role: "Regular user",
		},
		{
			id: "3",
			first_name: "Lisa",
			last_name: "De Groof",
			role: "Regular user",
		},
	];

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
					<UserField key={`user_${user.id}`} user={user} />
				))}
			</Flex>
		</Flex>
	);
};

export default UsersListBody;
