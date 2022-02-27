import { useContext } from "react"
import { LanguageContext } from "./context"

function Home (){

    const {contextLanguage, setContextLanguage}= useContext(LanguageContext)


    return (
        <>
                <h1 style={{color:'#47B07F'}}>Welcome to Movies App</h1>

                <p> CONTEXT DATA : {contextLanguage}</p>
                <button type="button" className="btn btn-warning" onClick={()=>{setContextLanguage(contextLanguage==='EN' ? 'AR' : 'EN')}} >
                            Context Changer  </button>

        </>
    )
}
export default Home