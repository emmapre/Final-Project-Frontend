import React from 'react'
import styled, { css } from 'styled-components/macro'


const CakeLayerIngredient = styled.div`
  /* height: ${props => props.height ? props.height : '50px'} */
  height: ${props => props.height};
  width:${props => props.width};
  border-radius: 5px;
  background-color: ${props => props.background};
  margin: ${props => props.margin};
  p{
    margin: 0;
  }
`

export const CakeLayer = ({
  height,
  width,
  ingredientName,
  backgroundColor,
  margin
}) => {
  return (
    <CakeLayerIngredient
      height={height}
      width={width}
      background={backgroundColor}
      margin={margin}
    >
      {/* {ingredientName && <p>{ingredientName}</p>} */}
    </CakeLayerIngredient>
  )
}

