import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { motion as m } from 'framer-motion'
import { animateHeader as h, animateSection as s, animateH1 as h1 } from '../lib';
import TrackVisibility from 'react-on-screen';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import useTick from '../Hooks/useTick';

export default function Home() {

  useWindowTitle('Welcome to my portfolio, check my projects, skills and about | Clever Solomon Akanimoh')

  const skills = ['Web developer ', 'Data analyst ', 'Product designer ', 'Freelancer']
  const typingSpeed = 2000
  const deleteSpeed = 500

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
            <button className="bg-saddle-brown hover:bg-gradient-to-tr from-saddle-brown from-70% to-yellow p-2 hover:scale-[1.04] text-white rounded-md transition-all duration-300">Download CV</button>
            
            <Link to="connect" className='header-div-link1-style'>let's Connect <BsArrowRight className='pl-1' /></Link>

          </div>

        </m.section>
      </m.header>
    </>
  )
}
