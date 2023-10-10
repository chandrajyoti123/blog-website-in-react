import React from 'react'
import img1 from './blog2.webp'
import img2 from './blog3.webp'
import './SecondBlogCard.css'
export default function SecondBlogCard({blogimg,blogtitle,authorname,blogdate}) {
  return (
    <div className='blog-card-two'>
       <img src={ blogimg}  className='blogimg-two'/>
            <div className='blogbody'>
                <div className='blogcontent'>
                     <div className='blogheading'>{blogtitle}</div>
            <div className='blogdetails'>
                         <div className='author'>
                            <img src={img2} className='authorimg'/>
                             <div className='authornamedatail'> <span className='authorname'>{authorname}</span> <span className='channel'>bcc news</span></div>
                         </div>
                         <div className='blogdata'>{blogdate} </div>
                </div>
               </div>

             </div>
    </div>
   
  )
}
