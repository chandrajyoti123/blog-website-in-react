import React, { useState } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import './Home.css'
import SecondBlogCard from '../../components/SecondBlogCard/SecondBlogCard'
import jsondatablog from './../../blogdata/jsondataofblog.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FirstBlogCard from '../../components/FirstBlogCard/FirstBlogCard'

export default function Home() {
    const [blogdata, setBlogdata] = useState(jsondatablog.blogs)
    // -------scroll bar --------


    const handleScroll = (event) => {
        const scroll = document.getElementById('flex-scroll');
        scroll.scrollLeft += event.deltaY;
    }
    return (
        <>
        <div className='header'>
            <div className='navigationbar'>
                <div className='logo'>
                    <span className='navbarlogo'>bloggie</span>

                </div>
                <div className='navlinkbar'>
                <div className='navlink'>Home</div>
                <div className='navlink'>Landings</div>
                <div className='navlink'>Pages</div>
                <div className='navlink'>Docs</div>
                <div className='navlink'>Help</div>
                </div>
                <div className='btncontainer'>
                    <button type='button' className='navbarbtn'>get it now</button>
                </div>

            </div>
            <div className='navbarbody'>
                <div className='navbar-main-heading'>Our BlogRoom</div>
                <input type='text' placeholder='Search Blog' className='searchbar'/>

            </div>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waveofheader'><path fill="#fff" fill-opacity="1" d="M0,256L120,234.7C240,213,480,171,720,170.7C960,171,1200,213,1320,234.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> 
        </div>

            <div className='body-of-website'>
           <div className='section-three'> <FirstBlogCard/></div>
           <div className='heading'>
            Popular Blogs
           </div>
            <div className='section-one-con'>
                <div className='section-one-left'>
                    <span onClick={() => {
                        handleScroll({ deltaY: -500 });

                    }}><FontAwesomeIcon icon={faAngleLeft} className='scroll-angle' /></span>
                </div>
                <div className='sectionone' id='flex-scroll'>
                    {
                        blogdata.map((singledata, i) => {
                            const { img, title, data, author, } = singledata
                            if (i < 3) {
                                return <BlogCard blogimg={img} blogtitle={title} blogdate={data} authorname={author} />
                            }


                        })
                    }
                </div>
                <div className='section-one-right'>
                    <span onClick={() => {
                        handleScroll({ deltaY: 500 });

                    }}> <FontAwesomeIcon icon={faAngleRight} className='scroll-angle' /></span>
                </div>
            </div>
            <div className='heading'>
            Recent Blogs
           </div>
            <div className='section-tow-con'>

                {
                    blogdata.map((singledata, i) => {
                        const { img, title, data, author, } = singledata

                        return <SecondBlogCard blogimg={img} blogtitle={title} blogdate={data} authorname={author} />



                    })
                }


            </div>
            </div>
            <div className='footer'>
                Made with love by chadrajyoti

            </div>
             
        </>
    )
}
