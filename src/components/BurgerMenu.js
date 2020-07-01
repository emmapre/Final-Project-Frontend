import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { signout } from '../reducers/user'
import { Button } from '../lib/Button'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #C9E0DC;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 50%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 20px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

export const BurgerMenu = ({ open }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (signout) {
      history.push('/')
    }
  },
    // [signout]
  )

  const accessToken = useSelector((store) => store.user.signin.accessToken)

  return (
    <StyledMenu open={open}>
      <Link to='/cakeMaker'>Maker</Link>
      <Link to='/latest'>Latest</Link>
      <Link to='/info'>About</Link>

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

    </StyledMenu>
  )
}