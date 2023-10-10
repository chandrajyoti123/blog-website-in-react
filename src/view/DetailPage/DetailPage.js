import React, { useEffect, useState } from 'react'
import img from './../Home/sample.png'
import './DetailPage.css'
import { Params, useParams } from 'react-router-dom'
import dataofblogs from './../../blogdata/jsondataofblog.json'
import { Link } from 'react-router-dom'

export default function DetailPage() {
    const {id}=useParams()
    const [ sigledata,setSigledata]=useState({})
    useEffect(()=>{
        dataofblogs.blogs.map((data,i)=>{
            if(data.id==id){
                setSigledata(data)
            }

        })
        

    },[id])
    console.log(setSigledata)



    
  return (
    <>
   {
     <div className='detailpagecon'>
     <div className='detailheading'>{sigledata.title}</div>
 <img src={sigledata.img} className='detailpageimg'/>
 <div className='detail-description'>{sigledata.description}</div>

 <div className='subdetailheading'>{sigledata.subheading}</div>
 <div className='detail-description'>{sigledata.subdescription}</div>
 <div className='gotohome'><Link to={'/'}><button className='homebtn'>Home</button></Link></div>
   
 </div>
   }
    </>
  )
}
