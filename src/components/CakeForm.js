import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'
import { fetchLayerIngredients } from '../reducers/layers'
import { cakeOrder } from '../reducers/cakeOrder'


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

export const CakeForm = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLayerIngredients())
  }, [dispatch])

  const layers = useSelector(
    (store) => store.layers.layerIngredients)

  const accessToken = useSelector((store) => store.user.signin.accessToken)

  return (
    <CakeMakerContainer>
      <CakeFormContainer>
        {layers.map((layer, index) => (
          <label key={layer._id}>
            {layer.name}
            <select
              defaultValue={'DEFAULT'}
              required
              onChange={e =>
                dispatch(cakeOrder.actions.setLayerIngredient({
                  layerIndex: index, layerName: layer.name, ingredientSpecs: JSON.parse(e.target.value)
                }))
              } >
              <option
                value='DEFAULT'
                disabled
                hidden
              >
                -{layer.name}-
                </option>
              {layer.ingredients.map((ingredient) => (
                <option
                  key={ingredient._id}
                  id={ingredient._id}
                  name='ingredient'
                  value={JSON.stringify(ingredient)}
                >
                  {ingredient.ingredientName}
                </option>
              ))
              }
            </select>
          </label>
        ))}

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
          <Link to='/order'>
            < Button
              buttonText='Order Cake'
              backgroundColor='#FBC4C4'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              color='#5D5D5D'
            />
          </Link>
        }

      </CakeFormContainer>

    </CakeMakerContainer >
  )
}