import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import HeaderDesktop from "../components/header-desktop";
import HeaderMobile from "../components/header-mobile";
import Footer from "../components/footer";

export default () => {
	return (
		<Container fluid>
			{/* Show on xs only */}
			<Row className="d-block d-sm-none bg-header">
				<HeaderMobile />
			</Row>

			<Row className="full-height">
				{/* Show on sm+ only */}
				<Col className="d-none d-sm-block bg-header pad-top" md={3} sm={5}>
					<HeaderDesktop activeLink={3} />
				</Col>

				<Col style={{ backgroundColor: "#090770" }}>
					<h1>Work</h1>
					<Footer />
				</Col>
			</Row>
		</Container>
	);
};
