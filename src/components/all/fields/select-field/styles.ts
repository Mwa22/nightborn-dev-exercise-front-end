import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/fonts";

export const customStyles: any = (hasError: boolean) => {
	return {
		control: (provided: any, state: any) => ({
			...provided,
			minHeight: "48px",
			width: "278px",
			borderRaduis: "4px",
			boxShadow: "none",
			border: state.menuIsOpen
				? "2px solid #3E6BEC"
				: hasError
				? "2px solid rgba(239, 68, 68)"
				: "2px solid rgba(143, 146, 161, 0.2)",
			cursor: "pointer",
			"&:hover": {},
		}),
		valueContainer: (provided: any, state: any) => ({
			...provided,
			paddingLeft: "15px",
		}),
		input: (provided: any, state: any) => ({
			...provided,
			color: "#1E1F20",
		}),
		menu: (provided: any, state: any) => ({
			backgroundColor: "white",
			position: "absolute",
			width: "100%",
			zIndex: 20,
			border: "2px solid rgba(143, 146, 161, 0.2)",
		}),
		option: (provided: any, state: any) => ({
			...provided,
			cursor: "pointer",
			backgroundColor: state.isSelected ? "#3E6BEC" : "white",
		}),
		placeholder: (provided: any, state: any) => ({
			...provided,
			color: "#7F85A2",
			fontSize: FONT_SIZES.SMALL,
			fontWeight: FONT_WEIGHT.LIGHT,
		}),
		indicatorSeparator: () => {},
		dropdownIndicator: (provided: any) => ({
			...provided,
			paddingRight: "20px",
		}),
	};
};
