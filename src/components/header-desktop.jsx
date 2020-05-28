import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import portrait from "../assets/jergauth.png";
import stylesHeader from "./header-desktop.module.css";
import { Link } from "gatsby";

export default ({ activeLink }) => {
	return (
		<Fragment>
			<div className={stylesHeader.profile}>
				<h1 className={stylesHeader.title}>J&eacute;r&eacute;mie GAUTHIER</h1>
				<div className={stylesHeader.portrait}>
					<Image fluid src={portrait} alt="Portrait" />
				</div>
				<div className={stylesHeader.subtitle}>
					FullStack Javascript - Freelance
				</div>
			</div>
			<div className={stylesHeader.links}>
				<Link to="/" className={activeLink === 1 && stylesHeader.active}>
					Qui suis-je ?
				</Link>
				<Link to="school" className={activeLink === 2 && stylesHeader.active}>
					Ma formation
				</Link>
				<Link to="work" className={activeLink === 3 && stylesHeader.active}>
					Mes exp&eacute;riences
				</Link>
				<Link to="contact" className={activeLink === 4 && stylesHeader.active}>
					Me contacter
				</Link>
			</div>
		</Fragment>
	);
};
