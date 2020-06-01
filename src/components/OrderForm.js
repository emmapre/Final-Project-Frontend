import React from 'react'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'


const OrderFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const OrderForm = () => {
  return (
    <OrderFormContainer>
      <label>
        <input value></input>
      </label>


      <Button
        buttonText='Place your Order'
        backgroundColor='#713939'
        borderProperties='solid 2px #5D5D5D'
        width='120px'
        color='#fff'
      />
    </OrderFormContainer>


  )



}