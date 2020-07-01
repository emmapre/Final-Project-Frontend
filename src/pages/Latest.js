import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { fetchCakeOrders } from '../reducers/previousCakeOrders'
import { BeatLoader } from 'react-spinners'
import { CakeCard } from '../lib/CakeCard'

const LatestCakeOrdersWrapper = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  
  @media (min-width: 768px) {
  max-width: 800px;
   margin: auto;
  }
`
const Title = styled.h2`
  color: #5D5D5D;
  font-family: 'Varela Round', sans-serif;
`

const Message = styled.p`
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`

const LoaderWrapper = styled.div`
 margin-top: 40px;
`

const LatestCakeOrders = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`

export const Latest = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.ui.isLoading)

  useEffect(() => {
    dispatch(fetchCakeOrders())
  }, [dispatch])

  const previousCakeOrders = useSelector(
    (store) => store.previousCakeOrders.allCakeOrders)

  return (
    <LatestCakeOrdersWrapper>
      <Title>
        The latest ordered cakes
    </Title>
      <Message>
        Take a look at what other people ordered.
    </Message>

      <LatestCakeOrders>

        {isLoading &&
          <LoaderWrapper>
            <BeatLoader color='#5D5D5D' size='25' />
          </LoaderWrapper>

        }

        {!isLoading &&
          previousCakeOrders.map((cakeOrder) => (
            <CakeCard
              key={cakeOrder._id}
              toppingColor={cakeOrder.chosenIngredients[0] ? cakeOrder.chosenIngredients[0].ingredientSpecs.ingredientColor : 'gray'}
              coatingColor={cakeOrder.chosenIngredients[1] ? cakeOrder.chosenIngredients[1].ingredientSpecs.ingredientColor : 'gray'}
              spongeColor={cakeOrder.chosenIngredients[2] ? cakeOrder.chosenIngredients[2].ingredientSpecs.ingredientColor : 'gray'}
              firstFillingColor={cakeOrder.chosenIngredients[3] ? cakeOrder.chosenIngredients[3].ingredientSpecs.ingredientColor : 'gray'}
              secondFillingColor={cakeOrder.chosenIngredients[4] ? cakeOrder.chosenIngredients[4].ingredientSpecs.ingredientColor : 'gray'}
              userName={cakeOrder.userId ? cakeOrder.userId.name : 'Unknown'}
            >
            </CakeCard>
          ))
        }

      </LatestCakeOrders>
    </LatestCakeOrdersWrapper>
  )
}