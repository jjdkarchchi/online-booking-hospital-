import React from 'react'
import './home.css'

const home = () => {
  return (
 <section className='Home'>
  <div className='secContainer container'>
    <div className='hometext'>
     
      <h1 className='title'>
       online booking hospital appointment
       </h1> 
       <p className='subtitle'>

       </p>
       <button className='btn'>
       <a href='a'>explore now</a>
       </button>

    </div>
   <div className='homecard grid'>
    <div className='locationdiv'>
    <label htmlFor='location'>location</label>
    <input type='text'placeholder='dream destination'/>
    </div>
    <div className='distdiv'>
    <label htmlFor='distance'>location</label>
    <input type='text'placeholder='11/meters'/>
    </div>

    <div className='priceDiv'>
    <label htmlFor='location'>location</label>
    <input type='text'placeholder='$140-$500'/>
    </div>
    <button className=''></button>
    
   </div>
   
  </div>

 </section>
  )
}

export default home