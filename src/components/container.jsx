import React from "react";
import stylesContainer from "./container.module.css";
import stylesPalette from "./palette.module.css";

export default ({ children, color = null, vertical = false }) => {
	return (
		<div
			className={[
				stylesContainer.container,
				vertical && stylesContainer.vertical,
				color && stylesPalette[`bg${color}`],
			].join(" ")}
		>
			{children}
		</div>
	);
};
