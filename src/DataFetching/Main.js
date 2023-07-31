 import React,{useState,useEffect} from "react";
 import axios from 'axios'

 function Main(){
    const [myData, setMydata] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res)
            setMydata(res.data)
        })

    },[])
    return(
        <div>
            {myData.map((value,index)=>{
            //    const {id,title,image,description} = value;
               return (
                
                // <> 
                <div  key={index}>

                {/* <h3>{value.id}</h3> */}
                <h1>{value.title}</h1>
                {/* <p><strong>Description:</strong></p> */}
                <img src={value.image} alt="kuch to aa"  /> {index}

               
                </div>
               )

            })}

        

        </div>
    )
 }

 export default Main