import React, { useState } from 'react'
import { Alert } from "react-bootstrap"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  appbar:{
    backgroundColor: "#87A7B3",
    fontFamily: "Raleway",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color:'white'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export const Header = () => {
    const [error, setError] = useState("")
    const history = useHistory()
    const classes = useStyles();

    return (
        <>
    <CssBaseline />
    {error && <Alert variant="danger">{error}</Alert>}
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap className={classes.appbar} style={{ flex: 1 }}></Typography>
          <Button color="primary" className="button" component={RouterLink} to="/" size="large" variant="contained" style={{'backgroundColor':'#082032','margin':'5px','textDecoration':'none'}}>
            Home
          </Button>
          
          <Button color="primary" className="button" component={RouterLink} to="/myhome" size="large" variant="contained" style={{'backgroundColor':'#082032','margin':'5px','textDecoration':'none'}}>
            My Profile
          </Button>


          <Button color="primary" className="button" component={RouterLink} size="large" variant="contained" to="/login" style={{'backgroundColor':'#082032','margin':'5px','textDecoration':'none'}}>
            Logout
            </Button>
            
           
            

          

        </Toolbar>
      </AppBar>
      </>
    )
}
