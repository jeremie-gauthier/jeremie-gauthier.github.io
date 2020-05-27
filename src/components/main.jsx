import React from "react";
import stylesMain from "./main.module.css";
import Text from "./text";

export default () => {
	return (
		<div className={stylesMain.container}>
			<Text markup={"h2"}>Jeremie GAUTHIER</Text>
		</div>
	);
};
