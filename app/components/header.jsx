
import { Youtube } from "lucide-react"
import { Github } from "lucide-react"

const Header = () => {
  return (
    <nav className="bg-slate-700 text-white p-2 flex justify-between">
      <h1 className="text-3xl">Lazy Loading in Next.js</h1>
      <ul className="mt-1 mr-1">
        <li className="flex">
          <a className="mx-4" href="https://www.youtube.com/watch?v=gq9bBZru78Y" target="_blank"><Youtube /></a>
          <a href="https://github.com/tapascript/nextjs-lazy-load" target="_blank"><Github /></a>
        </li>
      </ul>
    </nav>
  )
}

export default Header