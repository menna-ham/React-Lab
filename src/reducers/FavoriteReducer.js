//check action.type 
// reducer with action 


const INITIAL_VALUE={
    added: []
}

export default  function FavoriteReducer(state= INITIAL_VALUE ,action ){
    console.log(action.type)
    switch (action.type) {
        case 'ADDING_TO_FAVORITE':
            return {
                ...state ,
                added:action.payload
            }
    
        default:

            return  state 
    }

}