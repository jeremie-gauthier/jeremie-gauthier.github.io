import React, { useState } from "react";
import { Dropdown, Container, Image, Button } from "react-bootstrap";
import stylesHeader from "./header-mobile.module.css";
import menu from "../assets/menu-burger.svg";

const Links = ({ activeLink, setActiveLink, setShow }) => {
	const links = [
		"Qui suis-je ?",
		"Ma formation",
		"Mes expériences",
		"Me contacter",
	];

	return links.map((text, index) => (
		<Button
			key={index}
			variant="link"
			className={activeLink === index ? stylesHeader.active : null}
			onClick={() => {
				setActiveLink(index);
				setShow(false);
			}}
		>
			{text}
		</Button>
	));
};

export default ({ activeLink, setActiveLink }) => {
	const [show, setShow] = useState(false);

	return (
		<Container className={stylesHeader.container}>
			<h1 className={stylesHeader.title}>J&eacute;r&eacute;mie GAUTHIER</h1>
			<Dropdown show={show} onToggle={(showState) => setShow(showState)}>
				<Dropdown.Toggle className={stylesHeader.dropdown}>
					<Image src={menu} />
				</Dropdown.Toggle>

				<Dropdown.Menu className={stylesHeader.dropdownMenu}>
					<Links
						activeLink={activeLink}
						setActiveLink={setActiveLink}
						setShow={setShow}
					/>
				</Dropdown.Menu>
			</Dropdown>
		</Container>
	);
};
