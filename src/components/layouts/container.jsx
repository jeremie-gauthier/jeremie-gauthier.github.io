import React from "react";
import stylesContainer from "./container.module.css";
import stylesPalette from "../palette.module.css";

export default ({ children, style, color = null, vertical = false }) => {
	return (
		<div
			className={[
				stylesContainer.container,
				color && stylesPalette[`bg${color}`],
				vertical && stylesContainer.vertical,
				style,
			].join(" ")}
		>
			{children}
		</div>
	);
};
