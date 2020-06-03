import React from 'react'
import styled from 'styled-components/macro'


const CakeLayerIngredient = styled.div`
  height: 20px;
  width: 100px;
  background-color: red;
`


export const CakeLayer = ({

  layer
}) => {
  return (
    <CakeLayerIngredient>
      <p>{layer.name}</p>
    </CakeLayerIngredient>
  )
}

