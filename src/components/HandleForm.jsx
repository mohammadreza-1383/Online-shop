import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { useCount } from '../hooks/useCount'
import { Link } from "react-router-dom";

const HandleForm = () => {
    const [s,i,a]= useCount()

const scema = yup.object().shape({

name:yup.string().required(),
age:yup.number().positive().min(10).max(100).required()
})

const{register, handleSubmit }=useForm({resolver:yupResolver(scema)})

const formsubmit=(data)=>{
console.log(data)
}

  return (
<>

<form onSubmit={handleSubmit(formsubmit)} >

<input type="text" placeholder='name...' {...register("name")} />
<input type="number" placeholder='age...'{...register("age")} />
<input type="submit" />
</form>

<h1>----------------------------------------------------------</h1>
<h1>hook</h1>

<button onClick={i}>increase</button>
    <button onClick={a}>decrease</button>
    <h1>{s}</h1>
    <Link to="/">برو به خانه</Link>

</>  )
}

export default HandleForm