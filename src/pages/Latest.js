import React from 'react'
import styled from 'styled-components/macro'
import { CakeCard } from '../lib/CakeCard'

const Content = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  /* height: 50vh;  */ 
  
  @media (min-width: 768px) {
    width: 50%;
   margin: auto;
  }
`

export const Latest = () => {

  return (
    <Content>
      <p>
        The latest ordered cakes will show here.
    </p>

      <CakeCard
        toppingColor='green'
      >
      </CakeCard>



    </Content>
  )
}