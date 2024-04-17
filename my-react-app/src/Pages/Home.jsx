import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner/Banner'
import Form from '../Components/Form/Forms'
import Footer from '../Components/Footer/Footer'
import HeaderImage from '../Components/HeaderImage/HeaderImage'
function Home() {
  return (
    <div>
      <Header/>
      <HeaderImage/>
      <Banner/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
