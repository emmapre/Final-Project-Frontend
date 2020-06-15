import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'
import { fetchLayerIngredients, layers } from '../reducers/layers'
import { cakeOrder } from '../reducers/cakeOrder'
import { CakePreview } from '../components/CakePreview'
// import { Select } from '../lib/Select'


const CakeMakerContainer = styled.div`
display: flex;
justify-content: center;
`

const CakeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #C9E0DC;
`

const Message = styled.p`
 font-size: 14px;
  color: #5D5D5D;
  text-align: center;
`
const IngredientButton = styled(Button)`

`

export const CakeForm = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchLayerIngredients())
  }, [dispatch])

  const layers = useSelector(
    (store) => store.layers.layerIngredients
  )

  const accessToken = useSelector((store) => store.user.signin.accessToken);

  return (
    <CakeMakerContainer>
      <CakePreview />
      <CakeFormContainer>
        {layers.map((layer, index) => (
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
                  onClick={() => dispatch(cakeOrder.actions.setLayerIngredient({ layerIndex: index, layerName: layer.name, ingredientName: ingredient.ingredientName, ingredientColor: ingredient.ingredientColor }))}
                >
                </input>
              ))
            }

            <select
              onChange={(e) => dispatch(cakeOrder.actions.setLayerIngredient({ layerIndex: index, layerName: layer.name, ingredientName: e.target.value, ingredientColor: e.target.ingredientColor }))
              } >
              {layer.ingredients.map((ingredient) => (
                <option
                  key={ingredient._id}
                  id={ingredient._id}
                  name='ingredient'
                  value={ingredient.ingredientName}
                  ingredient={ingredient.ingredientName}
                  ingredientColor={ingredient.ingredientColor}
                >
                  {ingredient.ingredientName}
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
        {!accessToken &&
          <div>
            <Message>Please sign up or sign in to order.</Message>
            <Message>No account yet? <Link to='/signup'>Go to the sign up page.</Link></Message>
            <Link to='/signin'>
              <Button
                buttonText='Sign In'
                backgroundColor='#C9E0DC'
                color='#5D5D5D'
                borderProperties='solid 2px #5D5D5D'
                width='120px'
                fontFamily='"Varela Round", sans-serif'
              />
            </Link>
          </div>
        }
        {accessToken &&
          < Button
            buttonText='Order Cake'
            backgroundColor='#713939'
            borderProperties='solid 2px #5D5D5D'
            width='120px'
            textColor='#fff'
          />
        }

      </CakeFormContainer>

    </CakeMakerContainer>
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
