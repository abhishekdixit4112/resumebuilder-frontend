import React from 'react'

const Achievement = ({formData,setFormData}) => {
  return (
    <div className="container d-flex justify-content-center">
    <form className="row g-3">
  <div className="col-md-6"> 
  <label for="name" className="form-label"><b>Achievement 1 :</b></label>
    <input type="text" className="form-control" id="name" value={formData.achiev1} onChange={(e)=>{
      setFormData({...formData,achiev1:e.target.value})
    }}/>
  </div>
<hr />
<div className="col-md-6">
<label for="name" className="form-label"><b>Achievement 2 :</b></label>
    <input type="text" className="form-control" id="name" value={formData.achiev2} onChange={(e)=>{
      setFormData({...formData,achiev2:e.target.value})
    }}/>
  </div>
  <hr />
  <div className="col-md-6">
<label for="name" className="form-label"><b>Achievement 3 (If Any) :</b></label>
    <input type="text" className="form-control" id="name" value={formData.achiev3} onChange={(e)=>{
      setFormData({...formData,achiev3:e.target.value})
    }}/>
  </div>
</form>
</div>
  )
}

export default Achievement;
