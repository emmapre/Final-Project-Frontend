import React from 'react'
import styled from 'styled-components/macro'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  
  @media (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
`

export const InfoPage = () => {

  return (
    <Content>
      <p>
        The latest ordered cakes will show here.
    </p>
    </Content>
  )
}