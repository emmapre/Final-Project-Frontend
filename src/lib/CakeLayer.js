import React from 'react'
import useSelector from 'react-redux'
import styled from 'styled-components/macro'
import { layers } from '../reducers/layers'
import { cake } from '../reducers/cake'

const CakeLayerIngredient = styled.div`
  height: 20px;
  width: 100px;
  background-color: red;
`

export const CakeLayer = () => {

  return (
    <CakeLayerIngredient>
      {/* <p>{layer.name}</p> */}
    </CakeLayerIngredient >
  )
}

