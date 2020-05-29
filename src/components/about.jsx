import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import stylesSubpages from "./subpages.module.css";
import stylesAbout from "./about.module.css";
import react from "../assets/react.svg";
import gatsby from "../assets/gatsby.svg";
import node from "../assets/node.svg";
import mysql from "../assets/mysql.svg";

export default () => {
	return (
		<Container className={stylesSubpages.container}>
			<div className={stylesSubpages.marginBot}>
				<h2 className={stylesSubpages.title}>Qui suis-je ?</h2>
				<p className={stylesSubpages.subtitle}>
					Actuellement étudiant à 42 Paris, je suis également développeur
					FullStack en Freelance.
				</p>
			</div>

			<h3
				className={[stylesSubpages.marginBot, stylesAbout.titleServices].join(
					" "
				)}
			>
				Mes services
			</h3>
			<Row
				className={[stylesAbout.services, stylesSubpages.marginBot].join(" ")}
			>
				<Col>
					<h4>FRONT-END</h4>
					<p>
						Je rends votre site utilisable sur tous les appareils et pour tous
						les utilisateurs. J'aime travailler avec React et Gatsby.
					</p>
					<div className={stylesAbout.icons}>
						<img src={react} title="ReactJS" alt="Logo ReactJS" />
						<img src={gatsby} title="GatsbyJS" alt="Logo GatsbyJS" />
					</div>
				</Col>
				<Col>
					<h4>BACK-END</h4>
					<p>
						Je conçois votre base de données et construis la logique de votre
						site. Pour cela, j'utilise Node, Express et MySQL.
					</p>
					<div className={stylesAbout.icons}>
						<img src={node} title="NodeJS" alt="Logo NodeJS" />
						<img src={mysql} title="MySQL" alt="Logo MySQL" />
					</div>
				</Col>
			</Row>

			<div className={[stylesAbout.quote, stylesSubpages.marginBot].join(" ")}>
				<span className={stylesAbout.quoteSymbol}>&#8223;</span>
				<div className={stylesAbout.quoteText}>
					<p className={stylesAbout.firstLine}>
						J'aime me confronter à des défis techniques,
					</p>
					<p className={stylesAbout.secondLine}>
						cela me permet de repousser les limites de mon savoir.
					</p>
				</div>
			</div>
		</Container>
	);
};
