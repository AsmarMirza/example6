import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketProvider'
import { Helmet } from 'react-helmet-async'

function Basket() {
    const{basket,addBasket,removeBasket,decrease}=useContext(BasketContext)
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"50px"}}>
          <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
{basket.map((x)=>(
    <div style={{width:"300px",border:"1px solid black",textAlign:"center"}} key={x._id}>
        <img style={{width:"100%"}} src={x.image} alt="" />
        <h2>{x.name}</h2>
        <p>{x.description}</p>
        <h4>{x.price}$</h4>
        <p>Count:{x.count}</p>
        <button onClick={()=>addBasket(x)}>+</button>
        <button onClick={()=>decrease(x)}>-</button>
        <button onClick={()=>removeBasket(x)}>remove basket</button>
    </div>
))}
    </div>
  )
}

export default Basket