
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate=useNavigate()

  // create the 4 states 
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  // 3 states
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")



  // create an arrow function to handle submit]\

  const handleSubmit = async (e) => {
    e.preventDefault()

    // set loading
    setLoading("Please wait....")

    // prepare your data
    const formData = new FormData()

    formData.append("username", username)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("phone", phone)


    try {
      const response = await axios.post("https://ryxn.alwaysdata.net/api/signup", formData)
      setSuccess(response.data.Message)
      setLoading("")
      navigate("/signin")

      // set fields to empty
      setUsername("")
      setEmail("")
      setPassword("")
      setPhone("")

    } catch (error) {
      setError(error.message)
      setLoading("")

    }

    


  }



  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <h2>Sign Up</h2>

        {/* Binding */}
        <h2 className="text-primary">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>
        
        


        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Username' className='form-control' onChange={(e) => setUsername(e.target.value)} required /> <br />
          <input type="email" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} required /> <br />
          <input type="password" placeholder='Enter Password' className='form-control' onChange={(e) => setPassword(e.target.value)} required /> <br />
          <input type="text" placeholder='Enter Phone Number' className='form-control' onChange={(e) => setPhone(e.target.value)} required />  <br />
          <input type="submit" value="Sign Up" className='btn btn-outline-danger w-100' />
        </form>

        <p>Already have an Account? <Link to='/signin'>Sign In!</Link></p>
      </div>
    </div>
  )
}

export default Signup
