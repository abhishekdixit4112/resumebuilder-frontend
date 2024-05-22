import React from 'react'

const Project = ({formData,setFormData}) => {
  return (
    <div className="container">
    <form className="row g-3">
  <div className="col-md-6">
    <label for="name" className="form-label"><b>Enter Your First Project Name</b></label>
    <input type="text" className="form-control" id="name" value={formData.proj1_title} onChange={(e)=>{
      setFormData({...formData,proj1_title:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="email" className="form-label"><b>Link to Project</b></label>
    <input type="email" className="form-control" id="email" value={formData.Proj1_link} onChange={(e)=>{
      setFormData({...formData,proj1_link:e.target.value})
    }}/>
  </div>
  <div className="col-12">
    <label for="edu1_desc" className="form-label"><b>Description of Project</b></label>
    <input type="text" className="form-control" id="github"
    value={formData.proj1_desc} onChange={(e)=>{
      setFormData({...formData,proj1_desc:e.target.value})
    }}/>
  </div>
<hr />
<div className="col-md-6">
<label for="name" className="form-label"><b>Enter Your Second Project Name</b></label>
    <input type="text" className="form-control" id="name" value={formData.proj2_title} onChange={(e)=>{
      setFormData({...formData,proj2_title:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="email" className="form-label"><b>Link to Project</b></label>
    <input type="email" className="form-control" id="email" value={formData.proj2_link} onChange={(e)=>{
      setFormData({...formData,proj2_link:e.target.value})
    }}/>
  </div>
  <div className="col-12">
    <label for="edu1_desc" className="form-label"><b>Description of Project</b></label>
    <input type="text" className="form-control" id="github" 
    value={formData.proj2_desc} onChange={(e)=>{
      setFormData({...formData,proj2_desc:e.target.value})
    }}/>
  </div>
</form>
</div>
  )
}

export default Project;
