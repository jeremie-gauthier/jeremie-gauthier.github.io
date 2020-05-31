import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import stylesSubpages from "./subpages.module.css";
import stylesExperience from "./experience.module.css";
import Project from "./project";
import logo42 from "../assets/42.svg";
import renault from "../assets/renault.svg";
import python from "../assets/python.svg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import mysql from "../assets/mysql.svg";
import orange from "../assets/orange.svg";
import php from "../assets/php.svg";

const Projects = ({ projects }) =>
	projects.map((project, index) => <Project key={index} {...project} />);

export default () => {
	const projects = [
		{
			image: logo42,
			title: "FullStack web et mobile",
			description:
				"Creation d'une plateforme (web et mobile) de mise en relation entre donneurs d'ordres et cordistes.",
			stack: [react, node, mysql],
		},
		{
			image: renault,
			title: "Conception logiciel",
			description:
				"Creation d'un logiciel graphique vectoriel capable de piloter des LEDs.",
			stack: [python],
		},
		{
			image: orange,
			title: "Developpeur back-end",
			description: "Participation a la refonte de l'intranet.",
			stack: [php],
		},
	];

	return (
		<Container className={stylesSubpages.container}>
			<div className={stylesSubpages.marginBot}>
				<h2 className={stylesSubpages.title}>Exp&eacute;riences</h2>
				<CardDeck
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					<Projects projects={projects} />
				</CardDeck>
			</div>
		</Container>
	);
};
