import React from 'react'
import BasketProvider from './BasketProvider'
import { createContext } from 'react'
import WishlistProvider from './WishlistProvider'
const MainContext=createContext()
function MainProvider({children}) {
  return (
    <MainContext.Provider>
    <BasketProvider>
        <WishlistProvider>
{children}
</WishlistProvider>
    </BasketProvider>
    </MainContext.Provider>
  )
}

export default MainProvider