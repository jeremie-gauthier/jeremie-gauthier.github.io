import React from "react";
import stylesText from "./text.module.css";

export default ({ markup = "p", style, children }) => {
	const CustomMarkup = markup;

	return (
		<CustomMarkup className={[stylesText.text, style].join(" ")}>
			{children}
		</CustomMarkup>
	);
};
