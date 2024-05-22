import React, { useState } from "react";
import Education from "./Education";
import Experiences from "./Experiences";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";
import Extras from "./Extras";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import CourseWork from "./CourseWork-Skills";
import axios from "axios";
import { saveAs } from "file-saver";
// import Success from "./Success";
const Form = () => {
   const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    leetcode: "",
    
    skill1:"",
    skill2:"",
    skill3:"",
    skill4:"",
  
    

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_des: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
     grade1:"",

    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    grade2:"",

    achiev1: "",
    achiev2: "",
    achiev3: "",

    certif1: "",
    certif2: "",
    certif3: "",

    extra_1: "",
    extra_2: "",
  });

  const [page, setPage] = useState(0);
  const FormTitle = [
    "Personal Details",
    "Education",
    "CourseWork / Skills",
    "Experience",
    "Projects",
    "Achievements",
    "Certifications",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    }
    else if (page === 2) {
      return <CourseWork formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Project formData={formData} setFormData={setFormData} />;
    }
    else if (page === 5) {
      return <Achievements formData={formData} setFormData={setFormData} />
    }

    else if (page === 6) {
      return <Certifications formData={formData} setFormData={setFormData} />
    }
    else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h1 className="text-center colour2 ">{FormTitle[page]}</h1>
      </div>
      <br />
      <div className="progressbar mx-auto w-50">
        <div className="w-20 h-100"
          style={{
            width:
              page === 0
                ? "12%"
                : page === 1
                  ? "25%"
                  : page === 2
                    ? "36%"
                    : page === 3
                      ? "49%"
                      : page === 4
                        ? "60%"
                        : page===5
                        ? "73%"
                        : page===6
                        ? "87%"
                        : "100%",
          }}
        ></div>
      </div>
      <br />
      <br />
      <div className="colour">{PageDisplay()}</div>
      <div className="d-flex justify-content-center gap-3 py-5 fixed-bottom">
       
        <button 
          className="btn btn-dark"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (page === FormTitle.length - 1) {
              axios
                .post("http://localhost:4000/create-pdf", formData)
                .then(() =>
                  axios.get("http://localhost:4000/fetch-pdf", {
                    responseType: "blob",
                  })
                )
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  setSuccess(true && res.status === 200);
                  saveAs(pdfBlob, "Resume.pdf");
                });
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
            >
              {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
        </button>
        
      </div>
      {/* <div  className='text-center fixed-bottom fs-5'><b>NOTE:-</b><b className='fs-5'>Fill all the fields correctly and with proper spacing for the better Experience.</b>
    </div> */}
    </div>
  );
};

export default Form;