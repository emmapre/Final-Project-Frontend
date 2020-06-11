import React from 'react'
import styled from 'styled-components/macro'

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

const Message = styled.p`
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`

export const InfoPage = () => {

  return (
    <Content>
      <Message>
        This is my final project at Technigo's bootcamp. In the project I've been using React, Redux, Express API, node.js and MongoDB.
        To see my other projects visit www.emmaprene.com.
        You can find the code for this poject on my github. Blabalba for the frontend and bblabla fort the backend.
    </Message>
    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </Content>
  )
}