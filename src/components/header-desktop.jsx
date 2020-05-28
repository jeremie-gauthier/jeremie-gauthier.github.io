import React, { Fragment } from "react";
import stylesHeader from "./header-desktop.module.css";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Portrait = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					file(relativePath: { eq: "jergauth.png" }) {
						childImageSharp {
							fluid(maxWidth: 200, maxHeight: 200) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			`}
			render={(data) => (
				<Img
					// className="false"
					title="Jeremie GAUTHIER"
					alt="Portrait"
					fluid={data.file.childImageSharp.fluid}
					width={200}
					height={200}
				/>
			)}
		/>
	);
};

const Header = ({ activeLink }) => {
	return (
		<Fragment>
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
				<Link to="/" className={activeLink === 1 ? stylesHeader.active : null}>
					Qui suis-je ?
				</Link>
				<Link
					to="school"
					className={activeLink === 2 ? stylesHeader.active : null}
				>
					Ma formation
				</Link>
				<Link
					to="work"
					className={activeLink === 3 ? stylesHeader.active : null}
				>
					Mes exp&eacute;riences
				</Link>
				<Link
					to="contact"
					className={activeLink === 4 ? stylesHeader.active : null}
				>
					Me contacter
				</Link>
			</div>
		</Fragment>
	);
};

export default Header;
