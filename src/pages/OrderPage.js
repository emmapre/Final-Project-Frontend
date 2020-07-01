import React from 'react'
import styled from 'styled-components/macro'
import { CakePreview } from '../components/CakePreview'
import { OrderForm } from '../components/OrderForm'

const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 40px;
  }
`

export const OrderPage = () => {
  return (
    <OrderContainer>
      <CakePreview />
      <OrderForm />
    </OrderContainer>
  )
}