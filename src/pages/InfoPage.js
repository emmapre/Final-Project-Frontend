import React from 'react'
import styled from 'styled-components/macro'

const Content = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  /* height: 50vh;  */ 
  p{
    text-align: center;
  }

  a{
    color: #5D5D5D;
  }

  a:hover{
    background-color: #C9E0DC;
  }

  @media (min-width: 768px) {
    width: 50%;
   margin: auto;
   margin-top: 60px;
  }
`

const Credit = styled.p`
  font-size: 12px;
`


export const InfoPage = () => {

  return (
    <Content>
      <p>
        This is my final project at Technigo's bootcamp. In the project I've been using React, Redux, Express API, node.js and MongoDB.
        </p>
      <p>
        To see my other projects visit <a href='www.emmaprene.com' target="_blank" >www.emmaprene.com</a>.
        </p>
      <p>
        You can find the code for this project on my github:{' '}

        <a href='www.github.com/emmapre/final-project-frontend'
          target="_blank" >Frontend</a>
        {' '}and{' '}
        <a href='www.github.com/emmapre/final-project-backend'
          target="_blank">Backend</a>.

      </p>
      <p>This app will not actually order any cakes but if you ask nicely I might bake one for you! <span>🎂</span></p>

      <Credit>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </Credit>
    </Content>
  )
}