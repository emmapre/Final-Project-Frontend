import React from 'react'
import { CakePreview } from '../components/CakePreview'
import { CakeForm } from '../components/CakeForm'
import styled from 'styled-components/macro'

const CakeMakerContainer = styled.div`
display: flex;
justify-content: center;
`

export const CakeMakerPage = () => {
  return (
    <CakeMakerContainer>
      <CakePreview />
      <CakeForm />
    </CakeMakerContainer>
  )
}