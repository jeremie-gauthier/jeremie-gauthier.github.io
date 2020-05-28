import React, { useState } from "react";
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
			{/* Show on xs only */}
			<Row className="d-block d-sm-none bg-header">
				<HeaderMobile />
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
