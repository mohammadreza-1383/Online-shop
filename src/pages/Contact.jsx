import React, { useContext } from 'react'
import { Count } from '../context/Count'
import { Link } from "react-router-dom"
import SetCount from '../components/SetCount'
export default function Contact() {
  const {num,setNum}=useContext(Count)

  return (<>
    <button onClick={()=>setNum(num+1)}>increase</button>
    <button onClick={()=>setNum(num-1)}>decrease</button>
    <h1>{num}</h1>
    <Link to="/">برو به خانه</Link>

  
    <div>contact</div>


    <div>___________________________________________________</div>
    <SetCount/>

    </>
  )
}
