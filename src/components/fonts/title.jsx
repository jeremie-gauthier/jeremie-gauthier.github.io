import React from "react";
import stylesTitle from "./title.module.css";

export default ({ id, children }) => {
	return (
		<h2 id={id} className={stylesTitle.title}>
			{children}
		</h2>
	);
};
