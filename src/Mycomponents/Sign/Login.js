import React, { useRef, useState } from "react"
import { Form, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { blueGrey } from '@material-ui/core/colors';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'



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

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault()
    
    alert(emailRef.current.value)
    try {
      setError("")
      setLoading(true)
      await axios.post('/signup', {
            email: emailRef.current.value,
            password: passwordRef.current.value
        });
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
     <Card className="provide_color">
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <ColorButton variant="contained" color="primary" disabled={loading} className={classes.margin} className="w-100 mt-4" type="submit">
                Login
            </ColorButton>
          </Form>
          {/*<div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>*/}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}