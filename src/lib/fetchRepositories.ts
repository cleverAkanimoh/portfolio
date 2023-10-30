import sleep from "../Hooks/useDelay";

const fetchRepositories = async () => {
  const url = "https://api.github.com/users/cleverAkanimoh/repos";
  await sleep(1000);
  
  const res = await fetch(url);

  if (!res.ok)
    throw {
      message: "Failed to fetch repositories",
      statusText: res.statusText,
      status: res.status,
    };

  const data = await res.json();
  
  return data;
};

export default fetchRepositories;
