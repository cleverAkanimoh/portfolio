import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import image from '../assets/images/logo.png'
import Pagination from '../components/Pagination'
import { languages } from '../lib'

export default function useDisplayRepos(repos: any) {
    const [searchParams, setSearchParams] = useSearchParams()

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 3

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const shownPosts = repos.slice(firstPostIndex, lastPostIndex)


    function handleFilterChange(key: string, value: string | null) {
        setSearchParams((prevParams) => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }

    const languageFilter = searchParams.get("language");

    const displayedRepos = languageFilter
        ? repos.filter((r: any) => r.language === languageFilter)
        : shownPosts

    console.log(repos.language);


    const repoElements = displayedRepos.map((repo: any) => (
        <div key={repo.id} className="w-[99%] min-w-[300px]: max-w-[350px] min-h-[400px] p-2" >
            <picture>
                <img src={image} alt="" className='w-full h-[40vh] rounded' />
            </picture>
            <div className='flex items-center justify-between py-1 my-1 h-20 capitalize'>
                <h2 className='text-[1.6rem] text-blue font-semibold'>{repo.projectName}</h2>
                <span className='text-[0.9rem] text-yellow self-end pb-2'>{repo.language}</span>
            </div>

            <p className='text-[0.83rem] font-medium capitalize py-3'>{`${repo?.projectDesc || 'this repo has no description check source code for README.md'}`.substring(0, 150)}</p>

            <div className='flex flex-col py-1 text-sm capitalize'>
                <span>Date created: {repo.created}</span>
                <span>last updated: {repo.updated}</span>
                <span>visibility: {repo.projectType}</span>
                <span></span>
            </div>

            <div className='flex items-center justify-between h-16 capitalize text-sm'>
                <a href={repo.liveLink} target="_blank" rel="noreferrer" className='hover:border rounded hover:text-chocolate hover:bg-transparent transition-all duration-500 px-2 py-1 shadow bg-white text-black'>view live</a>
                <a href={repo.html} target="_blank" rel="noreferrer" className='hover:border rounded hover:text-chocolate hover:bg-transparent transition-all duration-500 px-2 py-1 shadow bg-white text-black'>view source code</a>
            </div>
        </div>
    ));

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full p-3 h-fit inline sm:flex justify-center">
                {

                    languages.map((lang, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChange(`language`, `${lang.toLowerCase()}`)}
                            className="capitalize text-sm hover:text-chocolate border rounded px-2 py-1 mx-1 my-2"
                        >{lang}</button>))
                }

                {languageFilter ? (
                    <button onClick={() => handleFilterChange("language", null)}
                        className="clear-filter"
                    >
                        Clear filter
                    </button>
                ) : null}
            </div>

            <div
                className="w-full min-h-[400px] grid place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 "
            >
                {displayedRepos ? repoElements : <span>no project matching your filter</span>}
            </div>

            <Pagination
                totalPosts={repos.length}
                postPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageNumberLimitValue={5}
                maxPageNumberLimitValue={5}
                minPageNumberLimitValue={0}
            />

            <p className='text-center capitalize w-full'>other projects are available on <a href="https://github.com/cleverAkanimoh?tab=repositories" target="_blank" rel="noreferrer" className='text-blue hover:underline'>github</a></p>
        </div>
    );
}