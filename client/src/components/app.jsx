import React from 'react';
import axios from 'axios';
import './app.css';
import BackgroundImage from '../../../images/1405992047-vector.svg';
import DogLogo from '../../../images/shutterstock_1518711302.svg'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';

const App = () => {
	const classes = useStyles();
	// <>
	// 	<div className='AppTitle Overlay'>
	// 		Pawsome
	// 	</div>
	// 	<div className='Body'>
	// 		<img src={BackgroundImage} alt='Paw-print background image'/>
	// 	</div>
  // </>
	return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
				<Typography className={classes.heading} variant='h2' align='center'>Pawsome</Typography>
				<img className={classes.image} src={DogLogo} alt='memories' height='60'/>
			</AppBar>
			<div className='Body'>
	 		<img src={BackgroundImage} alt='Paw-print background image'/>
	  	</div>
			<Grow in>
				<Container>
					<Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
						<Grid item xs={12} sm={7}>
              {/* <Posts setCurrentID={setCurrentID} /> */}
						</Grid>
						<Grid item xs={12} sm={4}>
							{/* <Form currentID={currentID} setCurrentID={setCurrentID} /> */}
						</Grid>
					</Grid>

				</Container>
			</Grow>
		</Container>

	)
};

export default App;