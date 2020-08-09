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
  <div className="container">
         <div className="row">
              <label className="col">words</label>
              <label className="col1">frequency</label>
          </div> 
          <hr/>
          {
            state!==null?
            state.array.forEach(element => {
              <div className="row">
              <div className="col2">element.name</div>
              <div className="col3">element.total</div>
              </div> 
              <hr/>
            });
            :null
          }
   </div>
  
};
 
export default Map;
