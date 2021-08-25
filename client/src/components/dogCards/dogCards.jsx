import React, { useState } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Favorites from './favorites.jsx';

const DogCards = ({ dog, setFavorites, favorites }) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
  const [hover, setHover]= useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <>
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton
            data-myattr={dog.name}
            onClick={(e) => {
              favorites.indexOf(dog) === -1 ?
              setFavorites([...favorites, dog])
              : null;
            }}
            aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>}
        title={dog.name.length > 20 ? dog.name.slice(0, 20) + '...' : dog.name}
        subheader={dog.breed_group}
				titleTypographyProps={{variant:'h5'}}
      >
      </CardHeader>
      <CardMedia
        className={classes.media}
        image={dog.image_url}
        title={dog.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Temperament: {dog.temperament}
					<br/>
					Weight: {dog.weight} lb.
					<br/>
          Height: {dog.height} in.


        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Notes:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </>
  );
}

export default DogCards;