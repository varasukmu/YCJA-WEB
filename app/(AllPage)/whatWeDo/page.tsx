function whatWeDo() {
  return (
    <>
    <div className="w-full flex justify-center">
    <div className="mt-[var(--navbar-height)] w-4/5 grid grid-cols-2 gap-10 h-[500px] max-w-[1000px]">
      
      <div className="textHead">WHAT WE DO</div>

      <div className="w-full grid grid-rows-3 gap-5">
        {["OUR MISSION", "OUR STORY", "OUR NETWORK"].map((text, index) => (
        <div key={index} className="flex h-full">
          <div className="w-3 bg-green-950"></div>
          <div
            className="w-full font-bold text-4xl p-5 items-center relative"
            style={{
              backgroundImage: "url('/headPic.jpg')",
              backgroundPosition: `0% ${index * 33}%`,
              backgroundSize: "100% 300%",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50" />
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-start">{text}</div>
          </div>
        </div>
        ))}
      </div>
    </div>
    </div>


    <div className="h-[500px]"></div>
    </>
  )
}
export default whatWeDo