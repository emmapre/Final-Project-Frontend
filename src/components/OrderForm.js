import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'
import { submitCakeOrder } from '../reducers/cakeOrder'

const OrderFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #C9E0DC;
`

const Message = styled.p`
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`

const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`



export const OrderForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const accessToken = useSelector((store) => store.user.signin.accessToken)

  const userId = useSelector((store) => store.user.signin.userId)
  const name = useSelector((store) => store.user.signin.name)

  const cakeOrder = useSelector((store) => store.cakeOrder.chosenIngredients)


  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(submitCakeOrder(

      cakeOrder,
      userId,
      accessToken))
    history.push('/confirmationPage')
  }


  return (
    <div>

      {accessToken && (
        <>
          {/* <CakePreview /> */}
          <OrderFormContainer>

            <p>{name}</p>
            {/* <p>{cakeOrder}</p> */}
            {/* <p>{cakeOrder}</p> */}

            <Link to='/cakemaker'>
              <Button
                buttonText='Change Order'
                backgroundColor='#F7E3B2'
                borderProperties='solid 2px #5D5D5D'
                width='120px'
              />
            </Link>
            <Button
              buttonText='Place your Order'
              backgroundColor='#FBC4C4'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              onClick={handleSubmit}
            />
          </OrderFormContainer >
        </>
      )}

      {!accessToken && (
        <OrderFormContainer>
          <Message>
            You need to sign in to place an order.
          </Message>
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

        </OrderFormContainer>
      )}

    </div>
  )
}