import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user, signup } from '../reducers/user'
import { Button } from 'lib/Button'
import styled from 'styled-components/macro'

const Content = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  /* height: 50vh;  */ 
  
  @media (min-width: 768px) {
    width: 50%;
   margin: auto;
   
  }
`
const Title = styled.h2`
  color: #5D5D5D;
  font-family: 'Varela Round', sans-serif;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const Message = styled.p`
 font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`
const StyledLink = styled(Link)`
    color: #5D5D5D;
`

export const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  // const accessToken = useSelector((store) => store.user.signin.accessToken);
  const errorMessage = useSelector((store) => store.user.signin.errorMessage);
  const statusMessage = useSelector((store) => store.user.signin.statusMessage);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSignUp = event => {
    event.preventDefault()
    dispatch(signup(name, email, password))
    setName('')
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (statusMessage) {
      history.push('/signin')
    }
  }, [statusMessage]);


  return (

    <Content>
      <Title>Sign up.</Title>
      <Form onSubmit={handleSignUp}>
        <Label>
          Name
        <input
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)} />
        </Label>
        <Label>
          E-mail
        <input type='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </Label>
        <Label>
          Password
        <input type='password'
            required
            minLength='4'
            value={password} onChange={(event) => setPassword(event.target.value)} />
        </Label>
        <div>
          <Button
            type='submit'
            buttonText='Sign Up'
            backgroundColor='#FBC4C4'
            borderProperties='solid 2px #5D5D5D'
            width='120px'
            color='#5D5D5D'
            fontFamily='"Varela Round", sans-serif'
          />
          <Link to='/'>
            <Button
              buttonText='Go back'
              backgroundColor='#F7E3B2'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              color='#5D5D5D'
              fontFamily='"Varela Round", sans-serif'
            />
          </Link>
        </div>
        <Message>Already have an account? <StyledLink to='/signin'>Go to the sign in page.</StyledLink></Message>
        {statusMessage && <Message> {`${statusMessage}`}</Message>}
        {errorMessage && <Message> {`${errorMessage}`}</Message>}
      </Form>
    </Content>

  )
}