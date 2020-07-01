import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  min-width: 64px;
  min-height: 36px;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 0 16px 0 16px;
  border-radius: 3px;
  background-color: ${props => props.background};
  border: ${props => props.border};
  color: 
    ${props => props.color || '#000'};
  margin: 20px;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};

  &:hover{
    cursor: pointer;
  }
`

const Icon = styled.span`
   padding-right: 8px;
  padding-left: -4px;
`

export const Button = ({
  onClick,
  icon,
  buttonText,
  backgroundColor,
  textColor,
  borderProperties,
  width,
  height,
  fontFamily,
  fontSize
}) => {
  return (

    <StyledButton
      onClick={onClick}
      background={backgroundColor}
      border={borderProperties}
      width={width}
      height={height}
      color={textColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
    >

      {icon && <Icon>{icon}</Icon>
      }
      {buttonText}

    </StyledButton >
  )
}

