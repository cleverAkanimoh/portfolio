import { motion as m } from 'framer-motion'
import { animateHeader as h, animateSection as s } from '../lib';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import useDisplayRepos from '../Hooks/useDisplayRepos';
import repos from "../content.json"

export default function Projects() {

  const displayRepos = useDisplayRepos(repos)

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
          {displayRepos}
        </article>
      </section>
    </>
  );
}