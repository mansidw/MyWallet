import React, { useRef, useState } from "react"
import { Form, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
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

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
 
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const classes = useStyles();
  

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await axios.post('/signup', {
            email: emailRef.current.value,
            password: passwordRef.current.value
        });
      history.push("/add_details")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <Card className="provide_color">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <ColorButton variant="contained" color="primary" disabled={loading} className={classes.margin} className="w-100 mt-4" type="submit">
                Sign Up
            </ColorButton>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}