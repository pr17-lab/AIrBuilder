import { Link } from 'react-router-dom';
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

function Saved() {
  return (
    <div className='container d-flex justify-content-center align-items-center my-5'>
      <h1>All Saved Resume</h1>
      <table className="table table-hover table-striped my-5">
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Resume</th>
            <th>Job role</th>
            <th>....</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to={'/resume/:id'}>Name</Link></td>
            <td>Job</td>
            <td><button className='btn btn-danger'>< FaRegTrashAlt />Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Saved
