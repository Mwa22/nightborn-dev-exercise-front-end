import { Field, useField } from "formik";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/fonts";
import { InputFieldProps } from "./props";

const InputField = ({ name, placeholder, type }: InputFieldProps) => {
	//Attributes
	const [_, meta] = useField(name);

	//Render
	return (
		<Field
			type={type}
			className={`border-2 ${
				meta.touched && meta.error
					? "border-red-500"
					: "border-[#8F92A1] border-opacity-20"
			} focus:border-blue focus:border-opacity-100 focus:outline-none w-[17.375rem] h-12 px-[.9375rem] py-[.875rem]`}
			style={{
				fontSize: FONT_SIZES.SMALL,
				fontWeight: FONT_WEIGHT.LIGHT,
			}}
			name={name}
			placeholder={placeholder}
		/>
	);
};

export default InputField;
