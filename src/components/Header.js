import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { user, signout } from '../reducers/user'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'

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
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    if (signout) {
      history.push('/')
    }
  }, [signout]);


  return (
    <StyledHeader>
      <LogoTitleContainer>
        <Logo />
        <Link to='/'>
          <Title>CakeMaker</Title>
        </Link>
      </LogoTitleContainer>
      <MenuList>
        <Link to='/cakeMaker'><li>Maker</li></Link>
        <Link to='/info'><li>Info</li></Link>
        <Link to='/signup'><li>SignUp</li></Link>
        <Link to='/signin'><li>SignIn</li></Link>
        <Link to='/'>
          <Button
            buttonText='Sign out'
            backgroundColor='#713939'
            borderProperties='solid 2px #5D5D5D'
            width='120px'
            color='#fff'
            onClick={(event) => dispatch(signout())}
          />
        </Link>
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