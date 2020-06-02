import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'
import { Select } from '../lib/Select'

const CakeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #C9E0DC;
`

export const CakeForm = () => {
  const allSelects = useSelector((store) => store.layers)

  return (
    <>
      {/* <FormTitle /> */}
      <CakeFormContainer>

        {allSelects.map((layer) => (
          <Select key={layer.name} layer={layer} />
        ))}

        {/* <label>
          Topping
            <select id='topping' name='topping'>
            <option value='strawberries'>Strawberries</option>
            <option value='blueberries'>Blueberries</option>
          </select>
        </label>
        <label>
          Coating
            <select id='coating' name='coating'>
            <option value='cream'>Cream</option>
            <option value='frosting'>Frosting</option>
          </select>
        </label>
        <label>
          First Layer
            <select id='firstlayer' name='firstlayer'>
            <option value='jam'>Jam</option>
            <option value='custard'>Custard</option>
          </select>
        </label>
        <label>
          Second Layer
            <select id='secondlayer' name='secondlayer'>
            <option value='jam'>Jam</option>
            <option value='custard'>Custard</option>
          </select>
        </label>
        <label>
          Cake
            <select id='cake' name='cake'>
            <option value='chocolate'>Chocolate</option>
            <option value='vanilla'>Vanilla</option>
          </select>
        </label>
        <label>
          Name your cake
            <input type='text' id='cakename' name='cakename' />
        </label> */}
        <Button
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