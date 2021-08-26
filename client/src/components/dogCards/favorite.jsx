import React, { useState } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Form from './form/form.jsx';

const Favorite = ({ dog }) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

	const addDogNotes = (e, notes) => {
    e.preventDefault();
    dog.notes = notes;
    return dog;
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="remove from favorites">
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
        title="Paella dish"
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
				<Typography variant='h6'>More Information:</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Life Span: {dog.life_span}
					<br/>
          {dog.bred_for ? `Bred For: ${dog.bred_for}` : null}
					<br/>
          {dog.origin ? `Origin(s): ${dog.origin}` : null}
          <br/>
          <br/>
        </Typography>
          <Typography variant='h6'>Your Notes:</Typography>
          <Form dog={dog} addDogNotes={addDogNotes}/>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Favorite;