import { Form,Button } from "react-bootstrap"
import { useState } from "react"



function LoginFuncComponent(){

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [errors, setError] = useState({
        emailErr: "",
        passwordErr: ""
    })
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
     const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const detictData = (e) => {
        
        if(e.target.name === "email"){
            setUser({
                ...user,
                email: e.target.value
            })

            setError({
                ...errors,
                emailErr: 
                    e.target.value.length===0 ?
                    "this field ie required"
                    :  ! validEmail.test(e.target.value) ? 
                    "Invalid Format fore Email."
                    : null
            })

        }else if(e.target.name === "password"){
            setUser({
                ...user,
                password: e.target.value
            })
            setError({
                ...errors, 
                passwordErr: 
                    e.target.value.length===0 ?
                    "this field ie required"
                    :  ! validPassword.test(e.target.value)? 
                    "Invalid Format fore Password."
                    : null
            })
        }
    }
    

    return (
        <>
        
        <Form className="container">
        <h1 style={{color:'#47B07F'}} className='p-3 m-3'> Login Form </h1>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"   value={user.email}
                onChange={(e)=> detictData(e)}
                name = "email" />
                <Form.Text className="text-danger">
                {errors.emailErr}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
                 <Form.Control type="password" value ={user.password}
                 onChange={(e)=>detictData(e)}
                 name='password'
                 />
             </Form.Group>
             <Form.Text className="text-danger">
                {errors.passwordErr}
                </Form.Text><br/><br/>
           
            <Button variant="primary" type="submit"  disabled={errors.passwordErr || errors.emailErr}>
                Log In 
            </Button>
        </Form>
        </>
    )
}
export default LoginFuncComponent