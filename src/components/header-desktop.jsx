import React from "react";
import stylesHeader from "./header-desktop.module.css";
import Particles from "react-particles-js";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Button } from "react-bootstrap";

const Portrait = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					file(relativePath: { eq: "jergauth.png" }) {
						childImageSharp {
							fluid(maxWidth: 200, maxHeight: 200) {
								...GatsbyImageSharpFluid_noBase64
							}
						}
					}
				}
			`}
			render={(data) => (
				<Img
					title="Jeremie GAUTHIER"
					alt="Portrait"
					fluid={data.file.childImageSharp.fluid}
				/>
			)}
		/>
	);
};

const Links = ({ activeLink, setActiveLink }) => {
	const links = ["Qui suis-je ?", "Expériences", "Contact"];

	return links.map((text, index) => (
		<Button
			key={index}
			variant="link"
			className={activeLink === index ? stylesHeader.active : null}
			onClick={() => setActiveLink(index)}
		>
			{text}
		</Button>
	));
};

const Header = ({ activeLink, setActiveLink }) => {
	return (
		<header>
			<div className={stylesHeader.profile}>
				<h1 className={stylesHeader.title}>J&eacute;r&eacute;mie GAUTHIER</h1>
				<div className={stylesHeader.portrait}>
					<Portrait />
				</div>
				<div className={stylesHeader.subtitle}>
					FullStack Javascript - Freelance
				</div>
			</div>
			<div className={stylesHeader.links}>
				<Links activeLink={activeLink} setActiveLink={setActiveLink} />
			</div>
		</header>
	);
};

export default Header;
