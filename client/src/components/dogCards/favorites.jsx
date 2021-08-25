import React, { useState } from 'react';
import useStyles from './styles.js';
import { AppBar, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Container, IconButton, Typography, Grow, Grid, InputBase  } from '@material-ui/core';

import clsx from 'clsx';
import { Link } from "react-router-dom";

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Favorite from './favorite.jsx';
import DogLogo from '../../../../images/shutterstock_1518711302.svg'
import SearchIcon from '@material-ui/icons/Search';

const Favorites = ({ favorites }) => {
	console.log('FAVE DOGS:', favorites);
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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

								{favorites ?
								favorites.map((dog, i) => (
									<Grid item key={i} xs={4} >
										<Favorite dog={dog}/>
									</Grid>
								))
								: null}
						</Grid>
					</Container>
				</Grow>
			</Container>
		</>
  );
}

export default Favorites;