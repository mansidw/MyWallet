import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#87A7B3",
    padding: "20px 10px 0 10px",
    bottom: '0',
    width: '100%',
    position: 'fixed',
    marginTop:'20px'
  },
}));


export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom style={{'fontFamily':'Raleway','fontWeight':'bold'}}>
            MEDICINE MADE EASY!
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p" style={{'fontFamily':'Raleway'}}>
            We serve you. For more info Call 123-456-789
            </Typography>
            <Copyright />
      </footer>
    )
}

