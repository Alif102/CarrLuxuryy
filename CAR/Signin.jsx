import React from 'react'
import { Form , Button, NavLink} from 'react-bootstrap'
import {BsGoogle, BsApple, BsFacebook } from "react-icons/bs"

const Signin = () => {
  return (
    <div>
      <section className='signin-sec'>
      <div className='row'>
        <div className='col-lg-10 mx-auto'>

          <div className='row'>
            <div className='col-lg-7 mx-auto'>
             
            <Form className='signFormClass'>
            <h2>Sign In</h2>
              <p style={{color: 'red'}}>New to Cars.com? Sign Up. Are you a dealer?</p>
              <Form.Group className="mb-3 text-align-left" controlId="formBasicEmail">
                <Form.Label style={{color: 'green'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{color: 'green'}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                Minimum of eight characters
                </Form.Text>
                <NavLink style={{color: 'red'}}>Forget Passward?</NavLink>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" style={{width: '80%'}}>
                Sign In
              </Button>
            </Form>
            </div>
            <div className='col-lg-3 mx-auto'>
              
              <div className='re-icon'>
              <p>Connect With Social</p>
              <button className='icon-btn'><BsFacebook/>Sign In with facebook</button>
              <button className='icon-btn'><BsGoogle/>Sign In with Google</button>
              <button className='icon-btn'><BsApple/>Sign In with Apple</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Signin