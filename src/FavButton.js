import { useSelector ,useDispatch} from 'react-redux';
import { AddFavoritAction } from './actions/AddFavoritAction';



function FavButton(){

    const Movie = useSelector((state) => state.added );
    const dispatch = useDispatch();

    const handleMovie=(id)=>{

        console.log(Movie)

        if(Movie.includes(id)){
            const index= Movie.indexof(id)
            console.log(index)
            Movie.splice(index,1)
            dispatch(
                AddFavoritAction([...Movie])
            )
        }else{
            dispatch(
                AddFavoritAction([id, ...Movie])
            )
        }
    }

    return(
        <>
        <button type="button" className="btn btn-warning" onClick={()=> handleMovie(Movie.id)} >Add to Favourit </button>
        </>
    )
}  

export default  FavButton