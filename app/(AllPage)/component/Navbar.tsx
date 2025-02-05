import Link from "next/link"

function Navbar() {
  return (
    <nav className="w-full flex justify-between bg-green-950 text-white p-5 font-bold text-xl">
      <div className="">YCJA</div>
      <div className="flex justify-between w-1/2 font-bold">
          <Link href="/home" className="text-orange-400">HOME</Link>
          <Link href="/whatWeDo">what We Do</Link>
          <Link href="/whatAreWe">what Are We</Link>
          <Link href="/Article">Article</Link>
      </div>
      <Link href="/joinUs" className="button">JOIN US</Link>
    </nav>
  )
}
export default Navbar