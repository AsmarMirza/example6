import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
function Add() {

    async function addProducts(values){
        const res=await fetch("http://localhost:3000/example/",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(values)
        }
        )
        const data=await res.json()
        
    }
  return (
    <div>
          <Helmet>
        <title>Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Formik
       initialValues={{ image: '', name: '', price: '' }}
       validationSchema={Yup.object({
         image: Yup.string()
           .required('Required'),
         name: Yup.string()
           .required('Required'),
         price: Yup.number().required('Required'),
       })}
       onSubmit={(values, { resetForm }) => {
        addProducts(values)
         resetForm()
       }}
     >
       <Form>
         <label htmlFor="image">Image</label><br />
         <Field name="image" type="text" /><br />
         <ErrorMessage name="image" />
 
         <label htmlFor="name"> Name</label><br />
         <Field name="name" type="text" /><br />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">price </label><br />
         <Field name="price" type="number" /><br />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add