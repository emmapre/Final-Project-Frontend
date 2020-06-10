import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user, signin } from '../reducers/user'
import { Button } from 'lib/Button'
import styled from 'styled-components/macro'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  
  @media (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
`
const Title = styled.h1`
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
  color: #5D5D5D;
  text-align: center;
`

export const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.signin.accessToken);
  const errorMessage = useSelector((store) => store.user.signin.errorMessage);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = event => {
    event.preventDefault()
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (accessToken) {
      history.push('/cakemaker')
    }
  }, [accessToken]);

  return (
    <Content>
      <Title>Sign in.</Title>
      <Form onSubmit={handleSignin}>
        <Label>
          E-mail
        <input
            type='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Label>
        <Label>
          Password
        <input
            type='password'
            required
            minLength='4'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>
        <div>
          <Button
            buttonText='Sign In'
            backgroundColor='#F86AB0'
            color='#5D5D5D'
            borderProperties='solid 2px #5D5D5D'
            width='120px'
            fontFamily='"Varela Round", sans-serif'
          />
          <Link to='/'>
            <Button
              buttonText='Go back'
              backgroundColor='#F8EAD7'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              color='#5D5D5D'
              fontFamily='"Varela Round", sans-serif'
            />
          </Link>
        </div>
        {errorMessage && <Message> {`${errorMessage}`}</Message>}
      </Form>
    </Content>

  )
}