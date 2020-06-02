import React from 'react'
import styled from 'styled-components/macro'
import { CakeLayer } from '../lib/CakeLayer'



export const CakePreview = () => {


  const cakeLayers = []

  return (
    <div>

      <h1>Your cake</h1>
      <div className='cake-preview'>
        {cakeLayers.map((layer) => (
          <CakeLayer key={layer.name} layer={layer} />
        ))}
      </div>
    </div>

  )
}
