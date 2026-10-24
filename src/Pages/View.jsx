import React, { useState } from 'react'
import { FaFileDownload,FaBackward } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { IoMdRefreshCircle } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Edit from '../Components/Edit'
import Preview from '../Components/Preview';
import { viewResumeApi } from '../service/apiService';
import { useEffect } from 'react';

function View() {
  const [resume, setResume] = useState()
  const {id}=useParams()
  console.log(id);

  useEffect(()=>{
    getResumeDetails()
  },[])
  
   
  const getResumeDetails=async()=>{
    const response=await viewResumeApi(id)
    if(response.status===200){
      setResume(response.data)
     
    }
  }
  console.log("Resume details:", resume);
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* Navigation icons */}
          <div className="d-flex justify-content-center align-items-center">
            {/* download */}
            <button style={{ color: '#4d321d' }} className='btn'><FaFileDownload />Download CV</button>
            {/* edit */}
            <Edit/>
            {/* all resume */}
            <Link to={'/all-resumes'} style={{color:'#4d321d'}} className='btn mx-2'><IoMdRefreshCircle />All resume</Link>
            {/* download history */}
            <Link to={'/downloads'} style={{color:'#4d321d'}} className='btn mx-2'><FiFileText />Download history</Link>
            {/* back */}
            <Link to={'/resume-details'} style={{color:'#4d321d'}} className='btn mx-2'><FaBackward />Previous</Link>
          </div>
          <div className='p-5'>
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>

    </div>
  )
}

export default View
