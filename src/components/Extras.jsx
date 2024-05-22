import {React} from 'react'
import Success from "./Success";

const Extras = ({formData,setFormData}) => { 
  return (
    <>
    <div className="container d-flex justify-content-center">
    <form className="row g-3">
      <h4>Languages You speak :</h4>
  <div className="col-md-6">
    <label for="name" className="form-label"><b>Languages</b></label>
    <input type="text" className="form-control" id="name" value={formData.extra_1} onChange={(e)=>{
      setFormData({...formData,extra_1:e.target.value})
    }}/>
  </div>
<hr />
<h4>Things You Like To Do :</h4>
<div className="col-md-6">
<label for="name" className="form-label"><b>Hobbies</b></label>
    <input type="text" className="form-control" id="name" value={formData.extra_2} onChange={(e)=>{
      setFormData({...formData,extra_2:e.target.value})
    }}/>
  </div>
</form>
</div>
<br />
{Success && <Success />}
</>
  )
}

export default Extras;
