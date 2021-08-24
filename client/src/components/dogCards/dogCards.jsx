import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const DogCards = ({ dog }) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	//const [favorites, setFavorites] = useState();

  const useStickyState = (defaultValue, key) => {
    key++;
    const [favorites, setFavorites] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(favorites));
    }, [key, favorites]);
    return [favorites, setFavorites];
  }

  let keyVal = 0;

  const [favorites, setFavorites] = useStickyState([], keyVal);

  console.log(keyVal);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton
            data-myattr={dog.id}
            onClick={(e) => {
              console.log('clicked!', e.currentTarget.getAttribute("data-myattr"));

            }}
            aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        title={dog.name}
        subheader={dog.breed_group}
				titleTypographyProps={{variant:'h5'}}
      />
      <CardMedia
        className={classes.media}
        image={dog.image_url}
        title="Dog photo"
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
  );
}

export default DogCards;