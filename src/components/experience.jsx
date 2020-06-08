import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import stylesSubpages from "./subpages.module.css";
import stylesExp from "./experience.module.css";
import Project from "./project";
import logo42 from "../assets/42.svg";
import renault from "../assets/renault.svg";
import python from "../assets/python.svg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import mysql from "../assets/mysql.svg";
import orange from "../assets/orange.svg";
import php from "../assets/php.svg";
import npm from "../assets/npm.svg";
import typescript from "../assets/typescript.svg";

const Projects = ({ projects }) =>
	projects.map((project, index) => <Project key={index} {...project} />);

export default () => {
	const projects = [
		{
			image: { src: npm, alt: "Logo NPM", title: "npm" },
			title: "react-suggestbar",
			description: (
				<>
					Création d'un package npm en OpenSource.
					<br />
					<a
						href="https://www.npmjs.com/package/react-suggestbar"
						target="_blank"
						rel="noreferrer"
						className={stylesExp.link}
					>
						Voir plus
					</a>
				</>
			),
			stack: [
				{ src: react, alt: "Logo ReactJS", title: "ReactJS" },
				{ src: typescript, alt: "Logo TypeScript", title: "TypeScript" },
			],
		},
		{
			image: { src: logo42, alt: "Logo 42", title: "42" },
			title: "FullStack web et mobile",
			description:
				"Création d'une plateforme (web et mobile) de mise en relation entre donneurs d'ordres et cordistes.",
			stack: [
				{ src: react, alt: "Logo ReactJS", title: "ReactJS" },
				{ src: node, alt: "Logo NodeJS", title: "NodeJS" },
				{ src: mysql, alt: "Logo MySQL", title: "MySQL" },
			],
		},
		{
			image: { src: renault, alt: "Logo Renault", title: "Renault" },
			title: "Développeur Python",
			description:
				"Création d'un logiciel graphique vectoriel capable de piloter des LEDs.",
			stack: [{ src: python, alt: "Logo Python", title: "Python" }],
		},
		{
			image: { src: orange, alt: "Logo Orange", title: "Orange" },
			title: "Développeur back-end",
			description: "Participation à la refonte de l'intranet.",
			stack: [{ src: php, alt: "Logo PHP", title: "PHP" }],
		},
	];

	return (
		<Container className={stylesSubpages.container}>
			<div className={stylesSubpages.marginBot}>
				<h2 className={stylesSubpages.title}>Expériences</h2>
				<CardDeck
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					<Projects projects={projects} />
				</CardDeck>
			</div>
		</Container>
	);
};
