import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import "../styles/global.css";
import HeaderDesktop from "../components/header-desktop";
import HeaderMobile from "../components/header-mobile";
import Footer from "../components/footer";
import About from "../components/about";
import Experiences from "../components/experience";
import Contact from "../components/contact";
import SEO from "../components/seo";

const Mobile = ({ bp, children }) => (bp.mobile ? children : null);
const NotMobile = ({ bp, children }) => (bp.default ? children : null);

export default () => {
	const [activeLink, setActiveLink] = useState(0);
	const breakpoints = useBreakpoint();

	return (
		<Container fluid>
			<SEO title={"Jeremie GAUTHIER - FullStack Developer"} />

			<Mobile bp={breakpoints}>
				<Row className="bg-header">
					<HeaderMobile activeLink={activeLink} setActiveLink={setActiveLink} />
				</Row>
			</Mobile>

			<Row className="full-height">
				<NotMobile bp={breakpoints}>
					<Col className="bg-header pad-top" md={3} sm={5}>
						<HeaderDesktop
							activeLink={activeLink}
							setActiveLink={setActiveLink}
						/>
					</Col>
				</NotMobile>

				<Col className="main pad-top">
					{activeLink === 0 && <About />}
					{activeLink === 1 && <Experiences />}
					{activeLink === 2 && <Contact />}
					<Footer />
				</Col>
			</Row>
		</Container>
	);
};
