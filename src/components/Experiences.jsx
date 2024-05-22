import React from 'react'

const Experience = ({formData,setFormData}) => {
  return (
    <div className="container">
    <form className="row g-3">
  <div className="col-md-6">
    <label for="name" className="form-label"><b>Enter Company Name You Worked For</b></label>
    <input type="text" className="form-control" id="name" value={formData.exp1_org} onChange={(e)=>{
      setFormData({...formData,exp1_org:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="email" className="form-label"><b>Job Role</b></label>
    <input type="email" className="form-control" id="email" value={formData.exp1_pos} onChange={(e)=>{
      setFormData({...formData,exp1_pos:e.target.value})
    }}/>
  </div>
  <div className="col-md-4">
    <label for="phone" className="form-label"><b>Duration of Work</b></label>
    <input type="text" className="form-control" id="phone" value={formData.exp1_dur} onChange={(e)=>{
      setFormData({...formData,exp1_dur:e.target.value})
    }}/>
  </div>
  <div className="col-md-8">
    <label for="edu1_desc" className="form-label"> <b>Job Description</b></label>
    <input type="text" className="form-control" id="github"
    value={formData.exp1_desc} onChange={(e)=>{
      setFormData({...formData,exp1_desc:e.target.value})
    }}/>
  </div>
  <hr/>
<div className="col-md-6">
<label for="name" className="form-label"><b>Enter Company Name You Worked For</b></label>
    <input type="text" className="form-control" id="name" value={formData.exp2_org} onChange={(e)=>{
      setFormData({...formData,exp2_org:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="email" className="form-label"><b>Job Role</b></label>
    <input type="email" className="form-control" id="email" value={formData.exp2_pos} onChange={(e)=>{
      setFormData({...formData,exp2_pos:e.target.value})
    }}/>
  </div>
  <div className="col-md-4">
    <label for="phone" className="form-label"><b>Duration of Work</b></label>
    <input type="text" className="form-control" id="phone" value={formData.exp2_dur} onChange={(e)=>{
      setFormData({...formData,exp2_dur:e.target.value})
    }}/>
  </div>

  <div className="col-md-8">
    <label for="edu1_desc" className="form-label"><b>Job description</b></label>
    <input type="text" className="form-control" id="github" 
    value={formData.exp2_desc} onChange={(e)=>{
      setFormData({...formData,exp2_desc:e.target.value})
    }}/>
  </div>
</form>
</div>
  )
}

export default Experience;
