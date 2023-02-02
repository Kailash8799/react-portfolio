import React from 'react'
import Im from '../compotents/images/img-1.jpg'


const About = () => {
    return (
        <>
            <div id='about' className="sm:mx-16 py-4 bgback md:mx-10 lg:mx-28 rounded-xl mt-10 sm:mt-0">
                <div className='lg:pt-10 text-center'>
                    <h1 className='font text-white border-b-4 rounded-lg border-yellow-500 inline-block '>About Me</h1>
                </div>
                <div className='items-center lg:mt-5 lg:flex pt-10'>
                    <div className='lg:w-1/3 pb-4 lg:m-0 items-center mx-5'>
                        <img src={Im} alt="" className='h96 rounded-full mx-auto'/>
                    </div>
                    <div className='lg:w-2/3 lg:pl-28 lg:pr-4 px-6'>
                        <h1 className='namec'>A tech enthusiast with a passion for learning and building things.</h1>
                        <hr className='namec'/>
                        <p className='text-white font text-xl'>hey ,My name is Kailash and i'm web developer and competitive programmer. I know many language like php, c++,c , html, css, javascript etc. I join every contest in codechef , hackerrank, codeforces etc. I had created e-commerce website using php, mysql and javascript as project.I Pass out my 12th with 92% and I get 111.5 marks in GUJCET .now i am studying at Dharmsinh Desai University in Computer engineering.</p>
                    </div>
                </div>
                
            </div>
            <hr className='text-white border-2' />
        </>
    )
}

export default About
