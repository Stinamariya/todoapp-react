import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const [data,changedata] =useState(
    [
        {"userid":1,"id":1,"title":"sjiaj","completed":"True"},
        {"userid":2,"id":2,"title":"nfkjg","completed":"True"},
        {"userid":3,"id":3,"title":"nmvbnmv","completed":"False"},
        {"userid":4,"id":4,"title":"mknr","completed":"True"},
        {"userid":5,"id":5,"title":"fkdsknc","completed":"False"},
        {"userid":6,"id":6,"title":"admkfng","completed":"False"},
    ])
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <table class="table">
  <thead>
    <tr>
      <th scope="col">USER ID</th>
      <th scope="col">ID</th>
      <th scope="col">TITLE</th>
      <th scope="col">COMPLETED</th>
    </tr>
  </thead>
  {data.map(
    (value, index) => {
        return  <tbody>
        <tr>
          
          <td>{value.userid}</td>
          <td>{value.id}</td>
          <td>{value.title}</td>
          <td>{value.completed}</td>
        </tr>
      </tbody>
    }
  )}
 </table>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default View