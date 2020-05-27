import React from "react";
import stylesHeader from "./header.module.css";
import stylesPalette from "./palette.module.css";

export default ({ color }) => (
	<header
		className={[stylesHeader.container, stylesPalette[`bg${color}`]].join(" ")}
	>
		<h1 className={stylesHeader.title}>HEADER</h1>
	</header>
);
