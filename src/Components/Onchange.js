import React,{useState} from 'react';

function Onchange() {
    const [value, setValue] = useState([]);

     function getdata(va){
        console.log(va.target.value);
        setValue(va.target.value);
     }
  return (
    <div>

        <h1> Hello This is My Data</h1>
       <input type="text" onChange={getdata} />
       <h1>{value}</h1>
        
    </div>
  )
}

export default Onchange