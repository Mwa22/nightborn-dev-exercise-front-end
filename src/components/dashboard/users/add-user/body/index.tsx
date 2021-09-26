import React, { useMemo } from "react";
import { Role } from "../../../../../types/dtos";
import InputField from "../../../../all/fields/input-field";
import SelectField from "../../../../all/fields/select-field";
import FormBox from "../../../../all/form/box";
import FieldLabel from "../../../../all/form/field-label";
import Flex from "../../../../shared/composers/flex";

const AddUserBody = () => {
	//Attributes
	const userFields = useMemo(
		() => [
			[
				<FieldLabel label="First name">
					<InputField
						type="text"
						name="first_name"
						placeholder="insert first name"
					/>
				</FieldLabel>,
				<FieldLabel label="Last name">
					<InputField
						type="text"
						name="last_name"
						placeholder="insert last name"
					/>
				</FieldLabel>,
				<FieldLabel label="Email">
					<InputField
						type="text"
						name="email"
						placeholder="insert email address"
					/>
				</FieldLabel>,
			],
			[
				<FieldLabel label="Role">
					<SelectField
						name="role"
						placeholder="select role"
						options={[
							{
								label: "Administrator",
								value: Role.Administrator,
							},
							{ label: "Regular user", value: Role.RegularUser },
						]}
					/>
				</FieldLabel>,
			],
		],
		[]
	);
	const passwordFields = useMemo(
		() => [
			[
				<FieldLabel label="Password">
					<InputField
						type="password"
						name="password"
						placeholder="insert password"
					/>
				</FieldLabel>,
				<FieldLabel label="Confirm password">
					<InputField
						type="password"
						name="confirm_password"
						placeholder="confirm password"
					/>
				</FieldLabel>,
			],
		],
		[]
	);

	//Render
	return (
		<Flex
			dir="col"
			className="flex-grow w-full bg-white shadow-t1 rounded-xl px-[3.25rem] py-[3.125rem] space-y-[4.625rem]"
		>
			<FormBox title="User information" fields={userFields} />
			<FormBox
				title="Password"
				subtitle="Password must contain at least 8 characters including : 1 Capital / 1 number / 1 special special characters"
				fields={passwordFields}
			/>
		</Flex>
	);
};

export default AddUserBody;
