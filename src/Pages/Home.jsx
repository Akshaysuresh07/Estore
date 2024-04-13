import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container,Row,Col,Button,Card} from 'react-bootstrap'
import sportjc from '../assets/img_sport_j9bzxuy.png'
import home2 from '../assets/img_mask_group_7.png'
import home3 from '../assets/img_business_shirt_ptnj9lv.png'
import premium from '../assets/premium.png'
import shield from '../assets/shield.png'
import fast from '../assets/fast.png'


function Home() {
  return (
   <>
   
   <Header/>
   <div id='headimg'>
            <Container className='text-start'>
                <Row>
                    <Col></Col>
                    <Col className='headtitle'>
                        <h1>Summer Collection</h1>
                        <p>50% Off On All Products</p>
                        <Button className='me-2'>SHOP NOW</Button>
                        <button className='btn btn-outline-primary '>FIND MORE</button>
                    </Col>
                </Row>
            </Container>
        </div>
        <div >
        <h1 className='text-center fw-bolder  pt-5'>New Arrivals</h1>
        <div className='d-flex mt-5 justify-content-center flex-row'>
            <div className='card m-3 shadow' style={{width: '18rem'}}>
              <img src={sportjc} className="card-img-top" alt="..."/>
                
                
            </div>
            <div className='card m-3 shadow' style={{width: '18rem'}}>
            <img src={home2} className="card-img-top" alt="..."/>
              
              
          </div>
          <div className='card m-3 shadow' style={{width: '18rem'}}>
          <img src={home3} className="card-img-top" alt="..."/>
            
            
        </div>
        <div className='card m-3 shadow' style={{width: '18rem'}}>
        <img src={sportjc} className="card-img-top" alt="..."/>
          
          
      </div>
    


        
        </div>
   <div className='d-flex justify-content-center '>  <Button className='btn btn-primary p-3 md-3  mt-5'>Discover ALL</Button></div>

            
        </div>

        <div className=' d-flex mt-5 justify-content-evenly'>
        <div >
        <img width={'90px'} height={'85px'} src={fast} className= "ms-3" alt="..."/>
        <h5 className='fw-bold me-2'>Free Shipping</h5>
        <p className='text-center pe-5'>For shippings over $100</p>
        
        </div>
        <div >
        <img width={'90px'} height={'85px'} src={premium} className= "ms-3" alt="..."/>
        <h5 className='fw-bold me-2'>Best quality</h5>
        <p className='text-center pe-5'>Premium quality in your hand</p>
        
        </div>
        <div >
        <img width={'90px'} height={'85px'} src={shield} className= "ms-3" alt="..."/>
        <h5 className='fw-bold me-2'>Secure payment</h5>
        <p className='text-center pe-5'> All your credit data is safe</p>
        
        </div>

{/*<Card className='border-0' style={{ width: '11rem' }}>
<Card.Img style={{ width: '150px', height:'100px'}}  className='img-fluid' src={shield} />
<Card.Body>
    <Card.Title className='text-center fw-bold'>Secure payments</Card.Title>
    <Card.Text  className='text-center'>
    All your credit data is safe
  </Card.Text>
    
</Card.Body>
</Card>*/}
    
    

        

        
        
        </div>
       



      
  
   <Footer/>
   </>
  )
}

export default Home