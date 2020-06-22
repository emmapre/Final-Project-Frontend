import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { CakeLayer } from '../lib/CakeLayer'
import { ToppingLayer } from '../lib/ToppingLayer'

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

const CakeLayerPreviewContent = styled.div`
`

const CakeLayerPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CakePreview = () => {

  const chosenIngredients = useSelector(
    (store) => store.cakeOrder.chosenIngredients
  )

  const topping = chosenIngredients[0]
  const coating = chosenIngredients[1]
  const sponge = chosenIngredients[2]
  const firstFilling = chosenIngredients[3]
  const secondFilling = chosenIngredients[4]

  return (
    <div>

      <h1>Your cake</h1>

      <CakePreviewContainer>
        <CakeLayerPreviewContent>
          <CakeLayerPreview>
            <h4>Topping</h4>
            <ToppingLayer
              width='200px'
              circleHeight='30px'
              circleWidth='30px'
              backgroundColor={topping ? topping.ingredientSpecs.ingredientColor : 'gray'}
              ingredientName={topping ? topping.ingredientSpecs.ingredientName : '-'}
            />
          </CakeLayerPreview>
        </CakeLayerPreviewContent>


        <CakeLayerPreview>
          <h4>Coating</h4>
          <CakeLayer
            height='20px'
            width='200px'
            margin='5px 0'
            backgroundColor={coating ? coating.ingredientSpecs.ingredientColor : 'gray'}
            ingredientName={coating ? coating.ingredientSpecs.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            height='50px'
            width='200px'
            margin='5px 0'
            backgroundColor={sponge ? sponge.ingredientSpecs.ingredientColor : 'gray'}
            ingredientName={sponge ? sponge.ingredientSpecs.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>First Filling</h4>
          <CakeLayer
            height='30px'
            width='200px'
            margin='5px 0'
            backgroundColor={firstFilling ? firstFilling.ingredientSpecs.ingredientColor : 'gray'}
            ingredientName={firstFilling ? firstFilling.ingredientSpecs.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            height='50px'
            width='200px'
            margin='5px 0'
            backgroundColor={sponge ? sponge.ingredientSpecs.ingredientColor : 'gray'}
            ingredientName={sponge ? sponge.ingredientSpecs.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>Second Filling</h4>
          <CakeLayer
            height='30px'
            width='200px'
            margin='5px 0'
            backgroundColor={secondFilling ? secondFilling.ingredientSpecs.ingredientColor : 'gray'}
            ingredientName={secondFilling ? secondFilling.ingredientSpecs.ingredientName : '-'}
          />
        </CakeLayerPreview>

        <CakeLayerPreview>
          <h4>Sponge</h4>
          <CakeLayer
            height='50px'
            width='200px'
            margin='5px 0'
            backgroundColor={sponge ? sponge.ingredientSpecs.ingredientColor : 'gray'}
            ingredientName={sponge ? sponge.ingredientSpecs.ingredientName : '-'}
          />
        </CakeLayerPreview>
      </CakePreviewContainer>

    </div >

  )
}

