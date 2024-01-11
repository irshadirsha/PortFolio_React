import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Bootsrap from '../assets/BOOT.png'
import Express from '../assets/expr.png'
import Redux from '../assets/redux.png'
function Skills() {
  return (
    <div name='skills' className='pl-14 lg:pl-0 w-full h-full bg-[#08192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-pink-600 '>experience</p>
            <p className=' py-4 '>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={Javascript} alt="Javascript" />
               <p>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={HTML} alt="html" />
               <p>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={CSS} alt="css" />
               <p>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto rounded-2xl ' src={Bootsrap} alt="Bootsrap" />
               <p>BOOTSRAP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={Mongo} alt="Mongo" />
               <p>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={react} alt="react" />
               <p>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={Node} alt="Node" />
               <p>NODE.JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto rounded-2xl ' src={Express} alt="Express" />
               <p>EXPRESS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={FireBase} alt="FireBase" />
               <p>FIREBASE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={GitHub} alt="GitHub" />
               <p>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto ' src={Tailwind} alt="Tailwind" />
               <p>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto rounded-2xl ' src={Redux} alt="Redux" />
               <p>REDUX</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
