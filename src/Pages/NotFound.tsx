import { useWindowTitle } from "../Hooks/useWindowTitle"

export default function NotFound() {
    useWindowTitle('Not Found | Portfolio')

    return (
        <div className="w-[90%] min-w-[300px] max-w-[900px] h-screen flex flex-col items-center justify-center px-3">
            <h2 className="text-[2rem] font-bold">Oops! <span>it seems the page you're looking for does not exist</span></h2>
            <pre className="block">404 - PAGE NOT FOUND</pre>
        </div>

    )
}