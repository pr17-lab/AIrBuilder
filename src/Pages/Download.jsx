import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { getAllDownloadResumeApi } from '../service/apiService';

function Download() {

  const [downloadList,setDownloadList] = useState([])

  useEffect(()=>{
    getAllDownloads()
  },{})

  const getAllDownloads = async()=>{
    const result = await getAllDownloadResumeApi()
    setDownloadList(result.data)
  }

  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='fs-1'>Download Resume History</h3>
        <Link to={'/resume-details'}><FaArrowLeft />Back</Link>
      </div>
      <div className="row my-5">
        {/* Duplicate the row according to the resume count */}
        
        {
          downloadList?.length>0?
          downloadList?.map(resume=>(
            <div className='col-lg-4'>

              <div style={{height:'350px'}} className='rounded shadow p-3'>

                <h6>Review at: {resume.timeStamp}</h6>

                <div className='mt-4 text-center'>

                  <Link to={`/resume/${resume?.resumeId}`}>
                    <img className='w-100' style={{height:"300px"}} src={resume?.resumeImg} alt="resumeimage" />
                  </Link>

                </div>

              </div>

            </div>
          ))
          :
          <div>No resume downloaded yet</div>
        }
      </div>
      
    </div>
  )
}

export default Download
