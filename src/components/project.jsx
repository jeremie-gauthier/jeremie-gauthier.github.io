import React from "react";
import { Card, Image } from "react-bootstrap";
// import stylesProject from "./project.module.css";

const Technos = ({ stack }) =>
	stack.map((tech, index) => (
		<Image key={index} src={tech} height={25} style={{ margin: ".5rem" }} />
	));

export default ({ image, title, description, stack }) => {
	return (
		<Card
			style={{
				minWidth: "300px",
				maxWidth: "300px",
				marginBottom: "1rem",
				backgroundColor: "#0d1e5b",
				boxShadow: "10px 10px 25px rgba(0, 0, 0, .2)",
			}}
		>
			<Card.Img
				style={{ padding: "1rem", height: "125px" }}
				variant="top"
				src={image}
			/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Technos stack={stack} />
			</Card.Footer>
		</Card>
	);
};
