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
        This is my final project at Technigo's bootcamp. In the project I've been using React, Redux, Express API, node.js and MongoDB.
        To see my other projects visit www.emmaprene.com.
        You can find the code for this poject on my github. Blabalba for the frontend and bblabla fort the backend.
    </p>
    </Content>
  )
}