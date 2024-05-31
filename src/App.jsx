import './App.css'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //state to hold values from input field
  const[principle,setprinciple]=useState(0)
  const[rate,setrate]=useState(0)
  const[year,setyear]=useState(0)
  const[interest,setinterest]=useState(0)

  // conditional rendering
  const[isprinciple,setisprinciple]=useState(true)
  const[israte,setisrate]=useState(true)
  const[isyear,setisyear]=useState(true)

  

  const validate=(e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);

    let name=e.target.name
    let value=e.target.value
    console.log(!!value.match(/^[0-9]*$/));

   if(!!value.match(/^[0-9]*$/)) {
    if(name=='principle'){
      setprinciple(value)
      setisprinciple(true)

    }
    else if(name=='rate'){
      setrate(value)
      setisrate(true)
    }
    else{
      setyear(value)
      setisyear(true)

    }
   }

   else{
    if(name=='principle'){
      setprinciple(value)
      setisprinciple(false)

    }
    else if(name=='rate'){
      setrate(value)
      setisrate(false)
    }
    else{
      setyear(value)
      setisyear(false)

    }

   }


  }

  const handlereset = ()=>{
    setprinciple(0)
    setrate(0)
    setyear(0)
    setisprinciple(true)
    setisrate(true)
    setisyear(true)
    setinterest(0)
   
  }

  const calculate=()=>{
  setinterest (( principle*rate*year)/100)

  }
  // console.log('principle',principle);
  // console.log('rate',rate);
  // console.log('year',year);
  

  return (
    <>
   <div className='bg-dark d-flex align-items-center justify-content-center' style={{height:'100vh',width:'100vw',position:'relative'}}>

      <div className='d-flex flex-column align-items-center justify-content-center bg-light p-5 rounded ' style={{position:'absolute'}}>

        <h1>Simple interest App</h1>
        <span >Calculate Your simple interest easily</span>

        <div className='bg-warning mt-5 w-100 rounded p-4 d-flex flex-column align-items-center justify-content-center shadow'>
          <span className='fs-1 '><i class="fa-solid fa-indian-rupee-sign"></i>{interest}</span>
          <h6>Total simple interest</h6>

        </div>

        <form className='mt-5'>

          <div className='mb-3'>
            
            <TextField id="outlined-basic" name='principle' label="₹Principle amount" onChange={(e)=>validate(e)} variant="outlined" />

           {/* //conditional rendering */}

             { !isprinciple &&
             <p className='text-danger'>*Invalid input</p>}
              
          </div>

          <div className='mb-3'>
          <TextField id="outlined-basic" name='rate'  label="Rate of interest (p.a)%" onChange={(e)=>validate(e)} variant="outlined" />

          { !israte &&
            <p className='text-danger'>*Invalid input</p>}
          </div>

          <div className='mb-3'>
          <TextField id="outlined-basic" name='year' label="Year(Yr)" onChange={(e)=>validate(e)} variant="outlined" />

          { !isyear &&
            <p className='text-danger'>*Invalid input</p>}
          </div>

          <div className="d-flex justify-content-between w-100 mt-4">
          <Button variant="contained" color='success'disabled={isprinciple && israte && isyear ? false:true} onClick={calculate}>Calculate</Button>
          <Button variant="outlined" onClick={handlereset}>Reset</Button>
          </div>

        </form>
      </div>

   </div>
     
    </>
  )
}

export default App
