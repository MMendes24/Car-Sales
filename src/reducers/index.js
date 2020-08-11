import { ADD_FEATURE,  CLEAR_FEATURE } from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };


export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FEATURE: 
        const addFeature = state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
            return {
                ...state,
                    additionalPrice: state.additionalPrice + action.payload.price,
                    additionalFeatures: addFeature,
                        car: {
                            ...state.car,
                            features: [
                                ...state.car.features, action.payload
                            ]
                        }
                    }

        case CLEAR_FEATURE:
            const clearArray = state.car.features.filter(feature => feature.id !== action.payload.id)
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: clearArray
                }
            }

        default:
            return state
    }
  }

//   [...state.filter( item => { 
//     if ( item.completed === false ) {
//         return {
//             ...item
//         }
//     } else {
//         return null
//     }
// })]

// case CLEAR_FEATURE:
//     return {
//         ...state,
//         car: {
//             features: state.car.features.filter( feature => {
//                 if ( feature.id !== action.payload.id) {
//                     console.log(feature.id)
//                     return {
//                         ...state,
//                         car: {
//                             ...state.car,
//                             features: [
//                                 ...state.car.features, feature
//                             ]
//                         }
//                     }
//                 } else {
//                     return {
//                         ...state
//                     }
//                 }
//             })
//         } 
//     }

// default:
//     return state
// }
// }