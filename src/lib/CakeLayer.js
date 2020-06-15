import React from 'react'
import styled, { css } from 'styled-components/macro'


const CakeLayerIngredient = styled.div`
  /* height: ${props => props.height ? props.height : '50px'} */
  height: ${props => props.height};
  width: 200px;
  border-radius: 5px;
  background-color: ${props => props.background};
  margin: 5px 0 5px 0;
  p{
    margin: 0;
  }
`

export const CakeLayer = ({
  height,
  ingredientName,
  backgroundColor
}) => {
  return (
    <CakeLayerIngredient
      height={height}
      background={backgroundColor}
    >
      {/* <p>{ingredientName}</p> */}
    </CakeLayerIngredient>
  )
}

