import React from 'react';
import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	Stack,
	Button,
} from '@mui/material';
// import Stack from '@mui/system';
import gameLogo from '../assets/game__logo.webp';
import { Games } from '@mui/icons-material';

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar aria-aria-label="menu">
				<IconButton edge="start" color="warning">
					{/* <img src="../assets/game__logo.webp" alt="game-lgog" /> */}
					<Games></Games>
				</IconButton>
				<Typography variant="h5" color={'inherit'} sx={{ flexGrow: 1 }}>
					TopGames
				</Typography>
				<Stack direction={'row'} spacing={2}>
					<Button color="inherit">Time</Button>
					<Button color="inherit">Time</Button>
					<Button color="inherit">Time</Button>
					<Button color="inherit">Time</Button>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
