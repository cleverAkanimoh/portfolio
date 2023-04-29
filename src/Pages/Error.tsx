import { useRouteError } from "react-router-dom";
import { useWindowTitle } from "../Hooks/useWindowTitle";

export default function () {
  const error: any = useRouteError();

  useWindowTitle(`${error?.status || '429'} - Error | Portfolio`)

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="block">
        <h2 className="capitalize h-14">{error?.status || '429'} - {error.statusText || 'Too many request'} <a href="https://github.com/cleverAkanimoh?tab=repositories" className="underline text-blue">github repository</a></h2>
        <h2>{error.message}</h2>
      </div>
    </div>
  )
}
