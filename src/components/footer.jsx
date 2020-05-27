import React from "react";
import stylesFooter from "./footer.module.css";

export default () => {
	return (
		<footer className={stylesFooter.container}>
			© {new Date().getFullYear()}, Realise avec
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a>
		</footer>
	);
};
