import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner/Banner'
import Form from '../Components/Form/Forms'
import Footer from '../Components/Footer/Footer'
import Image from '../Components/HeaderImage/Image'
function Home() {
  return (
    <div>
      <Header/>
      <Image/>
      <Banner/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
