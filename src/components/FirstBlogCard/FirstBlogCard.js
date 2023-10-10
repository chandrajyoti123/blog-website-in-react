import React from 'react'
import './FirstBlogCard.css'
import img1 from './blog2.webp'
import img2 from './blog3.webp'
export default function FirstBlogCard({ blogtitle, authorname, blogdate }) {
  return (
    <div className='third-blog-card'>
      <div className='third-blog-img-body'>
        {/* <img src={img1} className='third-blog-img'/> */}
      </div>
      <div className='third-blog-card-body'>
        <div className='featured'>FEATURED</div>
        <div className=' blogheading third-blog-heading'> this is tara this is tara this is tara this is tara</div>
        <div className='third-blog-content'>this ljfkslajf lasjd flasfdlkasj dlfkjas dlfjasldjflak djfklasj dlfk jsdlkfjaslkdjflksad jfklsd jfla jsdlfk jsd </div>
        <div className='blogdetails'>
          <div className='author'>
            <img src={img2} className='authorimg' />
            <div className='authornamedatail'> <span className='authorname'>krishna</span> <span className='channel'>bcc news</span></div>
          </div>
          <div className='blogdata'>10 may </div>
        </div>
      </div>

    </div>
  )
}
