import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
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
        <Link to='/cakeMaker'><li>Maker</li></Link>
        <Link to='/info'><li>Info</li></Link>
        <Link to='/signup'><li>SignUp</li></Link>
        <Link to='/signin'><li>SignIn</li></Link>
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