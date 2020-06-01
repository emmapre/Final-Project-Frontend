import React from 'react'
import styled from 'styled-components/macro'


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 20px;
  background-color: #713939;
`

const LogoTitleContainer = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  height: 50px;
  width: 50px;
  background-color: #FBC4C4;
`

const Title = styled.h1`
  margin-left: 20px;
`

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40%;
  list-style: none;
`



export const Header = () => {
  return (
    <StyledHeader>
      <LogoTitleContainer>
        <Logo />
        <Title>CakeMaker</Title>
      </LogoTitleContainer>
      <MenuList>
        <a href='www.google.com'><li>Maker</li></a>
        <a href='www.google.com'><li>Info</li></a>
        <a href='www.google.com'><li>Latest</li></a>
        <a href='www.google.com'><li>Admin</li></a>
      </ MenuList>
    </StyledHeader>
  )
}


// export const Button = ({
//   onClick,
//   icon,
//   buttonText,
//   backgroundColor,
//   textColor,
//   borderProperties,
//   width,
//   fontFamily
// }) => {
//   return (
//     < StyledButton
//       onClick={onClick}
//       background={backgroundColor}
//       border={borderProperties}
//       width={width}
//       color={textColor}
//       fontFamily={fontFamily}
//     >
//       {icon && <Icon>{icon}</Icon>
//       }
//       {buttonText}
//     </StyledButton >
//   )