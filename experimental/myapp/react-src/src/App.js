import { useEffect, useState } from 'react'
import './App.css';
import axios from "axios";

// Import filesystem namespace
import { filesystem, os } from "@neutralinojs/lib"


function App() {
	const [isLoading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState();

	const baseurl = "https://pokeapi.co/";

	useEffect(() => {
		axios.get(`${baseurl}api/v2/pokemon/5`).then((response) => {
			setPokemon(response.data);
			setLoading(false);
		});
	}, []);

  useEffect(() => {

    os.execCommand('cd ~ && ls').then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });

    // filesystem.readDirectory('./').then((data) => {
    //   console.log(data)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }, [])

	if (isLoading) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
					backgroundColor: "grey",
				}}
			>
				Loading...
			</div>
		);
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				backgroundColor: "grey",
			}}
		>
			<div>{pokemon.name}</div>
			<img alt={pokemon.name} src={pokemon.sprites.front_default} />
		</div>
	);
}

export default App;
