import React from 'react'

export const Select = ({ layer }) => {
  {
    return (
      <label>
        {layer.name}
        <select id={layer.name} name={layer.name}>
          <option value={layer.ingredient1}>{layer.ingredient1}</option>
          <option value={layer.ingredient2}>{layer.ingredient2}</option>
        </select>
      </label>
    )
  }
}
