import React from 'react'
import styled from 'styled-components/macro'

// const StyledButton = styled.button`
//   min-width: 64px;
//   min-height: 36px;
//   width: ${props => props.width};
//   padding: 0 16px 0 16px;
//   border-radius: 3px;
//   background-color: ${props => props.background};
//   border: ${props => props.border};
//   color: {
//     ${props => props.color} : 'white'
//   }
//   margin: 20px;
//   font-family: ${props => props.fontFamily};
// `

const CakeLayerIngredient = styled.div`
  height: 20px;
  width: 100px;
  background-color: red;
`


export const CakeLayer = ({
  // onClick,
  // icon,
  // buttonText,
  // backgroundColor,
  // textColor,
  // borderProperties,
  // width,
  // fontFamily
  layer
}) => {
  return (
    <CakeLayerIngredient>
      <p>{layer.ingredient}</p>
    </CakeLayerIngredient>
  )
}

