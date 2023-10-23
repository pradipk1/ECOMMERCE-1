import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './SignIn.css'
import loginContext from '../Context/Context';

function SignIn() {

    const location = useLocation();
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const [emailBlur, setEmailBlur] = useState(false);

    const {fnLoggedIn, userData} = useContext(loginContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.email === userData.userEmail && formData.password === userData.userPassword) {
            fnLoggedIn();
            navigate(location.state.prevURL);
        } else {
            alert("Please enter valid credentials!");
        }
    }

    const handleEmailBlur = () => {
        setEmailBlur(true);
    }

  return (
    <div className='SignInContainer'>
        <div className='SignInFormDiv'>
            <h2 className='SignInFormText'>Sign In</h2>

            <form onSubmit={handleSubmit} className='SignInFormTag'>
                <div className='SignInInputContainer'>
                    <label>Email</label>
                    <input 
                        className='FormInputTag'
                        type="email" 
                        placeholder='Enter Email' 
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                email:e.target.value
                            });
                        }} 
                        required
                        onBlur={handleEmailBlur}
                        emailBlur={emailBlur.toString()}
                    />
                    <span className='FormSpan'>It should be a valid email address!</span>
                </div>
                <div className='SignInInputContainer'>
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder='Enter Paswword' 
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                password:e.target.value
                            });
                        }}
                    />
                    <span className='FormSpan'>It should be a valid email address!</span>
                </div>
                <div className='SignInButtonDiv'>
                    <button>Sign In</button>
                </div>
            </form>

            <p style={{textAlign:'center'}}>Don't have an account? <Link state={{prevURL: location.state.prevURL}} className='SignInLink' to='/register'>Register</Link></p>
        </div>
    </div>
  )
}

export default SignIn;