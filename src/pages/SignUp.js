import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user, signup } from '../reducers/user'
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
const Credit = styled.a`
  color: #5D5D5D;
  font-size: 10px;
`

export const SignUp = () => {
  const dispatch = useDispatch();
  // const accessToken = useSelector((store) => store.user.signin.accessToken);
  const errorMessage = useSelector((store) => store.user.signin.errorMessage);
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
            backgroundColor='#00D3C2'
            borderProperties='solid 2px #5D5D5D'
            width='120px'
            color='#5D5D5D'
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