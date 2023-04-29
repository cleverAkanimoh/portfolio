import { motion as m, useScroll, useTransform } from 'framer-motion'
import { animateHeader as h, animateSection as s } from '../ts/framerAnimation';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import * as skills from '../ts/skills';

export default function Skills() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  useWindowTitle('Skills | Portfolio')

  return (
    <>
      <m.header
        initial={h.initial}
        animate={h.animate}
        transition={h.transition}
        className="skills-header-style header-style"
      >
        <m.section
          initial={s.initial}
          animate={s.animate}
          transition={s.transition}
          // style={{
          //   scale
          // }}
          className='header-section-style'
        >
          <h1 className="text-[2.5rem] font-sofia my-4 font-bold text-purple">
            Skills
          </h1>

        </m.section>
      </m.header>
      <section className="section-style">
        <article className='article-style sm:grid grid-cols-2'>
          <div className='skill-container-div col-span-2'>
            <h1 className='skill-title'>web development</h1>
            <div className='skill-cat-div'>
              <div>
                <h1 className="skill-category">frontend</h1>
                <div>
                  {
                    skills.frontend.map((skill, index) => (
                      <h1 key={index} className="skill-h1">{skill}</h1>
                    ))
                  }
                </div>
              </div>

              <div>
                <h1 className="skill-category">backend</h1>
                <div>
                  {
                    skills.backend.map((skill, index) => (
                      <h1 key={index} className="skill-h1">{skill}</h1>
                    ))
                  }
                </div>
              </div>

              <div>
                <h1 className="skill-category">languages</h1>
                <div>
                  {
                    skills.languages.map((skill, index) => (
                      <h1 key={index} className="skill-h1">{skill}</h1>
                    ))
                  }
                </div>
              </div>
              <div>
                <h1 className="skill-category">libraries</h1>
                <div>
                  {
                    skills.libraries.map((skill, index) => (
                      <h1 key={index} className="skill-h1">{skill}</h1>
                    ))
                  }
                </div>
              </div>

              <div>
                <h1 className="skill-category">frameworks</h1>
                <div>
                  {
                    skills.frameworks.map((skill, index) => (
                      <h1 key={index} className="skill-h1">{skill}</h1>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className='skill-container-div'>
            <h1 className="skill-title">data analysis</h1>
            <div>
              {
                skills.dataAnalysis.map((skill, index) => (
                  <h1 key={index} className="skill-h1">{skill}</h1>
                ))
              }
            </div>
          </div>

          <div className='skill-container-div'>
            <h1 className="skill-title">product design</h1>
            <div>
              {
                skills.productDesign.map((skill, index) => (
                  <h1 key={index} className="skill-h1">{skill}</h1>
                ))
              }
            </div>
          </div>
        </article>
      </section>
    </>
  );
}