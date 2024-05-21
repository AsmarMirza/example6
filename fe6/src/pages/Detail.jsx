import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id}=useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct(){
        const res=await fetch("http://localhost:3000/example/"+id)
        const data=await res.json()
        setProducts(data)
    }
  return (
    <div>
          <Helmet>
        <title>Detail</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
          <div style={{width:"300px",border:"1px solid black",textAlign:"center"}} >
        <img style={{width:"100%"}} src={products.image} alt="" />
        <h2>{products.name}</h2>
        <p>{products.description}</p>
        <h4>{products.price}$</h4>
   
    </div>
    </div>
  )
}

export default Detail