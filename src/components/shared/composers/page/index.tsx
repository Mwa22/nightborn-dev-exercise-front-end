import { PageProps } from "./props";

const Page = ({ children }: PageProps) => {
	//Render
	return <div className="bg-gray h-screen">{children}</div>;
};

export default Page;
