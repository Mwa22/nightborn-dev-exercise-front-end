import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/dashboard/layout";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</QueryClientProvider>
	);
}
export default MyApp;
