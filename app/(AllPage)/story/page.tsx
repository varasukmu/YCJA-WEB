import Link from "next/link"

export default function story() {
  return (
    <>
    <div className="mt-[var(--navbar-height)]" id="firstPage">
      <div 
        className="h-[450px] text-white"
        style={{ backgroundImage: "url('/headPic.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
        <div
          className="w-full h-full bg-black/70 backdrop-invert backdrop-opacity-10 flex flex-col justify-center items-center"
        >
          <div className="text-5xl font-bold">This is story page</div>
        </div>
      </div>
    </div>



    <div className="h-[100px]"></div>
    <div></div>
    <div>..</div>
    <Link href="../Member" className="button">Our Member</Link>
    </>
  )
}