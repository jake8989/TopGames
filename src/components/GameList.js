import React from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Stack from '@mui/system';
import { Grid, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
// import DownloadIcon
import imgPath from '../assets/game__logo.webp';
// let global = [];
// type GameProps = {
// 	gameName: Object;
// };
const GameList = (props) => {
	const { name, score, background_image, released } = props.gameName;
	return (
		<Box sx={{ width: '80%', height: '70%' }}>
			<Card sx={{ backgroundColor: '#2d3843', color: 'whitesmoke' }}>
				<CardMedia>
					<Box>
						<img
							height={'300vh'}
							width={'400vw'}
							src={background_image}
							alt={`${name} game image`}
							loading="lazy"
						/>
					</Box>
				</CardMedia>
				<CardContent>
					<Typography variant="h6">{name}</Typography>
					<Typography variant="h6">Score: {score}</Typography>

					<Typography variant="h6">Date of Release: {released}</Typography>
					{/* <Typography variant="h5">{released}</Typography>
					<Typography variant="h5">{score}</Typography>
					<Typography variant="h5">{background_image}</Typography> */}

					<Typography variant="body2" size="small">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Accusantium cum optio dolorum veniam blanditiis impedit pariatur
						unde neque aliquam, alias omnis, ullam distinctio.
					</Typography>
				</CardContent>
				<CardActions>
					<Button>Download </Button>
					<Button>BookMark</Button>
				</CardActions>
			</Card>
		</Box>
	);
};
export default GameList;
