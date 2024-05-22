import React from 'react'

const Education = ({formData,setFormData}) => {
  return (
    <div className="container">
    <form className="row g-3">
  <div className="col-md-6">
    <label for="name" className="form-label"><b>Enter Your First Institute Name</b></label>
    <input type="text" className="form-control" placeholder="School Name" id="name" value={formData.edu1_school} onChange={(e)=>{
      setFormData({...formData,edu1_school:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="email" className="form-label"><b>Session</b></label>
    <input type="email" className="form-control" id="email" placeholder="2018-2020" value={formData.edu1_year} onChange={(e)=>{
      setFormData({...formData,edu1_year:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="phone" className="form-label"><b>Degree You Persued</b></label>
    <input type="text" className="form-control" id="phone" placeholder="10th,12th" value={formData.edu1_qualification} onChange={(e)=>{
      setFormData({...formData,edu1_qualification:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="phone" className="form-label"><b>Marks Obtained</b></label>
    <input type="text" className="form-control" id="phone" placeholder="98% (In %)" value={formData.grade1} onChange={(e)=>{
      setFormData({...formData,grade1:e.target.value})
    }}/>
  </div>
<hr />
<div className="col-md-6">
<label for="name" className="form-label"><b>Enter Your Second Institute Name</b></label>
    <input type="text" className="form-control" id="name" placeholder="College Name" value={formData.edu2_school} onChange={(e)=>{
      setFormData({...formData,edu2_school:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="email" className="form-label"><b>Session</b></label>
    <input type="email" className="form-control" id="email" placeholder="2020-2024" value={formData.edu2_year} onChange={(e)=>{
      setFormData({...formData,edu2_year:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="phone" className="form-label"><b>Degree You Persued</b></label>
    <input type="text" className="form-control" id="phone" placeholder="BCA,B-Tech,MCA" value={formData.edu2_qualification} onChange={(e)=>{
      setFormData({...formData,edu2_qualification:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
    <label for="phone" className="form-label"><b>Marks Obtained</b></label>
    <input type="text" className="form-control" id="phone" placeholder="8 SGPA ,9 CGP" value={formData.grade2} onChange={(e)=>{
      setFormData({...formData,grade2:e.target.value})
    }}/>
  </div>

  {/* <div className="col-12">
    <label for="edu1_desc" className="form-label"><b>Enter your Short Description</b></label>
    <input type="text" className="form-control" id="github" 
    value={formData.edu2_desc} onChange={(e)=>{
      setFormData({...formData,edu2_desc:e.target.value})
    }}/>
  </div> */}
</form>
</div>
  )
}

export default Education;
