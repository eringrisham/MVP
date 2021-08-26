import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { AppBar, Button, Container, InputBase, Paper, TextField, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';
import DogLogo from '../../../images/shutterstock_1518711302.svg'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

const Form = ({ }) => {

	const [ postData, setPostData ] = useState({
		yourName: '',
		title: '',
		message: '',
		tags: '',
		selectedFile: ''
	})

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
    clear();
	}

	const clear = () => {
		setPostData({
			yourName: '',
			title: '',
			message: '',
			tags: '',
			selectedFile: ''
	  })
	}

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
		</Container>
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
				<Typography style={{marginRight: '50%', marginLeft: '10%'}} variant='h5'>Add a dog!</Typography>
				<TextField
				name='your name'
				variant='outlined'
				label='Your Name'
				fullWidth
				value={postData.yourName}
				onChange={(e) => setPostData({ ...postData, yourName: e.target.value })}
				/>
        <TextField
				name='title'
				variant='outlined'
				label='Title'
				fullWidth
				value={postData.title}
				onChange={(e) => setPostData({ ...postData, title: e.target.value })}
				/>
				<TextField
				name='message'
				variant='outlined'
				label='Message'
				fullWidth
				value={postData.message}
				onChange={(e) => setPostData({ ...postData, message: e.target.value })}
				/>
				<TextField
				name='tags'
				variant='outlined'
				label='Tags'
				fullWidth
				value={postData.tags}
				onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
				/>
				<div className={classes.fileInput}>
					<FileBase type='file' multiple={false} onDone={({ base64 }) => {
            setPostData({ ...postData, selectedFile: base64 })
					}} />
				</div>
				<Button display='inline' className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit'>Submit</Button>
				<Button display='inline' style={{marginRight: '55%'}} variant='contained' color='secondary' size='small' onClick={clear}>Clear</Button>
			</form>
		</Paper>
		</>
	)
}

export default Form;