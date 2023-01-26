import React from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Button } from '@mui/material';

import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
	box: {
		width: '330px',
		height: 'auto',
	},
});
const GameList = (props) => {
	const classes = useStyles();
	const { name, score, background_image, released, rating, rating_top } =
		props.gameName;
	return (
		<Box className={classes.box}>
			<a>
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
						<Typography variant="h6">Rating:-{rating} out of 5</Typography>

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
			</a>
		</Box>
	);
};
export default GameList;
