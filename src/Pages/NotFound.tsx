import { useWindowTitle } from "../Hooks/useWindowTitle"
import notfound from '../assets/images/notfound.png'

export default function NotFound() {
    useWindowTitle('Not Found | Portfolio')

    return (
        <div className="w-full px-3 h-screen flex items-center justify-center">
            <div className="w-full px-3 min-w-[300px] max-w-[900px] flex flex-col items-center justify-center">
                <img src={notfound} alt='this page does not exist' />
                <h2 className="text-[2rem] text-center font-bold">Oops! <span>it seems the page you're looking for does not exist</span></h2>
                <pre className="block">404 - PAGE NOT FOUND</pre>
            </div>
        </div>

    )
}