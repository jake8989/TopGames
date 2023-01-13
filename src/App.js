import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import GameList from './components/GameList';
import { isShorthandPropertyAssignment } from 'typescript';
const App = () => {
	const API_ID = '512d20f60dc84bcaae18ec48f4c168b8';
	const [intGame, setGame] = useState([]);
	const [query, setQuery] = useState('');
	const [gf, setGF] = useState('');
	useEffect(() => {
		console.log(intGame);
		getGameList();
	}, [gf]);
	const getGameList = async () => {
		const request = await fetch(
			`https://api.rawg.io/api/games?key=${API_ID}&search=${query}`
		);
		const data = await request.json();
		console.log(data.results);
		setGame(data.results);
		setQuery('');
	};
	const onChangeHanedler = (e) => {
		setQuery(e.target.value);
		// console.log(e.target.value);
	};
	const onClickHandeler = (e) => {
		e.preventDefault();
		setGF(query);
	};
	return (
		<Box>
			<Navbar></Navbar>
			<Stack
				direction={'row'}
				spacing={2}
				sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}
			>
				<TextField
					onChange={onChangeHanedler}
					label="Search Games"
					size="small"
					required
					value={query}
				></TextField>
				<Button
					color="primary"
					variant="contained"
					size="small"
					sx={{ width: '100px', height: '40px', marginTop: '60px' }}
					onClick={onClickHandeler}
				>
					Search
				</Button>
			</Stack>
			<Typography variant="h5" sx={{ textAlign: 'center', marginTop: '4rem' }}>
				Polular {gf.toUpperCase()} Games
			</Typography>
			<Paper sx={{ marginTop: '6rem', backgroundColor: 'rgb(10, 25, 41)' }}>
				<Grid
					container
					sx={{ marginTop: 4, paddingLeft: 10, paddingBottom: 10 }}
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{intGame.map((game, index) => (
						<Grid xs={2} sm={4} md={4} item key={index}>
							<GameList gameName={game}></GameList>
						</Grid>
					))}
				</Grid>
			</Paper>
		</Box>
	);
};
export default App;
