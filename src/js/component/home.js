import React, { useState, useEffect } from "react";
import { Card } from "./card";

export function Home() {
	const [starship, setStarship] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/starships/")
			.then(resp => resp.json())
			.then(data => {
				setStarship(data.results);
			});
	}, []);

	return (
		<>
			<div>
				{starship.map((item, index) => {
					return (
						<Card key={index} name={item.name} model={item.model} />
					);
				})}
			</div>
		</>
	);
}
