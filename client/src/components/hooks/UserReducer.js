export const initialState = null

export const reducerFunc = (current, action) => {
  switch(action.type){
    case "USER":
      return action.payload
    case "CLEAR":
      return null
    default: 
      return current    
  }
}