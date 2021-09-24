import React, { useRef, useState } from "react";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/fonts";
import Flex from "../../../shared/composers/flex";
import GlassIcon from "../../icons/glass";
import { SearchFieldProps } from "./props";

const SearchField = ({
	placeholder,
	name,
	value,
	setValue,
}: SearchFieldProps) => {
	//Attributes
	const ref = useRef<HTMLInputElement>(null);
	const [focused, setFocused] = useState<boolean>(false);

	//Render
	return (
		<Flex
			align="center"
			className={`bg-white rounded-[1.125rem] shadow-t1 w-[20rem] h-[3.625rem] px-[1.3125rem] py-[1.125rem] cursor-text border-2 ${
				focused ? "border-blue" : "border-white"
			}`}
			onClick={() => ref?.current?.focus()}
		>
			<GlassIcon width="1.37625rem" height="1.37625rem" color="#000000" />
			<input
				ref={ref}
				className="ml-[1.06125rem] w-full focus:outline-none"
				name={name}
				value={value}
				onChange={({ target }) => setValue(target.value)}
				placeholder={placeholder}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				style={{
					fontSize: FONT_SIZES.SMALL,
					fontWeight: FONT_WEIGHT.MEDIUM,
				}}
			></input>
		</Flex>
	);
};

export default SearchField;
