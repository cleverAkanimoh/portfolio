import sleep from "../Hooks/useDelay";

const url = 'https://api.github.com/users/cleverAkanimoh/repos';

const fetchRepositories = async () => {
    // await sleep(2000)
    const res = await fetch(url)
    
    if (!res.ok) throw {
        message: "Failed to fetch repositories",
        statusText: res.statusText,
        status: res.status
    }
    
    const data = await res.json()
    return data
}

export default fetchRepositories;