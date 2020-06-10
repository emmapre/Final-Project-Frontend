import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'
import { fetchLayerIngredients, layers } from '../reducers/layers'
import { cake } from '../reducers/cake'
import { CakePreview } from '../components/CakePreview'
// import { Select } from '../lib/Select'

const CakeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #C9E0DC;
`

export const CakeForm = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchLayerIngredients())
  }, [dispatch])

  // den här gör så att mappingen funkar, förstör inte!!
  const layers = useSelector(
    (store) => store.layers.layerIngredients
  )


  const [topping, setTopping] = useState('')
  const [cover, setCover] = useState('')
  const [firstLayer, setFirstLayer] = useState('')
  const [secondLayer, setSecondLayer] = useState('')
  const [sponge, setSponge] = useState('')


  return (
    <>

      <CakeFormContainer>

        {layers.map((layer) => (
          <label key={layer._id}>
            {layer.name}
            {
              layer.ingredients.map((ingredient) => (
                <input
                  type='button'
                  key={ingredient._id}
                  id={ingredient._id}
                  name='ingredient'
                  value={ingredient.ingredientName}
                  ingredient={ingredient.ingredientName}
                  onClick={() => dispatch(cake.actions.addLayerIngredient({ layerName: layer.name, ingredientName: layer.ingredients.ingredientName, ingredientColor: layer.ingredients.ingredientColor }))}
                >
                </input>
              ))
            }

            <select
              onChange={() => dispatch(cake.actions.addLayerIngredient({ layerName: layer.name, ingredientName: layer.ingredients.ingredientName, ingredientColor: layer.ingredients.ingredientColor }))
              } >
              {
                layer.ingredients.map((ingredient) => (
                  <option
                    key={ingredient._id}
                    id={ingredient._id}
                    name='ingredient'
                    value={ingredient.ingredientName}
                    ingredient={ingredient.ingredientName}
                  >{ingredient.ingredientName}
                  </option>
                ))
              }
            </select>
          </label>
        ))}


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
      <CakePreview />
    </>
  )

}




// {layers.map((layer, index) => (
//   <label key={index}>
//     {layer.name}
//     {
//       layer.ingredients.map((ingredient, index) => (
//         <input
//           type='button'
//           key={index}
//           id={index}
//           name='ingredient'
//           value={ingredient.ingredientName}
//           ingredient={ingredient.ingredientName}
//           onClick={() => dispatch(cake.actions.addLayerIngredient({ layerName: layer.name, ingredientName: layer.ingredients.ingredientName, ingredientColor: layer.ingredients.ingredientColor }))}
//         >
//           {/* {ingredient.ingredientName} */}
//         </input>
//       ))
//     }



//     <select
//       onChange={() => dispatch(cake.actions.addLayerIngredient({ layerName: layer.name, ingredientName: layer.ingredients.ingredientName, ingredientColor: layer.ingredients.ingredientColor }))
//       } >
//       {
//         layer.ingredients.map((ingredient, index) => (
//           <option
//             key={index}
//             id={index}
//             name='ingredient'
//             value={ingredient.ingredientName}
//             ingredient={ingredient.ingredientName}
//           >{ingredient.ingredientName}
//           </option>
//         ))
//       }
//     </select>
//   </label>
// ))}
