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
        <div className=' blogheading third-blog-heading'> Bard can now connect to your Google apps and services</div>
        <div className='third-blog-content'>One of the biggest benefits of Bard, an experiment to collaborate with generative AI, is that it can tailor its responses to exactly what you need. </div>
        <div className='blogdetails'>
          <div className='author'>
            <img src={img2} className='authorimg' />
            <div className='authornamedatail'> <span className='authorname blackusername'>krishna</span> <span className='channel blackchnnel'>bcc news</span></div>
          </div>
          <div className='blogdata date'>10 may </div>
        </div>
      </div>

    </div>
  )
}
