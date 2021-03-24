import React from 'react'
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Article } from './Home';
import threadmill from '../Assets/Threadmill.jpg';
import Button from './Button';
import google from '../Assets/google-logo.png'


export const Line = styled.div`
        margin-top: 90px;
        width: 100%;
        height: 80px;
        background-color: #000;

`
export const Form = styled.form`
        display: flex;
        flex-direction: column;
        width:100%;


`
 export const Input = styled.input`
    width: 100%;
    border:1px solid #E0E0E0;
    outline:none;
    padding: 0.2em 0.85em;
    margin-bottom: 10px;
    font-size: 0.8rem;
    font-family: 'josefin sans', sans-serif;

    &::placeholder {
        font-size: 0.5rem;
        font-family: 'josefin sans', sans-serif;
        color:black;
    }

&.error {
    border: 1px solid #CC2500;
}
 
 
 `

 export const Error = styled.p`
         font-size: 0.5rem;
         color: #CC2500;
         margin-bottom: 5px;
         margin-top:0;
 
 `

 const SignIn = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
        },
        validationSchema: Yup.object({
            password: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .min(8, 'must be more than 8 characters')
              .required('enter your password'),
           
            email: Yup.string().email('Invalid email address').required('email cant be empty'),
          }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
     return (
         <Article>
                <img src={threadmill} alt="gym pics"/>
                <h3>Welcome Back!</h3>
                <small>You have been missed</small>
                <Button><img className='google' src={google} alt=""/> Sign in with google</Button>
                <Form onSubmit={formik.handleSubmit}>
                <Input 
                placeholder = 'Enter your email address'
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                
                />
                {formik.touched.email && formik.errors.email ? (
                    <Error>{formik.errors.email}</Error>
                  ) : null}
                <Input 
                placeholder = 'Enter your password'
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
               
                
                />
                {formik.touched.password && formik.errors.password ? (
                    <Error>{formik.errors.password}</Error>
                  ) : null}
                <Button type='submit' primary>Sign In</Button>
                </Form>
         </Article>
        


     )
 }

 export default SignIn