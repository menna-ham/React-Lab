

// //action 
// export const   AddFavoritAction = (payload)=>{
//     return {
//         type:'ADDING_TO_FAVORITE',
//         payload
//     }
// }

import axios from "axios";

// export const AddFavoritAction =()=> (dispatch)=>{


//     return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=13e099732f0301dc3297bf57094255cb")
//     .then(
//             (res) => dispatch(
//                 {  
//                     type: 'ADDING_TO_FAVORITE',
//                     payload : res.data.results 
//                 }
//                 ),
//             (err) => console.log(err)
//      );
// };


export const getMovieList =()=> (dispatch)=>{


    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=13e099732f0301dc3297bf57094255cb")
    .then(
            (res) => dispatch(
                {  
                    type: 'ADDING_TO_FAVORITE',
                    payload : res.data.results 
                }
                ),
            (err) => console.log(err)
     );
};