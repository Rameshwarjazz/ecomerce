import React from 'react'
import { Hero } from '../Component/Hero/Hero'
import { Popular } from '../Component/Popular/Popular'
import { Offers } from '../Component/Offers/Offers'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
    </div>
  )
}
