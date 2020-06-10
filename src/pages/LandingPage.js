import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Button'
import styled from 'styled-components/macro'
import { fetchLayerIngredients, layers } from '../reducers/layers'
import { useSelector, useDispatch } from 'react-redux'

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
  text-align: center;
`

export const LandingPage = () => {
  const dispatch = useDispatch()

  return (
    <Content>
      <Title>This is the CakeMaker.</Title>
      <p>Click the button to start making your special cake.</p>
      <div>
        <Link to='/cakemaker'>
          <Button
            buttonText='Start the Cake Maker'
            backgroundColor='#FBC4C4'
            color='#5D5D5D'
            borderProperties='solid 2px #5D5D5D'
            width='240px'
            fontFamily='"Varela Round", sans-serif'
          />
        </Link>
        <Link to='/signup'>
          <Button
            buttonText='Sign Up'
            backgroundColor='#00D3C2'
            color='#5D5D5D'
            borderProperties='solid 2px #5D5D5D'
            width='120px'
            fontFamily='"Varela Round", sans-serif'
          />
        </Link>
        <Link to='/signin'>
          <Button
            buttonText='Sign In'
            backgroundColor='#F86AB0'
            color='#5D5D5D'
            borderProperties='solid 2px #5D5D5D'
            width='120px'
            fontFamily='"Varela Round", sans-serif'
          />
        </Link>
      </div>
    </Content>
  )
}