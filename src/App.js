// https://restcountries.com/v3.1/all


import './App.scss';
// import NavBar from './Navbar.js';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MaterialTable, { MTableToolbar } from '@material-table/core';




const App = () => {
	
  const [data, setData] = useState([])
  const columns = [
    {title:"Flag", field: "flag",
    render: rowData => <img src={rowData.flags.png} style={{width: "50px", height: "35.92px"}} alt={rowData.flags.alt} />},
    {title:"Name", field: "name"},
    {title:"Population", field: "population"},
    {title:"Languages", field: "name",
    render: (rowData) => Object.values(rowData.languages[0].name).join(" ")},
  
    ]

  useEffect(() => {   
	fetch("https://restcountries.com/v2/all")
	.then(resp=>resp.json())
	.then(resp=>{
		console.log(resp)
		setData(resp)})
	
	},
  [])

  return (

    
    <div className= "App">
		 {/* <NavBar/> */}
   
	
      {/* <h2>Data Table</h2> */}
  



	  
	 <MaterialTable style={{color: " #1976d2", padding: "20px"}}

     
	 title= "COUNTRY "
  MuiInput-input= " "
  
	  data ={data}
	  columns={columns}
	  />  

    </div>
  )
}

export default App