import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';
import BackgroundImage from '../../../images/1405992047-vector.svg';
import DogLogo from '../../../images/shutterstock_1518711302.svg'
import { Container, AppBar, Typography, Grow, Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import DogCards from './dogCards/dogCards.jsx';

const App = () => {
	const classes = useStyles();

	let [dogs, fetchAllDogs] = useState();


	useEffect(async () => {
		const result = await axios(
			'http://localhost:3014/dogs'
		);
		fetchAllDogs(result.data);
	}, []);


	//axios.get('http://localhost:3014/dogs').then(data => {

	//})



	return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
				<Typography className={classes.heading} variant='h2' align='center'>Pawsome</Typography>
				<img className={classes.image} src={DogLogo} alt='memories' height='60'/>
				<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
			</AppBar>
			{/* <div className='Body'>
	 		<img src={BackgroundImage} alt='Paw-print background image'/>
	  	</div> */}
			<Grow in>
				<Container>
					<Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>

							{dogs ?
							dogs.map((dog, i) => (
								dog.name !== 'African Hunting Dog' ?
								<Grid item xs={4} >
								<DogCards key={i} dog={dog}/>
								</Grid> : null
							))
							: null}

						{/* <Grid item xs={12} sm={4}> */}
							{/* <Form currentID={currentID} setCurrentID={setCurrentID} /> */}
						{/* </Grid> */}
					</Grid>

				</Container>
			</Grow>
		</Container>

	)
};

export default App;