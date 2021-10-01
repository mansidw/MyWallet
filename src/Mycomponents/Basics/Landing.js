import React,{ useEffect, useState,Suspense } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { Footer } from '../Basics/Footer'
import { Header } from '../Basics/Header'
import Button from '@material-ui/core/Button';
// import DispCard from './DispCard';
import '../../css/landing.css'
import {useTranslation} from "react-i18next";


const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      
    }
  }));

const Pforall = () => {
    const classes = useStyles();
    const [message,setMessage] = useState([])
    

    useEffect(()=>{
        axios.get('http://localhost:5000/time')
        .then(response => {
            setMessage(response.data.time)
        })
        .catch(error => {
          console.log(error)
        })
      }, [])

      const {t, i18n} = useTranslation('common');
   

    return (
        <Suspense fallback="loading">
        <div>
            <Header/>

            <main >
            <div className={classes.heroContent} style={{backgroundColor:'#082032'}}>
            <Container maxWidth="sm" >
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{'fontFamily':'Raleway','color':'white'}}>
                {t('PharmaGeddon')}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph style={{'fontFamily':'Raleway','color':'white'}}>
                One step ahead!<br/>
                Just upload the prescription and get the medicines delivered
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                        <Button component={RouterLink} to="/know" variant="contained" color="primary" style={{'fontFamily':'Raleway','backgroundColor':'#334756','color':'white'}}>
                            Know More
                        </Button>
                        </Grid>
                        {/*<Grid item>
                        <Button variant="outlined" color="primary" style={{'fontFamily':'Raleway','backgroundColor':'#082032','color':'white'}}>
                            Secondary action
                        </Button>
                        </Grid>*/}
                    </Grid>
                </div>
            </Container>
            </div>
           
        </main>
        {/*<Footer/>*/}
            
        </div>
        </Suspense>
    )
}

export default Pforall
