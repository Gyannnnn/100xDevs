
"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Data(){

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true)

useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setData(response.data);
            setLoading(false)
        })

}, [])

console.log(data)

if(loading){
    return <div className='h-[100vh] w-[100vw] flex items-center justify-center'><h1>Loading ...</h1></div>
}



return (
    <div>
       {
        data.map((user)=>(
            <div>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                <h1>{user.id}</h1>
            </div>
        ))
       }
    </div>
)

}