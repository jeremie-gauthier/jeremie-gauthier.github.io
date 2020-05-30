import React from "react";
import { Container } from "react-bootstrap";
import stylesLayout from "./layout.module.css";

export default ({ children }) => (
	<Container className={stylesLayout.layout}>{children}</Container>
);
