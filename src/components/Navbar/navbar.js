import { useState } from 'react';

import './navbar.css'  
import { RiHospitalFill } from 'react-icon/Ri'
import { AiFillCloseCircle} from 'react-icons/ai'
import { TbGridDots} from 'react-icons/tb'

const navbar = () => {
  //code to toggle/show navbar
  
  const{active,setActive} = useState('navBar')
  const showNav =()=>{
    setActive('navBar activNavbar')
  }

  //code to remove Navbar 
  const removeNav =()=>{
    setActive('navBar activeNavbar')

  }
  return (
   <section className='navbarsection'>
   <div className="header">
     
     <div className="logoDiv">

      <a href="#" ClassName="logo">
      <h1 className='flex'><RiHospitalFill ClassName="icon"/></h1>
       Dot
      </a>
    </div>
    <div  className={active} > 
    </div>

    <div className='navbar'>
      <ul className='navLists flex'>
          <li className='navbar'>
            <a href="a" className="navLink">home</a>
          </li>  
          <li className='navbar'>
            <a href="a" className="navLink">products</a>
          </li> 
           <li className='navbar'>
            <a href="a" className="navLink">Resources</a>
          </li>
          <li className='navbar'>
            <a href="a" className="navLink">contact</a>
          </li>  
          <li className='navbar'>
            <a href="a" className="navLink">Blog</a>
          </li>
          <div className='headerBtns fiex'>
          <button className="btn loginbtn">
            <a href='a'>Login</a>
          </button>
          <button className="btn loginbtn">
            <a href='a'>Sign up</a>
          </button>
          </div> 
    </ul>
      
    <div  onclick={removeNav} className='closeNavbar'>
    <AiFillCloseCircle className="icon"/>

      
    </div>
    </div>

   <div onClick={showNav}
    className="toggleNavbar">
      <TbGridDots className='icon'/>

   </div>

   </div>



   </section>
  )
}

export default navbar

