import React from "react";
import { Layout, Header, Footer, Container } from "../components/layouts";
import Main from "../components/main";
import "../styles/global.css";

export default () => {
	return (
		<Layout>
			<Header color={"Secondary"} />
			<Container color={"Primary"} vertical>
				<Main />
				<Footer />
			</Container>
		</Layout>
	);
};
