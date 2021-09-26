import React from "react";
import { SelectFieldProps } from "./props";
import Select, { components } from "react-select";
import { useField, useFormikContext } from "formik";
import ArrowDownIcon from "../../icons/arrow-down";
import Text from "../../../shared/text";
import { FONT_SIZES } from "../../../../constants/fonts";
import { customStyles } from "./styles";

// Dropdown button
const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<ArrowDownIcon
					fill="#7F85A2"
					height="7"
					width="14"
					className={
						props.selectProps.menuIsOpen
							? "rotate-180 transform"
							: ""
					}
				/>
			</components.DropdownIndicator>
		)
	);
};

const NoOptionsMessage = (props: any) => {
	return (
		<components.NoOptionsMessage {...props}>
			<Text size={FONT_SIZES.EXTRA_SMALL} color="#7F85A2">
				No result found
			</Text>
		</components.NoOptionsMessage>
	);
};

const SelectField = ({ name, options, placeholder }: SelectFieldProps) => {
	//Attributes
	const [field, meta] = useField(name);
	const { setFieldValue } = useFormikContext<any>();

	//Render
	return (
		<Select
			styles={customStyles(meta.touched && meta.error)}
			placeholder={placeholder}
			options={options}
			components={{
				DropdownIndicator,
				NoOptionsMessage,
			}}
			value={
				options?.find((option: any) => option.value === field.value) ??
				""
			}
			onChange={(option: any) => setFieldValue(field.name, option.value)}
		/>
	);
};

export default SelectField;
