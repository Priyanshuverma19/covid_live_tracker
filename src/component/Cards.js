 import React, { useEffect, useState } from 'react'
 import {Card,Container,Row} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css'

 
 const Cards= () => {
  const [data, setData] = useState([]);
    const getCovidData= async()=>{
        try{
     const res=   await fetch('https://api.covidtracking.com/v1/us/daily.json')
     const data= await res.json();
     console.log(data[0]);
     setData(data[0])
    } catch(err){
        console.log(err);
    }
}
    useEffect(()=>{
        getCovidData();

    },[]);
   return (
     <>
     <h1  class="text-center">Covid-19 Live Tracker</h1>
 <Container className='p-3'>  
     <Row> 
  <Card bg="primary"  text="white" style={{width:"25%"}} className="m-2 text-center">  
    <Card.Body>  
      <Card.Title> <span className='fs-6'>Our </span>COUNTRY</Card.Title>  
      <Card.Text>  
     <span className='fs-1'>INDIA</span>
      </Card.Text>  
    </Card.Body>  
  </Card>  
 
  <Card bg="success"  text="white" style={{width:"25%"}} className="m-2 text-center ">  
    <Card.Body>  
      <Card.Title> <span className='fs-6'>Total </span>NEGATIVE</Card.Title>  
      <Card.Text>  
      <span className='fs-1'>{data.negative}</span>
      </Card.Text>  
    </Card.Body>  
  </Card>  
  <Card bg="danger"  text="white" style={{width:"25%"}} className="m-2 text-center">  
    <Card.Body>  
      <Card.Title> <span className='fs-6'>Total </span>POSITIVE</Card.Title>  
      <Card.Text>  
      <span className='fs-1'>{data.positive}</span>
      </Card.Text>  
    </Card.Body>  
  </Card>  
  <Card bg="warning"  text="white" style={{width:"25%"}} className="m-2 text-center">  
    <Card.Body>  
      <Card.Title> <span className='fs-6'>Total </span>DETH</Card.Title>  
      <Card.Text>  
      <span className='fs-1'>{data.death}</span>
      </Card.Text>  
    </Card.Body>  
  </Card>  
  <Card bg="dark"  text="white" style={{width:"25%"}} className="m-2 text-center">  
    <Card.Body>  
      <Card.Title> <span className='fs-6'>Total </span>TEST RESULT</Card.Title>  
      <Card.Text>  
      <span className='fs-1'>{data.totalTestResults}</span>
      </Card.Text>  
    </Card.Body>  
  </Card>  
  <Card bg="secondary"  text="white" style={{width:"25%"}} className="m-2 ">  
    <Card.Body>  
      <Card.Title> <span className='fs-6'>Last  </span>UPDATE</Card.Title>  
      <Card.Text>  
    <span className='fs-1'>{data.lastModified}</span>
      </Card.Text>  
    </Card.Body>  
  </Card>  
  
</Row>
       </Container>
  
     </>
   )
 }
 
 export default Cards