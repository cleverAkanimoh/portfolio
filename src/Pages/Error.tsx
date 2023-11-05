import { useRouteError } from "react-router-dom";

export default function () {
  const error: any = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="block">
        <h2 className="capitalize h-14">{error.statusText || '429'} - {error.name} <a href="https://github.com/cleverAkanimoh?tab=repositories" className="underline text-blue">github repository</a></h2>
        <h2>{error.message}</h2>
      </div>
    </div>
  )
}
