import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div id='Banner'>
      <br />
      <br />
      <h4 className='subject' data-aos="zoom-in-up" data-aos-duration="2500">Subject</h4>
      <br />
      <div className="center">
  <div className="sample-poster">
    <img className='sample-poster'data-aos="zoom-in" data-aos-duration="2500"src='https://photostock.skssf.in/preview/111622.jpg' alt="" />
    <div className="name-div">
      <p className='name'>Name</p>
    </div>
  </div>
  <img className='another-image'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_upzZ7ljAZIdBCo1AL1A3BPA5i_b2K1HI4w&usqp=CAU' alt="" />
</div>
    </div>
  )
}
export default Banner