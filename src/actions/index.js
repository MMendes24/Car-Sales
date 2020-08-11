export const ADD_FEATURE = "ADD_FEATURE"

export const addFeature = (feature) => {
    
    return { type: ADD_FEATURE, payload: feature}
}

export const CLEAR_FEATURE = "CLEAR_FEATURE"

export const clearFeature = () => {
    return { type: CLEAR_FEATURE}
}