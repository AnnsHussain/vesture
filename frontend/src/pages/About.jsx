import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quae, harum nobis rerum eum nemo non, aliquam aliquid sint sit officia ab animi qui architecto omnis fugit sunt dolore placeat!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio fugiat impedit odit, architecto facere velit. Sit, </p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>

        </div>
        <Newsletterbox/>

      
    </div>
  )
}

export default About
