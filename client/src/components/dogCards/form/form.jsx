import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { Button, TextField, Typography } from '@material-ui/core';
import './form.css';

const Form = ({ dog, addDogNotes }) => {

	const classes = useStyles();

	const [formData, updateFormData] = useState({dogName: dog.name, notes: ''});

	const clear = () => {
		updateFormData({
			notes: ''
	  })
	}

	const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('FORM DATA: ', formData);
		addDogNotes(e, formData.notes);
		clear();
  };

	return (
		<>
		  <Typography variant="h6" color="textSecondary">
		    {dog.notes ? <div className='new-line'>{dog.notes}</div> : null}
      </Typography>
			<form className={`${classes.root} ${classes.form}`}
			onSubmit={handleSubmit}
			>
				<TextField
				name='notes'
				variant='outlined'
				label='Notes'
				fullWidth
			 	onChange={handleChange}
			/>
				<Button
				onClick={handleSubmit}
				display='inline' className={classes.buttonSubmit} variant='contained' color='primary' size='small' type='submit'>Submit</Button>
				<Button type='reset' display='inline' variant='contained' color='secondary' size='small'
				onClick={clear}
				>Clear</Button>
			</form>
		</>
	)
}

export default Form;