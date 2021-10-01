import React, { useRef, useState, useEffect } from "react"
import { Form, Card, Alert } from "react-bootstrap"
import axios from 'axios'
import { Link, useHistory } from "react-router-dom"
import {withStyles, makeStyles} from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from '@material-ui/core/Button';
import Myheader from '../Basics/Myheader'



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blueGrey[500]),
    fontFamily:'Raleway',
    backgroundColor: blueGrey[500],
    '&:hover': {
      backgroundColor: blueGrey[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
      margin: theme.spacing(1),
  },
  
}));


export default function Myhome() {
  const classes = useStyles();
  const [open, setOpen] = useState(true)
  const [message,setMessage] = useState()
  const emailRef = useRef()
  const nameRef = useRef()
  const locationRef = useRef()
  const phoneRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(()=>{
      //axios get method to fetch the user data for displaying in the form
    console.log("mansi")
    setMessage({
        'email':'mansi.dwivedi@spit.ac.in',
        'name':'mansi dwivedi',
        'phone':123456789,
        'location':'mumbai'
    })
    //firestore.collection("users").doc(currentUser.uid)
    //.get()
    //.then((doc) => {
    //  console.log("mansi1")
    //    if (doc.exists) {
    //      console.log("mansi2")
    //      setMessage(doc.data())
    //      console.log(doc.data())
    //  }})
    //  .catch((error) => {
    //    console.log("Error getting document:", error);
    //});

  },[])

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== message.email) {
      promises.push(
        axios.post(" ",{
            email:emailRef.current.value,
        })
      )
    }
    if (nameRef.current.value !== message.name) {
      promises.push(
        //axios post request to change name
        axios.post(" ",{
            name:nameRef.current.value,
        })
      )
    }
    if (locationRef.current.value !== message.location) {
      promises.push(
        //axios post request to change location
        axios.post(" ",{
            location:locationRef.current.value,
        })
    )
    }
    if (phoneRef.current.value !== message.phone) {
      promises.push(
        //axios post request to change phone number
        axios.post(" ",{
            phone:phoneRef.current.value,
        })
    )
    }
    if (passwordRef.current.value) {
      promises.push(
          //axios post request to change password
          axios.post(" ",{
            password:passwordRef.current.value,
        })
      )
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
    <Myheader/>
    <div className="outer">
    <div className="inner">

      <Card className="provide_color">
        <Card.Body>
          <h2 className="text-center mb-4" style={{color:'black'}}>My Details</h2>
          <p className="text-center" style={{color:'black'}}>Click on the field you want to update</p>
          {error && <Alert variant="danger">{error}</Alert>}
          {message ? 
          <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        ref={nameRef}
                        required
                        defaultValue={message.name}
                    />
                    </Form.Group>

                    <Form.Group id="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        ref={locationRef}
                        required
                        defaultValue={message.location}
                    />
                    </Form.Group>

                    <Form.Group id="phone">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="text"
                        ref={phoneRef}
                        required
                        defaultValue={message.phone}
                    />
                    </Form.Group>

                    <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        ref={emailRef}
                        required
                        defaultValue={message.email}
                    />
                    </Form.Group>

                    <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        ref={passwordRef}
                        placeholder="Leave blank to keep the same"
                    />
                    </Form.Group>

                    <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                        type="password"
                        ref={passwordConfirmRef}
                        placeholder="Leave blank to keep the same"
                    />
                    </Form.Group>

                <ColorButton variant="contained" color="primary" disabled={loading} className={classes.margin} className="w-100 mt-4" type="submit">
                    Update
                </ColorButton>

                </Form>:<></>}
                        
          
          </Card.Body>
        </Card>
      </div>
      </div>
    

    
    </>
  )
}