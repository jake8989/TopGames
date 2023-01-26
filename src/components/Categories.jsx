import React from 'react';
import { Typography, Button } from '@mui/material';
const Categories = (props) => {
	return (
		<div>
			<Typography textAlign={'center'}>
				<Button onClick={() => props.data('Action')}>Action</Button>
				<Button onClick={() => props.data('Arcade')}>Arcade</Button>
				<Button onClick={() => props.data('Adventure')}>Adventure</Button>
				<Button onClick={() => props.data('Puzzle')}>Puzzle</Button>
				<Button onClick={() => props.data('Car')}>Cars</Button>
				<Button onClick={() => props.data('Run')}>Running</Button>
				<Button onClick={() => props.data('GTA')}>GTA</Button>
				<Button onClick={() => props.data('HORROR')}>Horror</Button>
			</Typography>
		</div>
	);
};

export default Categories;
