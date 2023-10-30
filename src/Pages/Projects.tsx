import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { motion as m } from 'framer-motion'
import { animateHeader as h, animateSection as s } from '../lib/framerAnimation';
import fetchRepositories from '../lib/fetchRepositories';
import Loading from '../components/Loading';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import useDisplayRepos from '../Hooks/useDisplayRepos';

export function loader() {
  return defer({ repos: fetchRepositories() })
}

export default function Projects() {

  useWindowTitle('View all of my projects | Clever Akanimoh')

  const fetchRepoPromise: any = useLoaderData()

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
            <Await resolve={fetchRepoPromise.repos}>{useDisplayRepos}</Await>
          </Suspense>
      </article>
    </section>
    </>
  );
}