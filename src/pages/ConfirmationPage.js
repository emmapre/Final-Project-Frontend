import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'


const Content = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  /* height: 50vh;  */ 
  h2{
    color: #5D5D5D;
    margin: 0 0 10px 0;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin: auto;
    margin-top: 40px;
  }
`

const Message = styled.p`
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`

export const ConfirmationPage = () => {
  const accessToken = useSelector((store) => store.user.signin.accessToken)

  return (
    <Content>
      {accessToken && (
        <h2>
          Your order is placed. We will bake your cake as soon as possible!
        </h2>
      )}
      {!accessToken && (
        <h2>
          The cake is a lie.
        </h2>
      )}

      <Message>Click the button to make more cakes.</Message>
      <Link to='/cakemaker'>
        <Button
          buttonText='Cake Maker'
          backgroundColor='#FBC4C4'
          color='#5D5D5D'
          borderProperties='solid 2px #5D5D5D'
          width='120px'
          fontFamily='"Varela Round", sans-serif'
        />
      </Link>

    </Content>
  )
}