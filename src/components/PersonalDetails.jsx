import React from 'react'

const PersonalDetails = ({formData,setFormData}) => {
  return (
    <div className="container">
    <form className="row g-3">
  <div className="col-md-6">
    <label for="name" className="form-label " ><b>Name</b></label>
    <input type="text" className="form-control" id="name" value={formData.name} onChange={(e)=>{
      setFormData({...formData,name:e.target.value})
    }} required/>
  </div>
  <div className="col-md-6">
    <label for="email" className="form-label"><b>Email</b></label>
    <input type="email" className="form-control" id="email" value={formData.email} onChange={(e)=>{
      setFormData({...formData,email:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="phone" className="form-label"><b>Phone</b></label>
    <input type="text" className="form-control" id="phone" value={formData.phone} onChange={(e)=>{
      setFormData({...formData,phone:e.target.value})
    }}/>
  </div>

  <div className="col-12">
    <label for="github" className="form-label"><b>GitHub</b></label>
    <input type="text" className="form-control" id="github" placeholder="https://github/YOURUSERNAME"
    value={formData.github} onChange={(e)=>{
      setFormData({...formData,github:e.target.value})
    }}/>
  </div>

  <div className="col-12">
    <label for="linkedin" className="form-label"><b>LinkedIn</b></label>
    <input type="text" className="form-control" id="linkedin" placeholder="https://linkedin/YOURUSERNAME"
    value={formData.linkedin} onChange={(e)=>{
      setFormData({...formData,linkedin:e.target.value})}}
      />
  </div>
  <div className="col-12">
    <label for="leetcode" className="form-label"><b>Leetcode</b></label>
    <input type="text" className="form-control" id="leetcode" placeholder="https://leetcode/YOURUSERNAME"
    value={formData.leetcode} onChange={(e)=>{
      setFormData({...formData,leetcode:e.target.value})}}
    />
  </div>

</form>
</div>
  )
}

export default PersonalDetails;
