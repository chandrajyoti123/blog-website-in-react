import React, { useState } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import './Home.css'
import SecondBlogCard from '../../components/SecondBlogCard/SecondBlogCard'
import jsondatablog from './../../blogdata/jsondataofblog.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [blogdata, setBlogdata] = useState(jsondatablog.blogs)
    // -------scroll bar --------


    const handleScroll = (event) => {
        const scroll = document.getElementById('flex-scroll');
        scroll.scrollLeft += event.deltaY;
    }
    return (
        <>
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
            <div className='secton-tow-con'>

                {
                    blogdata.map((singledata, i) => {
                        const { img, title, data, author, } = singledata

                        return <SecondBlogCard blogimg={img} blogtitle={title} blogdate={data} authorname={author} />



                    })
                }


            </div>
        </>
    )
}
