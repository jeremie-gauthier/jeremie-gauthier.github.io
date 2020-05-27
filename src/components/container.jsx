import React from "react";
import stylesContainer from "./container.module.css";
import stylesPalette from "./palette.module.css";

export default ({ children, color = null, vertical = false }) => {
	return (
		<div
			className={[
				stylesContainer.container,
				color && stylesPalette[`bg${color}`],
			].join(" ")}
		>
			<div
				className={[
					stylesContainer.content,
					vertical && stylesContainer.vertical,
				].join(" ")}
			>
				{children}
			</div>
		</div>
	);
};
