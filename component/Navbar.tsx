import Link from "next/link"

function Navbar() {
  return (
    <nav>
        <div className="flex justify-between w-full bg-black">
            <Link href="/home">home</Link>
            <Link href="/whatWeDo">what We Do</Link>
            <Link href="/whatAreWe">what Are We</Link>
            <Link href="/ourArticle">Article</Link>
            <Link href="/joinUs">JOIN US</Link>
        </div>
    </nav>
  )
}
export default Navbar