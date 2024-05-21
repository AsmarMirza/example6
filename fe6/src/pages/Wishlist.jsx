import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../context/WishlistProvider'

function Wishlist() {
    const {wishlist,removeWishlist}=useContext(WishlistContext)
  return (
    <div>
          <Helmet>
        <title>wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {wishlist.map((x)=>(
    <div style={{width:"300px",border:"1px solid black",textAlign:"center"}} key={x._id}>
        <img style={{width:"100%"}} src={x.image} alt="" />
        <h2>{x.name}</h2>
        <p>{x.description}</p>
        <h4>{x.price}$</h4>
        <button onClick={()=>removeWishlist(x)}>remove wishlist</button>
    </div>
))}
    </div>
  )
}

export default Wishlist