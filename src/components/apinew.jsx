import React from 'react'
import { useState,useEffect} from 'react';
import Apicards from './apicards';
const Apinew = () => {
    const [arr,setArr]=useState([]);
    const getData = async() => {
        await fetch('https://jsonplaceholder.typicode.com/photos',{
          method: 'GET',
        })
        .then((response)=>response.json())
        .then((data)=>{
            const newD = data.splice(0,20);
            setArr(newD);
        })
      }
      useEffect(()=>{
        getData();
      },[])
  return (
    <div>
    {
        arr.map((e1)=>{
        return(
            <Apicards  albumId = {e1.albumId} 
            id={e1.id} 
            title = {e1.title}
            url={e1.url}
            thumbnailUrl={e1.thumbnailUrl}
            />
        )
        })
    }
       
    </div>
  )
}

export default Apinew