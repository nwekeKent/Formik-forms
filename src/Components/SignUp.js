import React from 'react'
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Article } from './Home';
import { Input, Form, Error } from './SignIn';
import signupLogo from '../Assets/signuplogo.jpg';
import Button from './Button';
import google from '../Assets/google-logo.png'

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname:'',
            email: '',
            password:'',
            password2:'',
        },
        validationSchema: Yup.object({
            password: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .min(8, 'Must be more than 8 characters')
              .required('Enter your password'),
              password2: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .min(8, 'Must be more than 8 characters')
              .required("This can't be empty")
              .oneOf([Yup.ref('password')], 'Passwords does not match'),
              
            firstname: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Enter first name'),
            lastname: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Enter last name'),
           
            email: Yup.string().email('Invalid email address').required('Email cant be empty'),
          }),
        onSubmit: (values, {resetForm}) => {
          alert(JSON.stringify(values, null, 2));
          resetForm({values:''})
        },
      });
     return (
         <Article>
                <img src={signupLogo} alt="gym pics"/>
                <h4>Start your journey with us</h4>
                <Button><img className='google' src={google} alt=""/> Sign up with google</Button>
                <Form onSubmit={formik.handleSubmit}>
                <Input 
                placeholder = 'Enter your firstname'
                id="firstname"
                name="firstname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
                
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                    <Error>{formik.errors.firstname}</Error>
                  ) : null}
                  <Input 
                  placeholder = 'Enter your last name'
                  id="lastname"
                  name="lastname"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                      <Error>{formik.errors.lastname}</Error>
                    ) : null}
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
                  <Input 
                  placeholder = 'Confirm your password'
                  id="password2"
                  name="password2"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password2}
                 
                  
                  />
                  {formik.touched.password2 && formik.errors.password2 ? (
                      <Error>{formik.errors.password2}</Error>
                    ) : null}
                <Button type='submit' primary>Sign Up</Button>
                </Form>
         </Article>
        


     )
 }

 export default SignUp
