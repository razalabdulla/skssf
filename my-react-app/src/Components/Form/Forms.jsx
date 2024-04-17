import React from 'react'
import './Forms.css'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Forms() {
  return (
    <div id='form'>
        <br />
        <br />
        <br />
        <br />
      <h3 className='subject'>Wanna Make Your Poster?</h3>
  
      
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh",marginTop:'-18em' }}>
  <form className='inp'>
    <MDBInput required className='mb-4' type='text' id='form1Example1' label='Name' />
    <label htmlFor="">Image</label>
    <MDBInput required className='mb-4' type='file' id='form1Example2'  />

    <MDBRow className='mb-4'>
      <MDBCol className='d-flex justify-content-center'>
        {/* <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked /> */}
      </MDBCol>
      {/* <MDBCol>
        <a href='#!'>Forgot password?</a>
      </MDBCol> */}
    </MDBRow>

    <a className='btn bt' style={{color:' white ',background:' rgb(68, 157, 209) ',float:'right'}} href='/ready' type='submit' block>
      Make
    </a>
  </form>
</div>


    </div>
  )
}

export default Forms
