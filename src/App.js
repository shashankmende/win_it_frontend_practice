
import './App.css';
import {  useState } from 'react';
import axios from 'axios';



function App() {
  const [data,setData]=useState('')
  const [company,setCompany]=useState('')
  const [eror,setError]=useState('')
  // useEffect(()=>{
    


  // },[])

  const onClickSubmit=async()=>{
    console.log('compnay',company)
    const url = `http://localhost:8080/winit_practice/company/${company}`
    const result = await axios.get(url,{
      headers:{
        'Content-Type':"application/json"
      }
    })
    if (result.status===200){

    
      console.log("result",result)
      setData(result.data.result)
      setCompany('')
    }
    else if(result.status===404){
      setError(result.data.result)
    }

  }

  return (
    <div className="App">
      <input type="text" placeholder='Enter company name....' 
      onChange={(e)=>setCompany(e.target.value)}
      />
      <button type='button' onClick={onClickSubmit}>Get Details</button>
      { data && <div>
        <h1>{data.companyName}</h1>
        <p>{data.package}</p>
      </div>}
      {eror!=='' && <p>{eror}</p>}
    </div>
  );
}

export default App;
