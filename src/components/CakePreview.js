import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { CakeLayer } from '../lib/CakeLayer'
import { layers } from '../reducers/layers'
import { cake } from '../reducers/cake'


export const CakePreview = () => {




  const chosenLayers = useSelector(
    (store) => store.cake.chosenIngredients
  )


  return (
    <div>

      <h1>Your cake</h1>

      {chosenLayers.map((layer) => (
        <div>
          <h4 key={layer._id}>
            {layer.layerName}
          </h4>
          <p>{layer.layerIngredient}</p>
        </div>))}
      {/* {
              layer.ingredients.map((ingredient, index) => (
                <input
                  type='button'
                  key={index}
                  id={index}
                  name='ingredient'
                  value={ingredient.ingredientName}
                  ingredient={ingredient.ingredientName}
                >
            ))} */}
      {/* <div className='cake-preview'>
        {cakeLayers.map((layer) => (
          // <CakeLayer key={layer.name}
          //   layer={layer}
          // />
          
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
