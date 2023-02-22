
import './App.scss';
import NavBar from './navbar.js';
import React, { useState, useEffect } from 'react';
import MaterialTable, { MTableToolbar } from '@material-table/core';




const App = () => {
	
  const [data, setData] = useState([])
  const columns = [
    {title:"Flag", field: "flag",
    render: rowData => <img src={rowData.flags.png} style={{width: "50px", height: "auto"}} alt={rowData.flags.alt} />},
    {title:"Name", field: "name.common"},
    {title:"Population", field: "population"},
    {title:"Languages", field: "languages",
    render: (rowData) => Object.values(rowData.languages).join(", ")},
  
    ]

  useEffect(() => {
	fetch("https://restcountries.com/v3.1/all ")
	.then(resp=>resp.json())
	.then(resp=>{
		console.log(resp)
		setData(resp)})
	
	},
  [])

  return (
	
    <div className= "App">
		<NavBar/>

	
  



	  
	 <MaterialTable
	 title= "Country "
   MuiInput-input= " "
  
	  data ={data}
	  columns={columns}
	  />  

    </div>
  )
}

export default App