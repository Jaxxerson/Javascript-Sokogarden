import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate=useNavigate()

  // declare 2 states to hold the user data
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

    // three state processes
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // handle submit function
  const handleSubmit=async(e)=>{
    e.preventDefault()

    // set loading
    setLoading("Please Wait...")

    // prepare the form data
    const formData= new FormData

    formData.append("email",email)
    formData.append("password",password)

    try {
      const response=await axios.post("https://ryxn.alwaysdata.net/api/signin",formData)
      setLoading("")
      setError("")
     
      
      if (response.data.User){
        setSuccess(response.data.Message)
        navigate("/getproduct")
        
      }
      else{
        setError(response.data.Message)
      }
      setLoading("")
      }

     catch (error) {
      setLoading("")
      setError(error.Message)
    }
  }

  

  
  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
      <h2>Sign In</h2>
      <h2 className="text-primary">{loading}</h2>
      <h2 className="text-danger">{error}</h2>
      <h2 className='text-success'>{success}</h2>
     
       

      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Email' className='form-control'required onChange={(e)=>setEmail(e.target.value)} /> <br />
        <input type="password" placeholder='Enter Password' className='form-control' required onChange={(e)=>setPassword(e.target.value)} /> <br />
        <input type="submit" value="Sign In" className='w-100 btn btn-outline-danger' />
      </form>

      <p>Don't have an account? <Link to="/signup">Sign Up!</Link></p>
      </div>
    </div>
  )
}

export default Signin
