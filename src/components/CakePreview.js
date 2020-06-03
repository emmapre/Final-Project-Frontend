import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { CakeLayer } from '../lib/CakeLayer'



export const CakePreview = () => {

  const cakeLayers = useSelector(
    (store) => store.chosenIngredients
  )

  return (
    <div>

      <h1>Your cake</h1>
      {/* <div className='cake-preview'>
        {cakeLayers.map((layer) => (
          // <CakeLayer key={layer.name}
          //   layer={layer}
          // />
          <p>{layer.name}</p>
        ))}
      </div> */}
    </div>

  )
}

// {allSelects.map((layer) => (
//   <Select key={layer.name} layer={layer} />
// ))}



  // {products.map((product) => (
  //   <CartItem key={product.id} product={product} />
  // ))}
