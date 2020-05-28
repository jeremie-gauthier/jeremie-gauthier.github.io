import React, { Fragment } from "react";
import stylesMain from "./main.module.css";
import { Container } from "./layouts";
import { Text, Title } from "./fonts";
import { Link } from "gatsby";
import renault from "../assets/renault.svg";
import python from "../assets/python.svg";
import logo42 from "../assets/42.svg";

const About = () => (
	<Fragment>
		<Title id="about">A propos</Title>
		<Text markup={"div"} style={stylesMain.name}>
			J&eacute;r&eacute;mie GAUTHIER
		</Text>
		<Text markup={"p"} style={stylesMain.job}>
			Freelance FullStack JS
		</Text>
		<Text markup={"p"}>Cr&eacute;ateur d'applications Node et React</Text>
		<Link to={"/contact"} className={stylesMain.contactBtn}>
			Contacter
		</Link>
	</Fragment>
);

const Experiences = () => {
	const experiences = [
		{
			logo: renault,
			alt: "Logo Renault",
			desc: "Creation d'un outil de design.",
			stack: [{ logo: python, alt: "Logo Python" }],
		},
		{
			logo: logo42,
			alt: "Logo de l'ecole 42",
			desc:
				"Plateforme de mise en relation entre cordistes et donneur d'ordres",
			stack: [],
		},
	];

	const renderExperiences = () =>
		experiences.map((exp) => (
			<Container vertical style={stylesMain.expContainer}>
				<img src={exp.logo} alt={exp.alt} width={200} />
				<Text markup={"p"} style={stylesMain.expDesc}>
					{exp.desc}
				</Text>
				<Container style={stylesMain.expStack}>
					{exp.stack.map((techno) => (
						<img src={techno.logo} alt={techno.alt} width={75} />
					))}
				</Container>
			</Container>
		));

	return (
		<Fragment>
			<Title id="experiences">Mes exp&eacute;riences</Title>
			{renderExperiences()}
		</Fragment>
	);
};

export default () => {
	return (
		<Container vertical style={stylesMain.container}>
			<Container vertical style={stylesMain.content}>
				<About />
				<Experiences />
			</Container>
		</Container>
	);
};
