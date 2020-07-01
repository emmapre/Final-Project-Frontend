import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { submitCakeOrder } from '../reducers/cakeOrder'
import { Button } from '../lib/Button'

const OrderFormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #C9E0DC;
  width: 100vw;
  height: 400px;

  h2{
    color: #5D5D5D;
    margin: 0 0 10px 0;
  }

  @media (min-width: 768px) {
    max-width: 400px;
  }
`
const Message = styled.p`
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
  margin: 5px;
`

const IngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OrderForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const accessToken = useSelector((store) => store.user.signin.accessToken)

  const userId = useSelector((store) => store.user.signin.userId)

  const chosenIngredients = useSelector((store) => store.cakeOrder.chosenIngredients)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(submitCakeOrder(
      chosenIngredients,
      userId,
      accessToken))
    history.push('/confirmation')
  }

  return (
    <div>

      {accessToken && (
        <OrderFormContainer>
          <h2>This is your cake:</h2>
          <IngredientContainer>
            {chosenIngredients.map((ingredient) => (
              <Message
                key={ingredient.layerName}
              >{ingredient.layerName}: {ingredient.ingredientSpecs.ingredientName}</Message>
            ))}
          </IngredientContainer>
          <ButtonContainer>
            <Link to='/cakemaker'>
              <Button
                buttonText='Change Order'
                backgroundColor='#F7E3B2'
                borderProperties='solid 2px #5D5D5D'
                width='120px'
                fontFamily='"Varela Round", sans-serif'
              />
            </Link>
            <Button
              type='submit'
              buttonText='Place your Order'
              backgroundColor='#FBC4C4'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              fontFamily='"Varela Round", sans-serif'
              onClick={handleSubmit}
            />
          </ButtonContainer>
        </OrderFormContainer >
      )}

      {!accessToken && (
        <OrderFormContainer>
          <Message>
            You need to sign in to place an order.
          </Message>
          <ButtonContainer>
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
          </ButtonContainer>
        </OrderFormContainer>
      )}

    </div>
  )
}