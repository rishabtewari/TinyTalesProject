import React, { useRef, useEffect, useState } from 'react';
import  './Map.css'


 
const  Map = props => {
  const [state,setState]= useState();
  const { value} = props;
  console.log(value);
  const data={value};
  useEffect( async() => {
    console.log(data)
    const option={
      method:'POST',
      header:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }
 fetch('/all',option)
 .then(res=>res.json())
 .then(res=>{
   setState(res.state);
 })
  console.log(state);
  }, [value]);
 
  
};
 
export default Map;