import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { motion as m } from 'framer-motion'
import { animateHeader as h, animateSection as s, animateH1 as h1 } from '../lib';
import TrackVisibility from 'react-on-screen';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import useTick from '../Hooks/useTick';
import { useState } from 'react';
import { MdRemoveCircle } from 'react-icons/md';import cvImage from "../assets/images/logo.png"

export default function Home() {

  useWindowTitle('Welcome to my portfolio, check my projects, skills and about | Clever Solomon Akanimoh')

  const [showCv, setShowCv] = useState(false)

  const skills = ['Web developer ', 'Data analyst ', 'Product designer ', 'Freelancer']
  const typingSpeed = 2000
  const deleteSpeed = 500

  const text = useTick(skills, typingSpeed, deleteSpeed)
  // window.onclick= setShowCv(false)
  return (
    <>
      <m.header
        initial={h.initial}
        animate={h.animate}
        transition={h.transition}
        exit={h.exit}
        className="header-style"
      >
        <m.section
          initial={s.initial}
          animate={s.animate}
          transition={s.transition}
          className='header-section-style'
        >
          <span className="header-span1-style">Welcome to my portfolio</span>

          <TrackVisibility>
            {
              ({ isVisible }) => (
                <div className='overflow-hidden w-fit'>
                  <m.h1
                    initial={h1.initial}
                    animate={h1.animate}
                    transition={h1.transition}
                    className="flex flex-col items text-left text-4xl leading-relaxed sm:text-[2.65rem] font-sofia font-bold">
                    <span>{`Hello I'm Clever Akanimoh`}</span>
                    <span className="capitalize text-2xl md:text-4xl">{isVisible && text}<span className='animate-pulse'>|</span></span>
                  </m.h1>
                </div>
              )
            }
          </TrackVisibility>

          <div className='header-div-style'>
            <button onClick={() => setShowCv(true)} className="bg-saddle-brown hover:bg-gradient-to-tr from-saddle-brown from-70% to-yellow p-2 hover:scale-[1.04] text-white rounded-md transition-all duration-300" >view my CV</button>

            <Link to="connect" className='header-div-link1-style'>let's Connect <BsArrowRight className='pl-1' /></Link>

          </div>

          <div className={`${showCv ? "scale-100" : "scale-0"} absolute top-0 left-0 flex items-center justify-center bg-black bg-opacity-20 h-screen w-full p-1 sm:p-2 md:p-4 z-[999]`}>
          
            <div className={`${showCv ? "opacity-100" : "opacity-0"} relative bg-white h-full w-full max-w-[900px] rounded-md transition-all duration-300`}>
              <button onClick={() => setShowCv(false)} className='absolute top-4 right-4'><MdRemoveCircle className='text-red-600 text-lg' /></button>
              <img src={cvImage} alt="cv" />
            </div>
            
          </div>

        </m.section>
      </m.header>
    </>
  )
}
