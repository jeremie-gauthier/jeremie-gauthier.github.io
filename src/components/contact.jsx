import React from "react";
import { Container } from "react-bootstrap";
import stylesSubpages from "./subpages.module.css";
import stylesContact from "./contact.module.css";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default () => {
	return (
		<Container className={stylesSubpages.container}>
			<div className={stylesSubpages.marginBot}>
				<h2 className={stylesSubpages.title}>Contact</h2>
				<p className={stylesSubpages.subtitle}>
					Vous êtes à la recherche d'un développeur ?
				</p>
			</div>

			<div
				className={[stylesSubpages.marginBot, stylesContact.groupIcons].join(
					" "
				)}
			>
				<a
					href="https://www.linkedin.com/in/jeremie-gauthier-4141a014a/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={linkedin}
						className={stylesContact.icons}
						alt="Logo LinkedIn"
					/>
				</a>
				<a
					href="https://github.com/jeremie-gauthier"
					target="_blank"
					rel="noreferrer"
				>
					<img src={github} className={stylesContact.icons} alt="Logo Github" />
				</a>
			</div>
		</Container>
	);
};
