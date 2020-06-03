import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'
import { layers } from '../reducers/layers'
import { cake } from '../reducers/cake'
// import { Select } from '../lib/Select'

const CakeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #C9E0DC;
`

export const CakeForm = () => {
  // const allSelects = useSelector((store) => store.layers)
  const [ingredientIndex, setIngredientIndex] = useState()
  const dispatch = useDispatch()


  const [thisIngredient, setThisIngredient] = useState()


  //den här gör så att mappingen funkar, förstör inte!!
  const layers = useSelector(
    (store) => store.layers.layerIngredients
  )
  // const ingredient = useSelector(
  //   (store) => store.layers.ingredients.find((a) => a.layerId === layers.id)
  // )

  //  const chosenIngredients = useSelector(
  //     (store) => store.layers.ingredients.find((a) => a.layerId === layer.id)
  //   )


  // const handleOnChange = () => {
  //   dispatch(cake.actions.addLayerIngredient({ layerId: layer.id, layerIndex: layer.ingredients.index }))
  //   // ({ questionId: question.id, answerIndex: index })

  //   // setIngredientIndex(index) // sätta index på den man klickat på
  // }


  return (
    <>

      <CakeFormContainer>

        {layers.map((layer, index) => (
          <label key={index}>
            {layer.name}
            {
              layer.ingredients.map((ingredient, index) => (
                <input
                  type='button'
                  key={index}
                  id={index}
                  name='ingredient'
                  value={ingredient.ingredientName}
                  ingredient={ingredient.ingredientName}
                  onClick={() => dispatch(cake.actions.addLayerIngredient({ layerName: layer.name, ingredientName: layer.ingredients.ingredientName, ingredientColor: layer.ingredients.ingredientColor }))}
                >
                  {/* {ingredient.ingredientName} */}
                </input>
              ))
            }





            {/* <select
              onChange={() => dispatch(cake.actions.addLayerIngredient({ layerName: layer.name, ingredientName: layer.ingredients.ingredientName, ingredientColor: layer.ingredients.ingredientColor }))
              } >
              {
                layer.ingredients.map((ingredient, index) => (
                  <option
                    key={index}
                    id={index}
                    name='ingredient'
                    value={ingredient.ingredientName}
                    ingredient={ingredient.ingredientName}
                  >{ingredient.ingredientName}
                  </option>
                ))
              }
            </select> */}
          </label>
        ))}




        {/* {allSelects.map((layer) => (
          <Select key={layer.name} layer={layer} />
        ))} */}







        {/* <label>
          Name your cake
            <input type='text' id='cakename' name='cakename' />
        </label> */}
        < Button
          buttonText='Order Cake'
          backgroundColor='#713939'
          borderProperties='solid 2px #5D5D5D'
          width='120px'
          textColor='#fff'
        />
      </CakeFormContainer>
    </>
  )

}