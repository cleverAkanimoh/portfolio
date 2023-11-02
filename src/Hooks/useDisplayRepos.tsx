import { Key, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import image from '../assets/images/logo.png'
import Pagination from '../components/Pagination'

export default function useDisplayRepos(repos: any) {
    const [searchParams, setSearchParams] = useSearchParams()

    const [readMore, setReadMore] = useState(true)
    const [searchValue, setSearchValue] = useState("")

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
    const languageFilterFn = repos.filter((r: any) => r.language === languageFilter)
    const searchFilter = repos.filter((r: any) => r.projectName.toLowerCase().includes(searchValue.toLowerCase()))

    const displayedRepos = languageFilter ? languageFilterFn : searchValue.length > 0 ? searchFilter : shownPosts
    
    const languages = repos.map((r:any) => r.language).sort()
    // const languages = getLanguages.reduce((r:any) => r.language)

    const repoElements = displayedRepos.map((repo: any) => (
        <div key={repo.id} className="w-[99%] min-w-[300px] text-gray-light max-w-[350px] min-h-[400px] p-2 shadow shadow-gray rounded-md transition-all duration-300" >
            <picture className='w-full p-4 block'>
                <img src={image} alt="portfolio logo" className='w-full h-[35vh] rounded transition-all duration-300' />
            </picture>
            <div className='flex items-center justify-between py-4 capitalize'>
                <h2 className='text-2xl text-blue font-semibold'>{repo.projectName}</h2>
                <span className='text-base text-yellow pb-2'>{repo.language}</span>
            </div>

            <p className='text-base font-medium text-justify py-3'>{`${repo?.projectDesc || 'this repo has no description check source code for README.md'}`.substring(0, readMore ? 150 : undefined)} <button className={`${readMore ? "text-blue" : "text-red-600"}`} onClick={() => setReadMore(prev => !prev)}>{readMore ? "... read more" : "read less"}</button></p>

            <div className='grid grid-cols-2 py-1 text-base capitalize'>
                <span>Date created: {repo.created}</span>
                <span>last updated: {repo.updated}</span>
                <span>visibility: {repo.projectType}</span>
                <span>Framework: {repo.framework}</span>
            </div>

            <div className='flex items-center justify-between h-16 capitalize text-sm'>
                <a href={repo.liveLink} target="_blank" rel="noreferrer" className='hover:border rounded hover:text-chocolate hover:bg-transparent transition-all duration-500 px-2 py-1 shadow bg-white text-black'>view live</a>
                <a href={repo.html} target="_blank" rel="noreferrer" className='hover:border rounded hover:text-chocolate hover:bg-transparent transition-all duration-500 px-2 py-1 shadow bg-white text-black'>view source code</a>
            </div>
        </div>
    ));

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='w-[97%] mt-4 mb-8 container border-b flex items-center justify-between'>
                <div>
                    <input
                        type="text"
                        className='min-w-[200px] max-w-[500px] border-0 focus:outline-0 bg-transparent p-1'
                        placeholder='search by project name'
                        value={searchValue}
                        onChange={(e) => { setSearchValue(e.target.value); handleFilterChange("language", null) }}
                    />
                </div>

                <div className="w-fit flex justify-center flex-shrink">
                    <select
                        name="language"
                        id="language"
                        className='capitalize text-gray hover:text-chocolate text-bold text-lg border-0 bg-transparent rounded-md px-2 py-2 mx-1 my-2 outline-0'
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { handleFilterChange(`language`, `${e.target.value}`); setSearchValue("") }}
                    >
                        {

                            languages.map((lang: string, index: number) => (
                                <option
                                    key={index}
                                    value={lang.toLowerCase()}
                                >{lang.toLowerCase()}</option>))
                        }
                    </select>

                    {languageFilter ? (
                        <button onClick={() => handleFilterChange("language", null)}
                            className="clear-filter"
                        >
                            Clear filter
                        </button>
                    ) : null}
                </div>
            </div>

            <div className="w-full min-h-[400px] grid place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
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