import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import stylesSubpages from "./subpages.module.css";
import stylesExperience from "./experience.module.css";

export default () => {
	return (
		<Container className={stylesSubpages.container}>
			<div className={stylesSubpages.marginBot}>
				<h2 className={stylesSubpages.title}>Exp&eacute;riences</h2>
			</div>
		</Container>
	);
};
