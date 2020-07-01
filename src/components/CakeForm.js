import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { BeatLoader } from 'react-spinners'
import { fetchLayerIngredients } from '../reducers/layers'
import { cakeOrder } from '../reducers/cakeOrder'
import { Button } from '../lib/Button'

const CakeMakerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #C9E0DC;
  width: 100vw;
  height: 400px;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`

const CakeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px;

  h2{
    color: #5D5D5D;
    margin: 0 0 10px 0;
  }

  label{
    display: flex;
    justify-content: space-between;
    margin: 5px 20px;
  }

  select{
    width: 120px;
  }
`

const Message = styled.p`
  font-size: 14px;
  color: #5D5D5D;
  text-align: center;
  margin: 3px;
`

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Select = styled.select`
  border: 1px solid #5D5D5D;
  border-radius: 2px;
  font-family: "Raleway";
`

const Option = styled.option`
`

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const CakeForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchLayerIngredients())
  }, [dispatch])

  const layers = useSelector((store) => store.layers.layerIngredients)
  const accessToken = useSelector((store) => store.user.signin.accessToken)
  const isLoading = useSelector((store) => store.ui.isLoading)

  const handleSubmit = (event) => {
    event.preventDefault()
    history.push('/order')
  }

  return (
    <CakeMakerContainer>
      <CakeFormContainer
        onSubmit={handleSubmit}
      >
        <h2>Choose your ingredients</h2>

        {isLoading && <LoaderWrapper>
          <BeatLoader color='#5D5D5D' />
        </LoaderWrapper>}



        {!isLoading && layers.map((layer, index) => (
          <label key={layer._id}>
            {layer.name}
            <Select
              required
              onChange={e =>
                dispatch(cakeOrder.actions.setLayerIngredient({
                  layerIndex: index, layerName: layer.name, ingredientSpecs: JSON.parse(e.target.value)
                }))}>
              {/* Using selected renders an error, value should be used when using React but then the validation did not work. */}
              <Option
                value=''
                disabled
                selected
                hidden
              >
                -{layer.name}-
                </Option>

              {layer.ingredients.map((ingredient) => (
                <Option
                  key={ingredient._id}
                  id={ingredient._id}
                  name='ingredient'
                  value={JSON.stringify(ingredient)}
                >
                  {ingredient.ingredientName}
                </Option>
              ))}

            </Select>
          </label>
        ))}

        <SubmitContainer>
          {!accessToken &&
            <>
              <Message>Please sign up or sign in to order.</Message>
              <Message>No account yet? <Link to='/signup'>Go to the sign up page.</Link></Message>
              <Link to='/signin'>
                <Button
                  buttonText='Sign In'
                  backgroundColor='#FBC4C4'
                  color='#5D5D5D'
                  borderProperties='solid 2px #5D5D5D'
                  width='120px'
                  fontFamily='"Varela Round", sans-serif'
                />
              </Link>
            </>
          }

          {accessToken &&
            < Button
              type='submit'
              buttonText='Order Cake'
              backgroundColor='#FBC4C4'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              color='#5D5D5D'
            />
          }

        </SubmitContainer>
      </CakeFormContainer>
    </CakeMakerContainer >
  )
}