// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { cake } from '../reducers/cake'
// import { layers } from '../reducers/layers'

// export const Select = ({ layer }) => {
//   const dispatch = useDispatch()


//   // const layer = useSelector(
//   //   (state) => state.layer.ingredients[state.layer.currentQuestionIndex]
//   // )

//   // const ingredient = useSelector(
//   //   (state) => state.layer.ingredients.find((a) => a.questionId === question.id)
//   // )

//   // const layerIngredient = useSelector(
//   //   (state) => state.layers.ingredients.find(
//   //     // (a) => a.layerId === layerIngredient.id
//   //   )
//   // )

//   //vilket lager man är på
//   const currentLayer = useSelector(
//     (state) => state.layers.layers
//   )

//   // const layers = useSelector((store) => store.layers)


//   {
//     return (
//       // <label for={layer.name}>
//       //   {layer.name}
//       // <select
//       // // id={layer.name} name={layer.name}
//       // // onClick={() => { dispatch(cake.actions.addLayerIngredient(layer)) 
//       // // }}
//       // >
//       {
//         layers.ingredients.map((ingredient, index) => (
//           <option key={index}
//             value={ingredient}>
//             {ingredient}
//           </option>
//         ))
//       }
//       {
//       question.options.map((option, index) => (
//         <Option key={index}>
//           <OptionInput
//             // om answerIndex har ett värde, kör setClassName
//             className={(answerIndex === undefined) ? '' : setClassName(index)}
//             type='button'
//             id={index}
//             name='option'
//             value={option}
//             onClick={() => handleOnClick(index)}
//             disabled={answer ? true : false}
//           />
//         </Option>
//       ))
//     }



//       // </select>
//       // </label>
//     )
//   }
// }

