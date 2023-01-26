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
import Categories from './components/Categories';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
	gamelist: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: '6rem',
		paddingTop: '4rem',
	},
	search: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1rem',
	},
	input: {
		// height: '16px',
		width: '50%',
		// padding: '0px',
	},
});
const App = () => {
	const classes = useStyles();
	const API_ID = '512d20f60dc84bcaae18ec48f4c168b8';
	const [intGame, setGame] = useState([]);
	let [query, setQuery] = useState('');
	const [gf, setGF] = useState('');
	useEffect(() => {
		// console.log(intGame);
		getGameList();
	}, [gf]);
	const getGameList = async () => {
		const request = await fetch(
			`https://api.rawg.io/api/games?key=${API_ID}&search=${query}`
		);
		const data = await request.json();
		// console.log(data.results);
		setGame(data.results);
		setQuery('');
	};
	const onChangeHanedler = (e) => {
		setQuery(e.target.value);
		// console.log(e.target.value);
	};
	const eClick = (data) => {
		// console.log(gf);
		setQuery(data);
		setGF(query);
	};
	const onClickHandeler = (e) => {
		e.preventDefault();
		setGF(query);
	};

	return (
		<>
			<Paper>
				<Navbar></Navbar>
				<Categories data={eClick}></Categories>

				<Box className={classes.search}>
					<TextField
						label="Search Games"
						size="small"
						className={classes.input}
						onChange={onChangeHanedler}
						value={query}
					></TextField>
					<Button variant="outlined" onClick={onClickHandeler}>
						Search
					</Button>
				</Box>
				<Paper>
					<Grid
						container
						className={classes.gamelist}
						rowSpacing={2}
						columnSpacing={2}
					>
						{intGame.map((game, _) => (
							<Grid item>
								<GameList gameName={game}></GameList>
							</Grid>
						))}
					</Grid>
					<Typography textAlign={'center'}>
						{' '}
						Copyright @TopGames|All rights reserved
					</Typography>
				</Paper>
			</Paper>
		</>
	);
};
export default App;
