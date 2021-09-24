const AddIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.35714 18.3571V1.64286C9.35714 0.785714 10.6429 0.785714 10.6429 1.64286V18.3571C10.6429 19.2143 9.35714 19.2143 9.35714 18.3571ZM18.3571 10.6429H1.64286C0.785714 10.6429 0.785714 9.35714 1.64286 9.35714H18.3571C19.2143 9.35714 19.2143 10.6429 18.3571 10.6429Z"
				stroke={props.fill}
			/>
		</svg>
	);
};

export default AddIcon;
