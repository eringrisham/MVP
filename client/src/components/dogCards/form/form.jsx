import React, { useState } from 'react';
import useStyles from './styles.js';
import { AppBar, Button, Container, InputBase, Paper, TextField, Typography } from '@material-ui/core';

const Form = ({ dogName }) => {

	const classes = useStyles();

	const [ noteData, setNoteData ] = useState({
		dogName: dogName,
		notes: ''
	})

	const [ formData, setFormData ] = useState({
		formNotes: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('TARGET', e.target);
		setNoteData({ ...noteData, notes: e.target.value });

    clear();
	}

	const clear = () => {

		setFormData({
			notes: ''
	  })
	}

	return (
		<>
		<form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
				<TextField
				name='your notes'
				variant='outlined'
				label='Notes'
				fullWidth
				//value={formData.formNotes}
				onChange={(e) => {
					console.log('THIS IS E!!!', e);
          setFormData({ ...formData, formNotes: e.target.value});
					setNoteData({ ...noteData, notes: e.target.value });
				}}
				/>

				<Button display='inline' className={classes.buttonSubmit} variant='contained' color='primary' size='small' type='submit'>Submit</Button>
				<Button display='inline' variant='contained' color='secondary' size='small' onClick={clear}>Clear</Button>
			</form>
		</>
	)
}

export default Form;