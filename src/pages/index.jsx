import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import HeaderDesktop from "../components/header-desktop";
import HeaderMobile from "../components/header-mobile";
import Footer from "../components/footer";
import About from "../components/about";
import axios from "axios";

export default () => {
	const [activeLink, setActiveLink] = useState(0);

	return (
		<Container fluid>
			<Helmet>
				<link rel="icon" type="image/x-icon" href="/assets/favicon.png" />
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

				<Col className="main">
					{activeLink === 0 && <About />}
					{activeLink === 1 && <h1>Ma formation</h1>}
					{activeLink === 2 && <h1>Mes exp&eacute;riences</h1>}
					{activeLink === 3 && <h1>Me contacter</h1>}
					<Footer />
				</Col>
			</Row>
		</Container>
	);
};
