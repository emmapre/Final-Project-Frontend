import React from 'react'
import useSelector from 'react-redux'

import { layers } from '../reducers/layers'
import { cakeOrder } from '../reducers/cakeOrder'
import styled, { css } from 'styled-components/macro'


const CakeLayerContainer = styled.div`
display: flex;

`

const CakeLayerIngredient = styled.div`
  height: 50px;
  width: 200px;
  border-radius: 5px;
  background-color: ${props => props.background};
  /* background-color:  ${props => props.backgroundColor ? props.backgroundColor : 'gray'}; */
  p{
    margin: 0;
  }
`

export const CakeLayer = ({
  ingredientName,
  backgroundColor
}) => {
  return (
    <CakeLayerContainer>

      <CakeLayerIngredient
        background={backgroundColor}
      >
        <p>{ingredientName}</p>
      </CakeLayerIngredient>
    </CakeLayerContainer>
  )
}

