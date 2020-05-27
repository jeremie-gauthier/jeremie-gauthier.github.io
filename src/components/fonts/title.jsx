import React from "react";
import stylesTitle from "./title.module.css";

export default ({ children }) => {
	return <h2 className={stylesTitle.title}>{children}</h2>;
};
