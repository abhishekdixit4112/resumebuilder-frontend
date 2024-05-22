import React from 'react'

const Certifications = ({formData,setFormData}) => {
  return (
    <div className="container d-flex justify-content-center">
    <form className="row g-3">
  <div className="col-md-6"> 
  <label for="name" className="form-label"><b>Certificate 1 :</b></label>
    <input type="text" className="form-control" id="name" value={formData.certif1} onChange={(e)=>{
      setFormData({...formData,certif1:e.target.value})
    }}/>
  </div>
<hr />
<div className="col-md-6">
<label for="name" className="form-label"><b>Certificate 2 (If Any):</b></label>
    <input type="text" className="form-control" id="name" value={formData.certif2} onChange={(e)=>{
      setFormData({...formData,certif2:e.target.value})
    }}/>
  </div>
  <hr />
  <div className="col-md-6">
   <label for="name" className="form-label"><b>Certificate 3 (If Any) :</b></label>
    <input type="text" className="form-control" id="name" value={formData.certif3} onChange={(e)=>{
      setFormData({...formData,certif3:e.target.value})
    }}/>
  </div>
</form>
</div>
  )
}

export default Certifications;
