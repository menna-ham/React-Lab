import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function MovieDetails(){
    const params = useParams([])
    const [movie, setDetails] = useState({})
     
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=66fbf5896324e449298b7625c2c3e49d`)
        .then((res)=>{
            console.log(res.data)
            setDetails(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return(
        <>
        <h1 style={{color:'#47B07F'}} className='m-5 p-2'> Movie Details</h1>

        <div className='container ' className='details'>

            <div className='col-6' className='myimg'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            </div>


            <div  >
            <div >
                <h3  className='p-1'className='tit'> Title : </h3>
                <span className='fs-4 p-1'>{movie.original_title}</span>
            </div><br/>

            <div >
                <h3  className='p-1'className='tit'> Overview : </h3>
                <span className='fs-4 p-1'>  {movie.overview}</span>
            </div><br/>

            <div >
                <h3  className='p-1'className='tit'> Release Date : </h3>
                <span className='fs-4 p-1'>{movie.release_date}</span>
            </div><br/>

            <div >
                <h3  className='p-1'className='tit'> Vote Average  : </h3>
                <span className='fs-4 p-1'>{movie.vote_average}</span>
            </div><br/>
            </div>
           

        </div>
        </>
        
    )

}
export default MovieDetails