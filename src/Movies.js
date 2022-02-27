import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import {AddFavoritAction}  from'../src/actions/AddFavoritAction'
import { getMovieList  } from '../src/actions/AddFavoritAction'


function MoviesList(){
    const dispatch = useDispatch()
    const [Movies,setMovies] = useState([])
    //const [ favorites , setFavorites ] = useState([])
    const FavMovie= useSelector((state)=>{return state.added})

    // useEffect(()=>{
    //     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6836d2d66066d4eb511ca7d62769eb97')
    //     .then((res)=>{
    //         setMovies(res.data.results)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // },[])

    const movie = useSelector((state)=>{return state.added})
    useEffect(()=>{
        dispatch(getMovieList())

    } , [] )

    const handelMovie=(id)=>{
        if (movie.includes(id))
        {
            console.log(id)
            const index= movie.indexOf(id)
            console.log(index)
            movie.splice(index,1)
            dispatch(
                getMovieList([...movie])
            )
        }else{
            dispatch(getMovieList([id, ...movie]))
        }
    }


    return (
        <> 
        <h1 style={{color:'#47B07F'}}>Movies</h1>
        <div className="card-group m-5 p-1" style={{alignItems:'center', marginLeft:'20%'}}>
            {movie.map(movie=>{
                return (
                    <>
                    <div className='container p-5 m-5' className='Mycards'>
                     <MovieCard title={movie.original_title}
                      poster={movie.poster_path} 
                      id={movie.id} 
                      date={movie.release_date}
                       addFun={handelMovie}
                      />
                     </div>
                    </>
                )
            })}
          </div> 
        

        </>
    )
}
export default MoviesList