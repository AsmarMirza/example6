import React, { useContext, useEffect, useState } from 'react'
import { BasketContext } from '../context/BasketProvider'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../context/WishlistProvider'
import "./home.scss"
function Home() {
    const [products, setProducts] = useState([])
    const {addBasket}=useContext(BasketContext)
    const {addWishlist,isExist}=useContext(WishlistContext)
    useEffect(() => {
        getAllProducts()
    }, [])

    async function getAllProducts(){
        const res=await fetch("http://localhost:3000/example/")
        const data=await res.json()
        setProducts(data)
    }

  return (
    <div>
          <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className='hero'>
<div className='heroText'>
   <div>Get your</div>
   <div className='heroDif'>Education</div>
   <div>today!</div>
</div>
      </section>

      <section className='courses'>
<h1 className='coursesHeading'>Popular Courses</h1>

        <div style={{display:"flex",flexWrap:"wrap",gap:"50px"}}>
{products.map((x)=>(
    
    <div style={{width:"300px",border:"1px solid black",textAlign:"center"}} key={x._id}>
        {isExist(x) ?  <i onClick={()=>addWishlist(x)} className="fa-solid fa-heart"></i>  :<i onClick={()=>addWishlist(x)} className="fa-regular fa-heart"></i>}
        <img style={{width:"100%"}} src={x.image} alt="" />
        <h2>{x.name}</h2>
        <p>{x.description}</p>
        <h4>{x.price}$</h4>
        <button onClick={()=>addBasket(x)}>add basket</button>
        <Link to={`/detail/${x._id}`}>go to detail</Link>
    </div>
))}
        </div>
      </section>

      <section className='main'>
<div className='right'>
<h1>Register now and get a discount <span>50% </span> discount until 1 January</h1>
<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
<button className='rightBtn'>Registor Now</button>
</div>

      </section>



    </div>
  )
}

export default Home