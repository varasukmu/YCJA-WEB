import Link from "next/link"

export default function page() {
  return (
    <>
      <div className="text-3xl font-bold w-full flex justify-center my-10">This is landing page </div>
      <div className="flex justify-center">
        <Link href="/home" className="button hover:bg-orange-500 ">Click here</Link>
      </div>
    
      <div className="flex justify-center text-gray-200 my-3">last update : 14/2/25 03:50</div>
    
    </>
  )
}