import React from 'react'
import { CakePreview } from '../components/CakePreview'
import { OrderForm } from '../components/OrderForm'
import styled from 'styled-components/macro'

const OrderContainer = styled.div`
display: flex;
justify-content: center;
`

export const OrderPage = () => {
  return (
    <OrderContainer>
      <CakePreview />
      <OrderForm />
    </OrderContainer>
  )
}