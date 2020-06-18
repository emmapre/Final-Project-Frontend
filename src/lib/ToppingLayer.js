import React from 'react'
import styled, { css } from 'styled-components/macro'


const ToppingLayerIngredientContainer = styled.div`
  display: flex;
  width: ${props => props.width};
  justify-content: space-around;
  margin: 5px 0 5px 0;

`

const ToppingLayerIngredient = styled.div`
  height: ${props => props.circleHeight};
  width:${props => props.circleWidth};
  border-radius: 50%;
  background-color: ${props => props.background};

`

export const ToppingLayer = ({
  ingredientName,
  backgroundColor,
  width,
  circleWidth,
  circleHeight
}) => {
  return (
    <ToppingLayerIngredientContainer
      width={width}
    >
      <ToppingLayerIngredient
        circleHeight={circleHeight}
        circleWidth={circleWidth}
        background={backgroundColor}
      >

      </ToppingLayerIngredient>
      <ToppingLayerIngredient
        circleHeight={circleHeight}
        circleWidth={circleWidth}
        background={backgroundColor}
      >

      </ToppingLayerIngredient>
      <ToppingLayerIngredient
        circleHeight={circleHeight}
        circleWidth={circleWidth}
        background={backgroundColor}
      >

      </ToppingLayerIngredient>
    </ToppingLayerIngredientContainer>
  )
}

