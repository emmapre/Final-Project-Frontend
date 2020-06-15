import React from 'react'
import useSelector from 'react-redux'

import { layers } from '../reducers/layers'
import { cakeOrder } from '../reducers/cakeOrder'
import styled, { css } from 'styled-components/macro'


const ToppingLayerIngredientContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  margin: 5px 0 5px 0;

`

const ToppingLayerIngredient = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${props => props.background};

  p{
    margin: 0;
  }
`

export const ToppingLayer = ({
  ingredientName,
  backgroundColor
}) => {
  return (
    <ToppingLayerIngredientContainer>
      <ToppingLayerIngredient
        background={backgroundColor}
      >
        {/* <p>{ingredientName}</p> */}
      </ToppingLayerIngredient>
      <ToppingLayerIngredient
        background={backgroundColor}
      >
        {/* <p>{ingredientName}</p> */}
      </ToppingLayerIngredient>
      <ToppingLayerIngredient
        background={backgroundColor}
      >
        {/* <p>{ingredientName}</p> */}
      </ToppingLayerIngredient>
    </ToppingLayerIngredientContainer>
  )
}

