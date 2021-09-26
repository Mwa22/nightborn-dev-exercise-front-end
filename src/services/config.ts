import Axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

export const AXIOS_INSTANCE = Axios.create({
	baseURL: "http://localhost:8080",
}); // use your own URL here or environment variable

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
	const source = Axios.CancelToken.source();

	const promise = AXIOS_INSTANCE({
		...config,
		cancelToken: source.token,
	})
		.then(({ data }) => data)
		.catch((err) => {
			toast.error(`Something went wrong: ${err.response.data.message}`);
		});

	// @ts-ignore
	promise.cancel = () => {
		source.cancel("Query was cancelled");
	};

	return promise;
};
