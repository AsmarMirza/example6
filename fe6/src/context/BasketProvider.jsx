import React, { createContext, useState } from 'react'


 export const BasketContext=createContext()
function BasketProvider({children}) {
    const [basket, setBasket] = useState([])
    function addBasket(item){
        const index=basket.findIndex((x)=>x._id===item._id)
        if (index!==-1) {
            basket[index].count++
            setBasket([...basket])
        }
        else{
            setBasket([...basket,{...item,count:1}])
        }
    }
    function decrease(item){
        const index=basket.findIndex((x)=>x._id===item._id)
        if (basket[index].count>1) {
            basket[index].count--
            setBasket([...basket])
        }
    }
    function removeBasket(item){
        setBasket(basket.filter((x)=>x._id!==item._id))
    }

  return (
    <BasketContext.Provider value={{decrease,removeBasket,addBasket,basket}}>

        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider