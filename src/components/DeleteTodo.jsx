import React from 'react'
import NavBar from './NavBar'

const DeleteTodo = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>REMOVE TODO</center></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br />
                    <center><button className="btn btn-danger">Remove</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteTodo