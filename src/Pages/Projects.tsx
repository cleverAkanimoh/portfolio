import { motion as m } from 'framer-motion'
import { animateHeader as h, projectsArr, animateSection as s } from '../lib';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import DisplayRepos from '../components/DisplayRepos';
// import { Await } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '../components/Loading';

export default function Projects() {

  useWindowTitle('View all of my projects | Clever Akanimoh')

  return (
    <>
      <m.header
        initial={h.initial}
        animate={h.animate}
        transition={h.transition}
        className="projects-header-style header-style"
      >
        <m.section
          initial={s.initial}
          animate={s.animate}
          transition={s.transition}
          className='header-section-style'
        >
          <h1 className="text-[2.5rem] font-sofia my-4 font-bold text-blue">Projects</h1>

        </m.section>
      </m.header>

      <section className="section-style">
        <article className='article-style'>
          <Suspense fallback={<Loading />}>
            {/* <Await children={<DisplayRepos repos={projectsArr} />} resolve={undefined} /> */}
            <DisplayRepos repos={projectsArr} />
          </Suspense>
        </article>
      </section>
    </>
  );
}