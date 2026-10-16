import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div className='w-100'>
      <h2>Full name</h2>
      <p className='fs-5 lh-1'>Phone:</p>
      <p className='fs-5 lh-1'>Email:</p> 
      <p className='fs-5 lh-1'>Linkedin:</p>
      <p className='fs-5 lh-1'>Github:</p>
      <p className='fs-5 lh-1'>Location:</p>
      <Divider className='bg-dark mb-3'/>
      <h2>Professional</h2>
      <p>Summary</p>
      <Divider className='bg-dark mb-3'/>
      <h2>Technical skills</h2>
      <span><Button variant='text' className='bg-dark text-light'>Skill</Button></span>
      <Divider className='bg-dark my-3'/>
      <p>Bachelors Degree in:</p>
      <p>University/college name:</p>
      <p>Year of graduation:</p>
    </div>
  )
}

export default Preview
