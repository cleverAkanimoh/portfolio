import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { motion as m } from 'framer-motion'
import { animateHeader as h, animateSection as s, animateH1 as h1 } from '../ts/framerAnimation';
import TrackVisibility from 'react-on-screen';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import useTick from '../Hooks/useTick';

export default function Home() {

  const skills = ['web developer ', 'data analyst ', 'product designer ', 'Freelancer ']
  const typingSpeed = 2000
  const deleteSpeed = 500

  useWindowTitle('Welcome | Portfolio')

  const text = useTick(skills, typingSpeed, deleteSpeed)

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
                <div className='overflow-hidden'>
                  <m.h1
                    initial={h1.initial}
                    animate={h1.animate}
                    transition={h1.transition}
                    className="header-h1-style">{`Hi I'm Clever `}<span className="capitalize">{isVisible ? text : ""}</span><span className='animate-pulse'>|</span></m.h1>
                </div>
              )
            }
          </TrackVisibility>

          <div className='header-div-style'>
            <Link to="connect" className='header-div-link1-style'>let's Connect <BsArrowRight className='pl-1' /></Link>
            <Link to="skills" className="header-div-link2-style"> go to Skills</Link>
          </div>

        </m.section>
      </m.header>
    </>
  )
}
