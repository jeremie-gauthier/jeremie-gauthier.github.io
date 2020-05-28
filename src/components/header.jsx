import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import portrait from "../assets/jergauth.png";
import stylesHeader from "./header.module.css";
import { Link } from "gatsby";

export default () => {
	return (
		<Fragment>
			<h2>J&eacute;r&eacute;mie GAUTHIER</h2>
			<Image src={portrait} width={200} />
			<div className={stylesHeader.subtitle}>
				Freelance - FullStack Javascript
			</div>
			<div className={stylesHeader.links}>
				<Link to="about">Qui suis-je ?</Link>
				<Link to="school">Ma formation</Link>
				<Link to="work">Mes exp&eacute;riences</Link>
				<Link to="contact">Me contacter</Link>
			</div>
			<h1>Footer</h1>
		</Fragment>
	);
};
