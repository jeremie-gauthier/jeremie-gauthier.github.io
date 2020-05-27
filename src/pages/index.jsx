import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import Container from "../components/container";
import "../styles/global.css";

export default () => {
	return (
		<Layout>
			<Header color={"Secondary"} />
			<Container color={"Tertiary"} vertical>
				<Main />
				<Footer />
			</Container>
		</Layout>
	);
};
