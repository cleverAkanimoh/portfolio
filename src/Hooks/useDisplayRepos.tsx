import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import image from '../assets/images/logo.png'
import Pagination from '../components/Pagination'

export default function useDisplayRepos(repos: any) {
    const [searchParams, setSearchParams] = useSearchParams()

    const [searchValue, setSearchValue] = useState("")

    const [totalPosts, setTotalPosts] = useState(repos.length)
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 9

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

    console.log("repos start", repos.length);

    const searchParamsLang = searchParams.get("language");
    
    const languageFilterFn = repos.filter((r: any) => r.language === searchParamsLang)
    const searchFilter = repos.filter((r: any) => r.name.toLowerCase().includes(searchValue.toLowerCase()))

    const displayedRepos = searchParamsLang ? languageFilterFn : searchValue.length > 0 ? searchFilter : shownPosts

    // const languages = repos.reduce((values: any, item: any) => {
    //     if (!values.has(item.language)) {
    //         values.push(item.language);
    //     }
    //     return values
    // })

    // let getLanguages = new Set(repos.map((r: any) => r.language))

    // const languages:string[] | unknown[] = Array.from(new Set(repos.map((r: any) => r.language)));

    const languages = ['JavaScript', 'CSS', 'HTML', 'TypeScript', 'Python']

    console.log("lang", languageFilterFn.length);
    console.log("search", searchFilter.length);
    console.log("repos", repos.length);

    const repoElements = displayedRepos.map((repo: any) => (
        <div key={repo.id} className="w-[99%] min-w-[300px] text-gray-light max-w-[350px] min-h-[400px] p-2 shadow shadow-gray rounded-md transition-all duration-300" >
            <picture className='w-full p-4 block'>
                <img src={image} alt="portfolio logo" className='w-full h-[35vh] rounded transition-all duration-300' />
            </picture>
            <div className='flex items-center justify-between py-4 capitalize'>
                <h2 className='text-2xl text-blue font-semibold' title={repo.name}>{repo.name.substring(0, 25)}</h2>
                <span className='text-base text-yellow pb-2'>{repo.language}</span>
            </div>

            <div className='grid grid-cols-2 py-1 text-base capitalize'>
                <span>Date created: {repo.created_at}</span>
                <span>last updated: {repo.updated_at}</span>
                <span>visibility: {repo.visibility}</span>
                <span>branch: {repo.default_branch}</span>
            </div>

            <div className='flex items-center justify-between h-16 capitalize text-sm'>
                {repo.has_pages && <a href={`https:${repo.owner.login}.github.io/${repo.name}/`} target="_blank" rel="noreferrer" className='hover:border rounded hover:text-chocolate hover:bg-transparent transition-all duration-500 px-2 py-1 shadow bg-white text-black'>view live</a>}
                <a title='go to github repository' href={repo.html_url} target="_blank" rel="noreferrer" className='hover:border rounded hover:text-chocolate hover:bg-transparent transition-all duration-500 px-2 py-1 shadow bg-white text-black'>view source code</a>
            </div>
        </div>
    ))

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
                        <option value="">filter</option>
                        {

                            languages.map((r: string, i: number) => (
                                <option
                                    key={i}
                                    value={r}
                                >{r}</option>))
                        }
                    </select>

                    {searchParamsLang ? (
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
                totalPosts={totalPosts}
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