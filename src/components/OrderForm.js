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
        Name
        <input type='text' />
      </label>
      <label>
        Adress
        <input type='text' />
      </label>
      <label>
        Phone number
        <input type='text' />
      </label>
      <label>
        How do you want to pay?
        <input type="radio" name="pay" value="swish" />
        <label for="swish">Swish</label>
        <input type="radio" name="pay" value="card" />
        <label for="card">Card</label>
        <input type="radio" name="pay" value="cash" />
        <label for="cash">Cash</label>
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