import { Form,Button } from "react-bootstrap"
import { useState } from "react"

function RegisterationFunComponent(){
    const [user, setUser] = useState({
        email: "",
        password: "",
        name:"",
        userName:"",
        confirmPassword:""
    })

    const [errors, setError] = useState({
        emailErr: "",
        passwordErr: "",
        nameErr:"",
        userNameErr:"",
        confirmPasswordErr:""
    })

    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const validUser = new RegExp("^[a-zA-Z0-9]*$");

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
   

    const detictData = (e) => {
        console.log(e.target.value)
        const param = e.target.name

        switch (param) {
            case 'name':
                setUser({
                    ...user,name: e.target.value
                })
                setError({
                    ...errors, nameErr:
                    e.target.value.length===0 ? "this field ie required" : null})
                break;

                case 'email':
                    setUser({
                        ...user,  email: e.target.value
                    })
                    setError({
                        ...errors,
                         emailErr: 
                        e.target.value.length===0 ? "this field ie required"
                        :  ! validEmail.test(e.target.value)? "Invalid Format fore Email." : null
                    })
                break;
                
                case 'userName':
                    setUser({
                    ...user, userName: e.target.value
                    })
                    setError({
                    ...errors, userNameErr: 
                    e.target.value.length===0 ? "this field ie required"
                    :  ! validUser.test(e.target.value)? "Your Username shouldn't contsain spaces ." : null
                })
                    break;

                case 'password':
                    setUser({
                    ...user, password: e.target.value
                    })
                    setError({
                    ...errors, passwordErr: 
                    e.target.value.length===0 ? "this field ie required"
                    :  ! validPassword.test(e.target.value)? "Invalid Format fore Password." : null
                    })
                    break ;

                    case 'confrimPassword':
                        setUser({
                        ...user, confirmPassword: e.target.value
                        })
                        setError({
                        ...errors,  confirmPasswordErr: 
                        e.target.value.length===0 ? "this field ie required"
                        : e.target.value !== user.password.value ? "Password and Confirm Password shoul be matched" : null
                        })
                     break ;        
            default:
                break;
        }
        

    }

    
    return (
        <>
        
        <Form className="container p-3">
        <h1 style={{color:'#47B07F'}} className='p-3 m-3'> Registeration Form </h1>
        <Form.Group className="mb-3" >
                <Form.Label> Name </Form.Label>
                <Form.Control type="text"   value={user.name} onChange={(e)=> detictData(e)} name = "name" />
                <Form.Text className="text-danger"> {errors.nameErr}    </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"   value={user.email} onChange={(e)=> detictData(e)} name = "email" />
                <Form.Text className="text-danger"> {errors.emailErr} </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>User Name </Form.Label>
                <Form.Control type="text"   value={user.userName} onChange={(e)=> detictData(e)} name = "userName" />
                <Form.Text className="text-danger"> {errors.userNameErr} </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
                 <Form.Control  value ={user.password} onChange={(e)=>detictData(e)} name='password'
                  type={passwordShown ? "text" : "password"}/>
                 <Form.Text className="text-danger"> {errors.passwordErr} </Form.Text>

                 <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" onClick={togglePassword} />
                    <label className="form-check-label" htmlFor="flexCheckChecked" >Show Password</label>
                </div>           
             </Form.Group>
             

            <Form.Group className="mb-3" >
            <Form.Label> Confirm Password</Form.Label>
                <Form.Control type="password" value ={user.password} onChange={(e)=>detictData(e)} name='confirmPassword' />
                <Form.Text className="text-danger"> {errors.confirmPasswordErr} </Form.Text><br/>
             </Form.Group>
             

             {/* fffffffffffffffff */}
             {/* <>
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control type="password" id="inputPassword5" value={user.confirmPassword} onChange={(e)=>detictData(e)} name ='confirmPassword'/>
                <Form.Text className="text-danger"> {errors.confirmPasswordErr}</Form.Text>
            </> */}
           
            <Button variant="primary" type="submit"  disabled={errors.passwordErr || errors.emailErr ||
                 errors.confirmPasswordErr||errors.nameErr || errors.userNameErr}>
                Register Now  
            </Button>
        </Form>
        </>
    )
}

export default RegisterationFunComponent