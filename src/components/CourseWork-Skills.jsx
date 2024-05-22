import React from 'react'

const CourseWork = ({formData,setFormData}) => {
  return (
    <div className="container d-flex justify-content-center">
    <form className="row g-3">
  <div className="col-md-6">
  <h4>Technologies / FrameWorks :</h4>
    <input type="text" className="form-control" placeholder="ReactJs,NodeJs,Tailwind CSS" id="name" value={formData.skill1} onChange={(e)=>{
      setFormData({...formData,skill1:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
  <h4>Languages :</h4>
    <input type="text" className="form-control" placeholder="C,C++,HTML/CSS,JavaScript" id="name" value={formData.skill2} onChange={(e)=>{
      setFormData({...formData,skill2:e.target.value})
    }}/>
  </div>
<hr />
<div className="col-md-6">
<h4>Developer Tools :</h4>
    <input type="text" className="form-control" placeholder="VS Code,Figma,FireBase,GitHub" id="name" value={formData.skill3} onChange={(e)=>{
      setFormData({...formData,skill3:e.target.value})
    }}/>
  </div>
  <div className="col-md-6">
  <h4>Relavant CourseWork :</h4>
    <input type="text" className="form-control" id="name" placeholder="DataStructures,Algorithms,OOP's,Computer Networks" value={formData.skill4} onChange={(e)=>{
      setFormData({...formData,skill4:e.target.value})
    }}/>
  </div>
</form>
</div>
  )
}

export default CourseWork;
