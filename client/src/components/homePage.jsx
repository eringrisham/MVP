import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import DogLogo from '../../../images/shutterstock_1518711302.svg'
import { Container, AppBar, Typography, Grow, Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import DogCards from './dogCards/dogCards.jsx';
import { Pagination } from '@material-ui/lab';
import ScrollArrow from './scrollUp.jsx';

const Home = ({ favorites, setFavorites }) => {
	const classes = useStyles();

	const [dogs, fetchAllDogs] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(30);

	useEffect(async () => {
		const result = await axios(
			'http://localhost:3014/dogs'
		);
		fetchAllDogs(result.data);
	}, []);

	//change page
	const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
	}

	//get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	let totalPosts;
	let currentPosts;
	if (dogs) {
		totalPosts = dogs.length;
		currentPosts = dogs.slice(indexOfFirstPost, indexOfLastPost);
	}

	const numberOfPages = Math.ceil(totalPosts/postsPerPage);

	//scroll to top
	const scrollTop = () =>{
		window.scrollTo({top: 0, behavior: 'smooth'});
  };

	return (
		<>
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
						<Typography variant="body2" color="textSecondary">
								<Link to="/">Home</Link>
								<br/>
								<Link to="/favorites">Favorites</Link>
								<br/>
								<Link to="/add">Add Dogs</Link>
						</Typography>
				</AppBar>
				<Grow in>
					<Container>
						<Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
								{dogs ?
								currentPosts.map((dog, i) => (
									dog.name !== 'African Hunting Dog' ?
									<Grid item key={i} xs={4} >
										<DogCards dog={dog} favorites={favorites} setFavorites={setFavorites}/>
									</Grid> : null
								))
								: null}
					<Pagination
						onChange={(event, val) => paginate(val)}
						count={numberOfPages}
						page={currentPage}
						style={{marginTop: '50px', marginBottom: '50px', left: '10%', top: '90%'}}
						color="primary"
						size="large"/>
						</Grid>
					</Container>
				</Grow>
			</Container>
			<Container maxwidth='lg'>
				<AppBar className={classes.appBar} position='static' color='inherit'>
					<Typography className={classes.heading} variant='h3' align='center'>Pawsome</Typography>
					<img className={classes.image} src={DogLogo} alt='memories' height='60' style={{marginLeft: '20px', marginRight: '20px'}}/>

					<Typography className={classes.heading} variant='h3' align='center'>Created by Erin Grisham</Typography>
          <ScrollArrow/>
				</AppBar>
			</Container>
		</>
	)
};

export default Home;
