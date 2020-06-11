import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { CakeLayer } from '../lib/CakeLayer'
import { layers } from '../reducers/layers'
import { cakeOrder } from '../reducers/cakeOrder'
import { generatePath } from 'react-router'


const CakePreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;
  width: 400px;

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

  return (
    <div>

      <h1>Your cake</h1>

      {chosenIngredients.map((layer) => (
        <div>
          <h4 key={layer._id}>
            {layer.layerName}
          </h4>
          <CakeLayer
            backgroundColor={layer.ingredientColor}
            ingredientName={layer.ingredientName}
          />
        </div>))}


      <CakePreviewContainer>
        <CakeLayerPreview>
          <h4>Topping</h4>
          <CakeLayer
            backgroundColor='crimson'
            ingredientName='raspberries'
          />
        </CakeLayerPreview>
      </CakePreviewContainer>

      <CakePreviewContainer>
        <CakeLayerPreview>
          <h4>Coating</h4>
          <CakeLayer
            backgroundColor='pink'
            ingredientName='icing'
          />
        </CakeLayerPreview>
      </CakePreviewContainer>

      <CakePreviewContainer>
        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            backgroundColor='beige'
            ingredientName='cake'
          />
        </CakeLayerPreview>
      </CakePreviewContainer>

      <CakePreviewContainer>
        <CakeLayerPreview>
          <h4>First Layer</h4>
          <CakeLayer
            backgroundColor='brown'
            ingredientName='mousse'
          />
        </CakeLayerPreview>
      </CakePreviewContainer>

      <CakePreviewContainer>
        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            backgroundColor='beige'
            ingredientName='cake'
          />
        </CakeLayerPreview>
      </CakePreviewContainer>

      <CakePreviewContainer>
        <CakeLayerPreview>
          <h4>Second Layer</h4>
          <CakeLayer
            backgroundColor='orange'
            ingredientName='fruit'
          />
        </CakeLayerPreview>
      </CakePreviewContainer>

      <CakePreviewContainer>
        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            backgroundColor='beige'
            ingredientName='cake'
          />
        </CakeLayerPreview>
      </CakePreviewContainer>



    </div>

  )
}

// {allSelects.map((layer) => (
//   <Select key={layer.name} layer={layer} />
// ))}



  // {products.map((product) => (
  //   <CartItem key={product.id} product={product} />
  // ))}
