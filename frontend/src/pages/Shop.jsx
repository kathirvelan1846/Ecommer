import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offers } from '../components/offers/Offers'
import { Newcollection } from '../components/new_collection/Newcollection'
import { Newsletter } from '../components/Newsletter/Newsletter'
import { LoginSignup } from './LoginSignup'

 


export const Shop = () => {
  return (
 
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollection/>
        <Newsletter/>
        <LoginSignup/>
        
       
         
    </div>
    
  )
}
