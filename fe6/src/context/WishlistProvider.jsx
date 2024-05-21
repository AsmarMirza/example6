import React, { useState } from 'react'
import { createContext } from 'react'


 export const WishlistContext=createContext()
function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([])
    function addWishlist(item){
        const index=wishlist.findIndex((x)=>x._id===item._id)
        if (index!==-1) {
            setWishlist(wishlist.filter((x)=>x._id!==item._id))
        }
        else{
            setWishlist([...wishlist,item])
        }
    }


    
    function removeWishlist(item){
        setWishlist(wishlist.filter((x)=>x._id!==item._id))
    }

    function isExist(item){
        return wishlist.findIndex((x)=>x._id ===item._id) !== -1
    }
  return (
<WishlistContext.Provider value={{addWishlist,wishlist,removeWishlist,isExist}}>
    {children}
</WishlistContext.Provider>

    
  )
}

export default WishlistProvider