import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {
  const[productname, setProductname]=useState("")
  const[productdescription,setProductdescription]=useState("")
  const[productcost, setProductcost]=useState("")
  const[productphoto, setProductphoto]=useState("")

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // create a function to handle submit
  const handleSubmit=async (e) => {
    e.preventDefault()

  setLoading("Please Wait...")

  // create form data
  const formData= new FormData
  formData.append("product_name", productname)
  formData.append("product_description",productdescription)
  formData.append("product_cost", productcost)
  formData.append("product_photo", productphoto)

  try {
    const response=await axios.post("https://ryxn.alwaysdata.net/api/add_product", formData)
    setSuccess(response.data.Message)
  } catch (error) {
    setError(error.Message)
    setLoading("")
  }
  
  
  }

  
  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <h2>Upload Products</h2>
        <h2 className='text-primary'>{loading}</h2>
        <h2 className='text-success'>{success}</h2>
        <h2 className='text-danger'>{error}</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Product Name' required className='form-control' onChange={(e)=>setProductname(e.target.value)} /><br />
          <textarea name="" id="" cols="30" rows="2" required className='form-control' placeholder='Describe your product' onChange={(e)=>setProductdescription(e.target.value)}></textarea><br />
          <input type="text" placeholder='Enter Product cost' required className='form-control' onChange={(e)=>setProductcost(e.target.value)}/><br />
          <input type="file" className='form-control' required onChange={(e)=>setProductphoto(e.target.files[0])} accept='image/*' /> <br />
          <input type="submit" className='btn btn-outline-primary w-100' value="Upload Product" />
        </form>
      </div>
    </div>
  )
}

export default AddProduct
