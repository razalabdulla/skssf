import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
  
    
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
        
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="x" />
          </a>
        
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6  data-aos="fade-in"data-aos-duration="2500"  className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" data-aos="fade-in"data-aos-duration="2500" />
                Logic leap
              </h6>
              <p  data-aos="fade-in"data-aos-duration="2500">
              Logic Leap: Your Partner in Digital Innovation. Trusted by businesses worldwide for our expertise in web and app development, graphic design, SEO optimization, and more. Let's propel your digital presence forward together.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'> 
              <h6  className='text-uppercase fw-bold mb-4' data-aos="fade-in"data-aos-duration="2500">Products</h6>
              <p>
               
              </p>
              <p>
                <a href='#!' className='text-reset'>
                MongoDb
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  NodeJs(express)
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'  data-aos="fade-in"data-aos-duration="2500">Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' data-aos="fade-in"data-aos-duration="2500" >Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Enywhere at any time:)
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                logicleap00@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 80890 60979
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 89219 85118
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href=''>
          logicleap.in
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
