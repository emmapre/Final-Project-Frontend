import React from 'react'
import styled from 'styled-components/macro'
import { CakeLayer } from '../lib/CakeLayer'
import { ToppingLayer } from '../lib/ToppingLayer'

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 64px;
  min-height: 36px;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 0 16px 0 16px;
  border-radius: 3px;
  border: 2px solid #5D5D5D;
  color: 
    ${props => props.color || '#000'};
  margin: 20px;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
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
  layerBackgroundColor,
  circleHeight,
  circleWidth
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
        backgroundColor={toppingColor}
        ingredientName={toppingName}
        height='10px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={toppingColor}
        ingredientName={toppingName}
        height='25px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={toppingColor}
        ingredientName={toppingName}
        height='15px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={toppingColor}
        ingredientName={toppingName}
        height='25px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={toppingColor}
        ingredientName={toppingName}
        height='15px'
        width='100px'
        margin='2px 0'
      />
      <CakeLayer
        backgroundColor={toppingColor}
        ingredientName={toppingName}
        height='25px'
        width='100px'
        margin='2px 0'
      />



      {/* </CakeLayerPreview>
      </CakeLayerPreviewContent> */}


      <p>Created by: *username*</p>
    </StyledCard >
  )
}