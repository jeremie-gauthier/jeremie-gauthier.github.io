import React, { useState } from "react";
import { Dropdown, Image, Button } from "react-bootstrap";
import stylesHeader from "./header-mobile.module.css";
import menu from "../assets/menu-burger.svg";

const Links = ({ activeLink, setActiveLink, setShow }) => {
	const links = ["Qui suis-je ?", "Expériences", "Contact"];

	return links.map((text, index) => (
		<Dropdown.Item key={index}>
			<Button
				variant="link"
				className={activeLink === index ? stylesHeader.active : null}
				onClick={() => {
					setActiveLink(index);
					setShow(false);
				}}
			>
				{text}
			</Button>
		</Dropdown.Item>
	));
};

export default ({ activeLink, setActiveLink }) => {
	const [show, setShow] = useState(false);

	return (
		<header className={stylesHeader.container}>
			<h1 className={stylesHeader.title}>J&eacute;r&eacute;mie GAUTHIER</h1>
			<Dropdown
				show={show}
				onToggle={(showState) => setShow(showState)}
				className={stylesHeader.dropdown}
			>
				<Dropdown.Toggle className={stylesHeader.dropdownBtn}>
					<Image src={menu} alt="Menu d&eacute;roulant" />
				</Dropdown.Toggle>
				<Dropdown.Menu className={stylesHeader.dropdownMenu}>
					<Links
						activeLink={activeLink}
						setActiveLink={setActiveLink}
						setShow={setShow}
					/>
				</Dropdown.Menu>
			</Dropdown>
		</header>
	);
};
