import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default () => {
	return (
		<Layout>
			<h1>Page introuvable</h1>
			<p>Oups, la page que vous recherchez n'existe pas.</p>
			<Link to="/" style={{ color: "#fff" }}>
				Retour à l'accueil
			</Link>
		</Layout>
	);
};
