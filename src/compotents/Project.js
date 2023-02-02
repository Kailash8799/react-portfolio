import React from 'react'
import Projectdesk from './Projectdesk'
// import Projectdeskr from './Projectdeskr';

const About = () => {
    return (
        <>
            <div id='project' className="marg sm:mx-16 md:mx-10 lg:mx-40 mt-10 sm:mt-0">
                <div className='sm:pt-10 text-center'>
                    <h1 className='font text-white border-b-4 rounded-lg border-yellow-500 inline-block '>Project</h1>
                </div>
                <Projectdesk  img={["img-1.png","img-2.png"]} title="My Portfolio" desc="A portfolio website made with React.Js for presenting my projects in an organized and decorated way." lang={["reacti.svg","javascripti.svg"]}/>
                <Projectdesk  img={["img-1.png","img-2.png"]} title="E-Commerse" desc="A portfolio website made with React.Js for presenting my projects in an organized and decorated way." lang={["reacti.svg","javascripti.svg"]}/>
            </div>
            <hr className='text-white border-2' />
        </>
    )
}

export default About
