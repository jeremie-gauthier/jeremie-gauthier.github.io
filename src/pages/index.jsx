import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import HeaderDesktop from "../components/header-desktop";
import HeaderMobile from "../components/header-mobile";
import Footer from "../components/footer";

export default () => {
	const [activeLink, setActiveLink] = useState(0);

	return (
		<Container fluid>
			<Helmet>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"
				/>
				<meta
					name="description"
					content="Jeremie GAUTHIER's portfolio. FullStack Developer Freelance. Currently studying at 42 Paris."
				/>
				<title>J&eacute;r&eacute;mie GAUTHIER - FullStack Developer</title>
			</Helmet>

			{/* Show on xs only */}
			<Row className="d-block d-sm-none bg-header">
				<HeaderMobile activeLink={activeLink} setActiveLink={setActiveLink} />
			</Row>

			<Row className="full-height">
				{/* Show on sm+ only */}
				<Col className="d-none d-sm-block bg-header pad-top" md={3} sm={5}>
					<HeaderDesktop
						activeLink={activeLink}
						setActiveLink={setActiveLink}
					/>
				</Col>

				<Col style={{ backgroundColor: "#090770" }}>
					{activeLink === 0 && <h1>Qui suis-je ?</h1>}
					{activeLink === 1 && <h1>Ma formation</h1>}
					{activeLink === 2 && <h1>Mes exp&eacute;riences</h1>}
					{activeLink === 3 && <h1>Me contacter</h1>}
					<Footer />
				</Col>
			</Row>
		</Container>
	);
};
