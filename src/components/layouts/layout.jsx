import React from "react";
import stylesLayout from "./layout.module.css";

export default ({ children }) => {
	return <div className={stylesLayout.inline}>{children}</div>;
};
