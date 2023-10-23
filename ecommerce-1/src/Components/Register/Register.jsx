import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import '../SignIn/SignIn.css'
import loginContext from '../Context/Context';

function Register() {
    
    const location = useLocation();

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
    });

    const [blur, setBlur] = useState({
        nameBlur:false,
        emailBlur:false,
        passwordBlur:false,
        confirmPasswordBlur:false,
    });

    const navigate = useNavigate();

    const {fnRegister} = useContext(loginContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            userName: formData.name,
            userEmail: formData.email,
            userPassword: formData.password,
            isLoggedIn: false,
        }
        fnRegister(obj);
        alert("Registered successfully!")
        navigate('/signin', {
            state: {
                prevURL: location.state.prevURL
            }
        });
    }

  return (
    <div className='SignInContainer'>
        <div className='SignInFormDiv'>
            <h2 className='SignInFormText'>Register</h2>

            <form onSubmit={handleSubmit} className='SignInFormTag'>

                <div className='SignInInputContainer'>
                    <label>Full Name</label>
                    <input 
                        className='FormInputTag'
                        type="text" 
                        placeholder='Enter Full Name' 
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                name:e.target.value
                            });
                        }} 
                        minLength={3}
                        required
                        onBlur={() => {
                            setBlur({
                                ...blur,
                                nameBlur:true
                            })
                        }}
                        nameBlur={blur.nameBlur.toString()}
                    />
                    <span className='FormSpan'>It should have atleast 3 letters!</span>
                </div>

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
                        onBlur={() => {
                            setBlur({
                                ...blur,
                                emailBlur:true
                            })
                        }}
                        emailBlur={blur.emailBlur.toString()}
                    />
                    <span className='FormSpan'>It should be a valid email address!</span>
                </div>

                <div className='SignInInputContainer'>
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder='Enter Password' 
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                password:e.target.value
                            });
                        }}
                        pattern="^(?=.{8,16}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
                        required
                        onBlur={() => {
                            setBlur({
                                ...blur,
                                passwordBlur: true
                            })
                        }}
                        passwordBlur={blur.passwordBlur.toString()}
                    />
                    <span className='FormSpan'>Password should be 8-16 characters and include atleast 1 uppercase, 1 lowercase, 1 number and 1 special character!</span>
                </div>

                <div className='SignInInputContainer'>
                    <label>Confirm Password</label>
                    <input 
                        type="password" 
                        placeholder='Enter Confirm Password' 
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                confirmPassword:e.target.value
                            });
                        }}
                        pattern={formData.password}
                        required
                        onBlur={() => {
                            setBlur({
                                ...blur,
                                confirmPasswordBlur: true
                            })
                        }}
                        confirmPasswordBlur={blur.confirmPasswordBlur.toString()}
                    />
                    <span className='FormSpan'>Password doesn't match!</span>
                </div>

                <div className='SignInButtonDiv'>
                    <button>Register</button>
                </div>

            </form>
            <p style={{textAlign:'center'}}>Already have an account? <Link state={{prevURL: location.state.prevURL}} className='SignInLink' to='/signin'>SignIn</Link></p>
        </div>
    </div>
  )
}

export default Register;