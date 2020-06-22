import React from 'react'
import { Link } from 'react-router-dom'
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
const Title = styled.h1`
  color: #5D5D5D;
  font-family: 'Varela Round', sans-serif;
  text-align: center;
`

const Message = styled.p`
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`

const StartCakeMaker = styled(Link)` 
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LandingPage = () => {

  return (
    <Content>
      <Title>This is the CakeMaker</Title>
      <Message>Order your special cake where you choose the ingredients. </Message>
      <Message>Click the button to start.</Message>
      <div>
        <StartCakeMaker to='/cakemaker'>
          <Button
            buttonText='Start the Cake Maker'
            backgroundColor='#9DBFA4'
            color='#5D5D5D'
            borderProperties='solid 2px #5D5D5D'
            width='300px'
            height='80px'
            fontFamily='"Varela Round", sans-serif'
            fontSize='22px'
          />
        </StartCakeMaker>

        <SignContainer>
          <Link to='/signup'>
            <Button
              buttonText='Sign Up'
              backgroundColor='#FBC4C4'
              color='#5D5D5D'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              fontFamily='"Varela Round", sans-serif'
            />
          </Link>
          <Link to='/signin'>
            <Button
              buttonText='Sign In'
              backgroundColor='#F7E3B2'
              color='#5D5D5D'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              fontFamily='"Varela Round", sans-serif'
            />
          </Link>
        </SignContainer>
      </div>
    </Content>
  )
}