import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [data,changeData] =useState([])
      const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
          (response)=>{
            changeData(response.data)
          }

        ).catch().finally()

 }
 useEffect(()=>fetchData(),[])
  return (
    <div>
        <NavBar/>
        <div className="container">
          <h1><center>TODO</center></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">TITLE</th>
      
    </tr>
  </thead>
  {data.map(
    (value, index) => {
        return  <tbody>
        <tr>
          
          <td>{value.id}</td>
          <td>{value.title}</td>
         
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