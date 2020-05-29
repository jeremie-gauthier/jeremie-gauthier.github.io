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

	const [config, setConfig] = useState(null);
	useEffect(() => {
		const getKey = async () => {
			const data = {
				grant_type: "client_credentials",
				client_id: process.env.UID,
				client_secret: process.env.SECRET,
			};

			const result = await axios.post(
				`${process.env.API_URL}/oauth/token`,
				data
			);

			setConfig({
				headers: { Authorization: `Bearer ${result.data.access_token}` },
			});
		};

		getKey();
	}, []);

	const [cursus, setCursus] = useState(null);
	useEffect(() => {
		const getUser = async () => {
			const result = await axios.get(
				`${process.env.API_URL}/v2/users/${process.env.ID42}`,
				config
			);
			const cursus_user = result.data.cursus_users[0];
			setCursus({
				grade: cursus_user.grade,
				level: cursus_user.level,
				skills: cursus_user.skills,
			});
		};

		if (config) getUser();
	}, [config]);

	return (
		<Container fluid>
			<Helmet>
				<link rel="icon" href="/assets/favicon.svg" />
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
