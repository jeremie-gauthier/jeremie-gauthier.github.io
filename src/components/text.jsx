import React from "react";
import stylesText from "./text.module.css";

export default ({ markup = "p", children }) => {
	const CustomMarkup = markup;

	return (
		<CustomMarkup className={stylesText.text} color>
			{children}
		</CustomMarkup>
	);
};
