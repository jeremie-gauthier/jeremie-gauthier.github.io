import React from "react";
import stylesHeader from "./header.module.css";
import stylesPalette from "../palette.module.css";
import Text from "../fonts/text";

export default ({ color }) => (
	<header
		className={[stylesHeader.container, stylesPalette[`bg${color}`]].join(" ")}
	>
		<Text markup={"h1"}>HEADER</Text>
	</header>
);
