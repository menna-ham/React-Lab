import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {AddFavoritAction}  from'../src/actions/AddFavoritAction'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';
import { getMovieList } from '../src/actions/AddFavoritAction';

function Favorite(){

    const dispatch = useDispatch()

     const [Movies,setMovies] = useState([])

    const FavMovie= useSelector((state)=>{return state.added})

    const filterMovies = Movies.filter((m)=>{
        return FavMovie.includes(m.id)
    })
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6836d2d66066d4eb511ca7d62769eb97')
        .then((res)=>{
            setMovies(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    const handelMovie=(id)=>{
        if (FavMovie.includes(id))
        {
            console.log(id)
            const index= FavMovie.indexOf(id)
            console.log(index)
            FavMovie.splice(index,1)
            dispatch(
                getMovieList([...FavMovie])
            )
        }else{
            dispatch(getMovieList([id, ...FavMovie]))
        }
    }

    return(
        <>
         <h1 style={{color:'#47B07F'}}> Favourit Movies </h1>
        <div className="card-group m-5 p-1" style={{alignItems:'center', marginLeft:'20%' , gap:'20px'}}>

        {filterMovies.map(movie=>{
            return (
                <>
                <div className="card m-2 p-2" style={{width: "18rem" }} className='dets'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>

                    <div className="card-body" >
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text"> Release Date: {movie.date}</p>
                        <Link key={movie.id} to={`/moviedetails/${movie.id}`}>Details</Link><br/><br/>
                        <button type="button" className="btn btn-danger" onClick={()=>{handelMovie(movie.id)}} >
                            Remove from Favourite </button>
                    </div>
                </div>
                </>
            )
        })}
        </div>
        </>
    )
}

export default Favorite ;