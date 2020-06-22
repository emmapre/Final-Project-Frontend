import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { CakeCard } from '../lib/CakeCard'
import { fetchCakeOrders } from '../reducers/previousCakeOrders'


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
const LatestCakeOrders = styled.section`
  display: flex;
  flex-wrap: wrap;
`


export const Latest = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchCakeOrders())
  }, [dispatch])

  const previousCakeOrders = useSelector(
    (store) => store.previousCakeOrders.allCakeOrders)

  return (
    <Content>
      <Message>
        The latest ordered cakes.
    </Message>

      <LatestCakeOrders>
        {previousCakeOrders.map((cakeOrder) => (
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

        ))}
      </LatestCakeOrders>
    </Content>
  )
}