import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Count } from '../context/Count'
import { Link } from 'react-router-dom'
import { useCount } from '../hooks/useCount'
import SetCount from './SetCount'

export default function User() {
const [s,i,a]= useCount()
const {num,setNum}=useContext(Count)
  return (<>
  <div >
  <Link to="/contact">برو به صفحه تماس</Link>
  <Link to="/form">form</Link>

    <button onClick={()=>setNum(num+1)}>increase</button>
    <button onClick={()=>setNum(num-1)}>decrease</button>
    <h1>{num}</h1>
<h1>----------------------------------------------------------</h1>
<h1>hook</h1>

<button onClick={i}>increase</button>
    <button onClick={a}>decrease</button>
    <h1>{s}</h1>


    <h1>----------------------------------------------------------</h1>


<SetCount/>


</div>
    </>
  )
}
