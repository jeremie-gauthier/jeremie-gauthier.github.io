import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import HeaderDesktop from "../components/header-desktop";
import HeaderMobile from "../components/header-mobile";
import Footer from "../components/footer";
import About from "../components/about";
import Contact from "../components/contact";
import SEO from "../components/seo";

export default () => {
	const [activeLink, setActiveLink] = useState(0);

	return (
		<Container fluid>
			<SEO title={"Jeremie GAUTHIER - FullStack Developer"} />
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
					{activeLink === 3 && <Contact />}
					<Footer />
				</Col>
			</Row>
		</Container>
	);
};
