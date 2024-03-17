import React from 'react'
import Popular from '../components/popular'
import Veg from '../components/Veg'
import SearchIng from '../components/searchIng'
import Modal from "../components/modal.js"
// import Searched from "../components/searched.js"


function Home() {
  return (
    <div>
      <SearchIng />
    <Popular />
    <Veg />
    <Modal /> 
    </div>
  )
}

export default Home
