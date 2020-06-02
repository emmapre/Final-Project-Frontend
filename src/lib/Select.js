import React from 'react'
import { useDispatch } from 'react-redux'
import { cake } from '../reducers/cake'

export const Select = ({ layer }) => {
  const dispatch = useDispatch()

  {
    return (
      <label>
        {layer.name}
        <select id={layer.name} name={layer.name}
          onClick={() => { dispatch(cake.actions.addLayerIngredient(layer)) }}
        >
          <option value={layer.ingredient1}>{layer.ingredient1}</option>
          <option value={layer.ingredient2}>{layer.ingredient2}</option>
        </select>
      </label>
    )
  }
}
