import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'
import { fetchLayerIngredients } from '../reducers/layers'
import { cakeOrder } from '../reducers/cakeOrder'
import { signin } from '../reducers/user'

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

const Message = styled.p`
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`

export const ConfirmationPage = () => {
  // const accessToken = useSelector((store) => store.user.signin.accessToken)

  return (
    <Content>
      <p>Cake order status</p>
      {/* {accessToken && (
        <Message>
          Your order is placed. We will bake your cake as soon as possible!
        </Message>
      )}
      {!accessToken && (
        <Message>
          The cake is a lie.
        </Message>
      )} */}



      <div>
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
      </div>



    </Content>
  )
}