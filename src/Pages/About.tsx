import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion'
import { animateHeader as h, animateSection as s, animateH1 as h1 } from '../ts/framerAnimation';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import { backend, dataAnalysis, frontend, productDesign } from '../ts/skills';
import image from '../assets/images/crushpic.png'

export default function About() {
  useWindowTitle('About | Portfolio')

  return (
    <>
      <m.header
        initial={h.initial}
        animate={h.animate}
        transition={h.transition}
        className="about-header-style header-style"
      >
        <m.div
          initial={s.initial}
          animate={s.animate}
          transition={s.transition}
          className='header-section-style'
        >
          <h1 className=" text-[2.5rem] font-sofia my-4 font-bold text-pink">
            About
          </h1>

        </m.div>
      </m.header>

      <section className="section-style">
        <article className='article-style items-center'>
          <div className='article-div1-style'>
            <img src={image} alt="Clever Akanimoh" className='w-[300px] h-[40vh]md:w-[400px]' />
            <div className='w-full min-w-[300px] max-w-[500px]'>
              <h1 className="text-white font-sans text-4xl font-bold">Hello there<span className='wave'>&#128075;</span></h1>
              <div className='overflow-hidden py-2'>
                <m.p
                  initial={h1.initial}
                  animate={h1.animate}
                  transition={h1.transition}
                  className='font-serif font-light my-4'>My name is Clever Akanimoh and I believe that Creative Collaboration between design and technology is the magic that takes experience from good to great.</m.p>
              </div>
              <div className='header-div-style'>
                <Link to='/skills' className='header-div-link1-style'>go to skills</Link>
                <Link to='/projects' className="header-div-link2-style">view projects</Link>
              </div>
            </div>
          </div>

          <div className="my-24 md:flex items-center justify-between md:gap-5">
            <div>
              <h1 className="capitalize font-bold text-4xl text-white my-5">my career so far</h1>
              <div>
                <p className="w-full max-w-[500px]">
                  Always up for a challenge, I have worked for few tech start-ups and I played a vital role in growing the company through sharing my knowledge and ideas to my colleagues and through generating and implementating new ideas. My previous role featured me as backend instructor, leading other of my colleagues to building an automatic whatsapp message sender with python and react for frontend. I have also researched for new knowledge and insights in my previous role as a Ux researcher for a bank which launched their new tech products.
                </p>
              </div>
            </div>
            <ul className="my-6 w-full max-w-[550px]">
              {frontend.map((skill, index) => <li className="about-skills-style" key={index}>{skill}</li>)}
              {backend.map((skill, index) => <li className="about-skills-style" key={index}>{skill}</li>)}
              {dataAnalysis.map((skill, index) => <li className="about-skills-style" key={index}>{skill}</li>)}
              {productDesign.map((skill, index) => <li className="about-skills-style" key={index}>{skill}</li>)}
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}