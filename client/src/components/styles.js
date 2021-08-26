import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontFamily: 'Rampart One'
  },
  image: {
    marginLeft: '15px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      marginRight: '50%',
      marginLeft: '10%'
    },
  },
  paper: {
    padding: theme.spacing(2)
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: '50%',
    marginLeft: '10%'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    marginRight: '50%',
    marginLeft: '10%'
  },
  buttonSubmit: {
    marginBottom: 10,
  }
}));
