import React from 'react'
import NavBar from './NavBar'

const AddTodo = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>ADD</center></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">USER ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TITLE</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">COMPLETED</label>
                            <select name="" id="" className="form-control">
                                <option value="TRUE"TRUE></option>
                                <option value="FALSE">FALSE</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br />
                            <center><button className="btn btn-success">Add</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodo