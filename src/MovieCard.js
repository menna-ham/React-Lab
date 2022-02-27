import React from "react";
import { Link } from "react-router-dom";



class MovieCard extends React.Component{
    constructor(props){
        super()
    }


    render(){
        return(
            <>


           <div className="card m-2 p-2" style={{width: "18rem" }} className='dets'>
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`} className="card-img-top" alt="..."/>

                    <div className="card-body" >
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text"> Release Date: {this.props.date}</p>
                        <Link key={this.props.id} to={`/moviedetails/${this.props.id}`}>Details</Link><br/><br/>
                        <button type="button" className="btn btn-warning" onClick={()=>{this.props.addFun(this.props.id)}} >
                            Add to Favourit </button>

                    </div>
            </div>

           </>
        )
    }
}
export default MovieCard