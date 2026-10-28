import React, { useRef, useState } from 'react'
import { FaFileDownload, FaBackward } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { IoMdRefreshCircle } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Edit from '../Components/Edit'
import Preview from '../Components/Preview';
import { viewResumeApi } from '../service/apiService';
import { useEffect } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function View() {
  const [resume, setResume] = useState()
  const { id } = useParams()
  const previewRef = useRef()
  console.log(id);

  useEffect(() => {
    getResumeDetails()
  }, [])


  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status === 200) {
      setResume(response.data)

    }
  }
  console.log("Resume details:", resume);

  const generatePDF = async () => {
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    const pdf = new jsPDF()
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(canvas, "PNG", 0, 0, imageWidth, imageHeight)
    pdf.save("resume.pdf")
  }
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* Navigation icons */}
          <div className="d-flex justify-content-center align-items-center">
            {/* download */}
            <button onClick={generatePDF} style={{ color: '#4d321d' }} className='btn'><FaFileDownload />Download CV</button>
            {/* edit */}
            <Edit resumeDetails={resume} setResumeDetails={setResume} />
            {/* all resume */}
            {/* <Link to={'/all-resumes'} style={{color:'#4d321d'}} className='btn mx-2'><IoMdRefreshCircle />All resume</Link> */}
            {/* download history */}
            {/* <Link to={'/downloads'} style={{color:'#4d321d'}} className='btn mx-2'><FiFileText />Download history</Link> */}
            {/* back */}
            <Link to={'/resume-details'} style={{ color: '#4d321d' }} className='btn mx-2'><FaBackward />Previous</Link>
          </div>
          <div ref={previewRef} className='p-5'>
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>

    </div>
  )
}

export default View
