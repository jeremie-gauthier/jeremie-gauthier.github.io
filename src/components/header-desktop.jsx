import React, { memo } from "react";
import stylesHeader from "./header-desktop.module.css";
import Particles from "react-particles-js";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Button } from "react-bootstrap";

const Portrait = memo(() => (
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
));

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

const Bubbles = memo(() => (
	<Particles
		className={stylesHeader.bubbles}
		params={{
			particles: {
				number: {
					value: 75,
					density: {
						enable: false,
					},
				},
				size: {
					value: 3,
					random: true,
					anim: {
						speed: 2,
						size_min: 0.3,
					},
				},
				line_linked: {
					enable: false,
				},
				move: {
					random: true,
					speed: 1,
					direction: "bottom",
					out_mode: "out",
				},
			},
			interactivity: {
				events: {
					onhover: {
						enable: true,
						mode: "bubble",
					},
					onclick: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					bubble: {
						distance: 25,
						duration: 1,
						size: 0,
						opacity: 0,
					},
					repulse: {
						distance: 100,
						duration: 2,
					},
				},
			},
		}}
	/>
));

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
