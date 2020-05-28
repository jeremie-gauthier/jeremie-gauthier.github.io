import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Header from "../components/header";

export default () => {
	return (
		<Container fluid>
			<Row>
				<Col sm={3} style={{ backgroundColor: "#0D1E5B" }}>
					<Header />
				</Col>
				<Col style={{ backgroundColor: "#090770" }}>
					<h1>Body</h1>
					<p>Lorem ipsum dolor sit amet</p>
				</Col>
			</Row>
		</Container>
	);
};
