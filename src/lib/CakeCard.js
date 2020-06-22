import React from 'react'
import styled from 'styled-components/macro'
import { CakeLayer } from '../lib/CakeLayer'
import { ToppingLayer } from '../lib/ToppingLayer'

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 200px;
  padding: 0 16px 0 16px;
  border-radius: 3px;
  border: 2px solid #5D5D5D;
  color: 
    ${props => props.color || '#000'};
  margin: 20px;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`

const Message = styled.p`
background-color: #C9E0DC;
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`

export const CakeCard = ({
  textColor,
  borderProperties,
  width,
  height,
  fontFamily,
  fontSize,
  cakeName,
  toppingColor,
  toppingName,
  coatingColor,
  coatingName,
  spongeColor,
  spongeName,
  firstFillingColor,
  firstFillingName,
  secondFillingColor,
  secondFillingName,
  layerBackgroundColor,
  circleHeight,
  circleWidth,
  userName

}) => {
  return (
    < StyledCard
      border={borderProperties}
      width={width}
      height={height}
      color={textColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
      circleHeight={circleHeight}
      circleWidth={circleWidth}
    >
      {/* 
      <CakeLayerPreviewContent>
        <CakeLayerPreview> */}

      <ToppingLayer
        backgroundColor={toppingColor}
        ingredientName={toppingName}
        width='100px'
        circleHeight='15px'
        circleWidth='15px'
      />
      <CakeLayer
        backgroundColor={coatingColor}
        ingredientName={coatingName}
        height='10px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={spongeColor}
        ingredientName={spongeName}
        height='25px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={firstFillingColor}
        ingredientName={firstFillingName}
        height='15px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={spongeColor}
        ingredientName={spongeName}
        height='25px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={secondFillingColor}
        ingredientName={secondFillingName}
        height='15px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={spongeColor}
        ingredientName={spongeName}
        height='25px'
        width='100px'
        margin='2px 0'
      />



      {/* </CakeLayerPreview>
      </CakeLayerPreviewContent> */}


      <Message>Ordered by: {userName}</Message>
    </StyledCard >
  )
}