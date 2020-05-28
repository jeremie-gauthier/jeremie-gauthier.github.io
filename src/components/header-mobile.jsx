import React from "react";
import { Dropdown, Container, Image } from "react-bootstrap";
import stylesHeader from "./header-mobile.module.css";
import menu from "../assets/menu-burger.svg";
import { Link } from "gatsby";

export default () => {
	return (
		<Container className={stylesHeader.container}>
			<h1 className={stylesHeader.title}>J&eacute;r&eacute;mie GAUTHIER</h1>
			<Dropdown>
				<Dropdown.Toggle>
					<Image src={menu} />
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item>
						<Link to="about">Qui suis-je ?</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="school">Ma formation</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="work">Mes exp&eacute;riences</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="contact">Me contacter</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Container>
	);
};
