import React from "react";
import stylesFooter from "./footer.module.css";
import Text from "../fonts/text";

export default () => {
	return (
		<footer className={stylesFooter.container}>
			<Text markup={"span"}>© {new Date().getFullYear()}, Realise avec</Text>
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a>
		</footer>
	);
};
