import React from "react";
import stylesMain from "./main.module.css";
import { Container } from "./layouts";
import { Text, Title } from "./fonts";

export default () => {
	return (
		<Container vertical style={stylesMain.container}>
			<Title>A propos</Title>
			<Text markup={"div"} style={stylesMain.name}>
				Jeremie GAUTHIER
			</Text>
		</Container>
	);
};
