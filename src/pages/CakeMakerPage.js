import React from 'react'
import styled from 'styled-components/macro'
import { CakePreview } from '../components/CakePreview'
import { CakeForm } from '../components/CakeForm'

const CakeMakerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 40px;
  }
`

export const CakeMakerPage = () => {
  return (
    <CakeMakerContainer>
      <CakePreview />
      <CakeForm />
    </CakeMakerContainer>
  )
}