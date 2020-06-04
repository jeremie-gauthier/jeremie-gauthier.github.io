import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";

export default () => {
	return (
		<Container
			style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
		>
			<h1>Page introuvable</h1>
			<p>Oups, la page que vous recherchez n'existe pas.</p>
			<Link to="/" style={{ color: "#fff" }}>
				Retour à l'accueil
			</Link>
		</Container>
	);
};
