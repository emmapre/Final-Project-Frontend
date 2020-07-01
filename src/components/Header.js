import React, { useState, useEffect } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { signout } from '../reducers/user'
import { Burger } from '../components/Burger'
import { BurgerMenu } from '../components/BurgerMenu'
import { Button } from '../lib/Button'
import cakelogo from '../assets/cakelogo.svg'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 100px;
  background-color: #FBC4C4;
`

const LogoTitleContainer = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 20px;
`

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  
`

const StyledNavLink = styled(NavLink)`
    color: #000;
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }

    &.active {
      text-decoration: underline;
  }
`

const Title = styled.h1`
  margin: 0 0 0 20px;
  font-size: 30px;

  @media (min-width: 768px){
    font-size: 40px;
  }
`

const BurgerContainer = styled.div`
  @media(min-width: 768px){
    display: none;
  }
`

const Navbar = styled.div`
  display: none;

  @media (min-width: 768px){
    display: flex;
    justify-content: space-around;
    max-width: 50%;
  }
`

const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li{
    margin-left:10px;
  }
`

export const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (signout) {
      history.push('/')
    }
  },
    // [signout]
  )

  const accessToken = useSelector((store) => store.user.signin.accessToken)

  return (
    <StyledHeader>
      <StyledLink to='/'>
        <LogoTitleContainer>
          <Logo src={cakelogo} alt='cake logo' />
          <Title>CakeMaker</Title>
        </LogoTitleContainer>
      </StyledLink>

      <BurgerContainer>
        <Burger open={open} setOpen={setOpen} />
        <BurgerMenu open={open} setOpen={setOpen} />
      </BurgerContainer>

      <Navbar>
        <NavbarList>
          <StyledNavLink to='/cakeMaker'><li>Maker</li></StyledNavLink>
          <StyledNavLink to='/latest'><li>Latest</li></StyledNavLink>
          <StyledNavLink to='/info'><li>About</li></StyledNavLink>
        </ NavbarList>

        {!accessToken &&
          <Link to='/signin'>
            <Button
              buttonText='Sign In'
              backgroundColor='#9DBFA4'
              borderProperties='solid 2px #5D5D5D'
              width='90px'
              fontFamily='Varela Round'
            />
          </Link>
        }

        {accessToken &&
          <Link to='/'>
            <Button
              buttonText='Sign out'
              backgroundColor='#F7E3B2'
              borderProperties='solid 2px #5D5D5D'
              width='90px'
              fontFamily='Varela Round'
              onClick={(event) => dispatch(signout())}
            />
          </Link>
        }

      </Navbar>

    </StyledHeader >
  )
}