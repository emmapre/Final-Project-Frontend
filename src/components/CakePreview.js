import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { CakeLayer } from '../lib/CakeLayer'
import { ToppingLayer } from '../lib/ToppingLayer'
import { layers } from '../reducers/layers'
import { cakeOrder } from '../reducers/cakeOrder'
import { generatePath } from 'react-router'


const CakePreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;
  width: 400px;
  margin-right: 20px;

    h4{
      margin: 0;
    }
`
const CakeLayerPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

export const CakePreview = () => {

  const chosenIngredients = useSelector(
    (store) => store.cakeOrder.chosenIngredients
  )


  // const chosenIngredientTopping = useSelector(
  //   (store) => store.cakeOrder.chosenIngredients[0]
  // )

  const topping = chosenIngredients[0]
  const coating = chosenIngredients[1]
  const firstFilling = chosenIngredients[2]
  const secondFilling = chosenIngredients[3]
  const sponge = chosenIngredients[4]

  return (
    <div>

      <h1>Your cake</h1>

      {/* {chosenIngredients.map((layer, index) => (
        <div key={layer.index}>
          <h4 key={layer.index}>
            {layer.layerName}
          </h4>
          <p>{layer.ingredientName}</p>
          <CakeLayer
            backgroundColor={layer.ingredientColor}
            ingredientName={layer.ingredientName}
          />
        </div>))} */}


      <CakePreviewContainer>
        <CakeLayerPreview>
          <h4>Topping</h4>
          <ToppingLayer
            backgroundColor={topping ? topping.ingredientColor : 'gray'}
            ingredientName={topping ? topping.ingredientName : '-'}
          />
        </CakeLayerPreview>



        <CakeLayerPreview>
          <h4>Coating</h4>
          <CakeLayer
            height='20px'
            backgroundColor={coating ? coating.ingredientColor : 'gray'}
            ingredientName={coating ? coating.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            height='50px'
            backgroundColor={sponge ? sponge.ingredientColor : 'gray'}
            ingredientName={sponge ? sponge.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>First Filling</h4>
          <CakeLayer
            height='30px'
            backgroundColor={firstFilling ? firstFilling.ingredientColor : 'gray'}
            ingredientName={firstFilling ? firstFilling.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            height='50px'
            backgroundColor={sponge ? sponge.ingredientColor : 'gray'}
            ingredientName={sponge ? sponge.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>Second Filling</h4>
          <CakeLayer
            height='30px'
            backgroundColor={secondFilling ? secondFilling.ingredientColor : 'gray'}
            ingredientName={secondFilling ? secondFilling.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            height='50px'
            backgroundColor={sponge ? sponge.ingredientColor : 'gray'}
            ingredientName={sponge ? sponge.ingredientName : '-'}
          />
        </CakeLayerPreview>
      </CakePreviewContainer>

    </div >

  )
}

// {allSelects.map((layer) => (
//   <Select key={layer.name} layer={layer} />
// ))}



  // {products.map((product) => (
  //   <CartItem key={product.id} product={product} />
  // ))}
