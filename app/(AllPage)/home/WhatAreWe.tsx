function WhatAreWe() {
    return (
      <>
      <div className="w-full flex justify-center">
      <div className="mt-[var(--navbar-height)] w-4/5 grid grid-cols-2 gap-10 h-[500px] max-w-[1200px]">
        
        <div>
            <div className="textHead pt-10">WHAT ARE WE</div>
            <div className="pt-10 pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iusto reprehenderit velit dolores. Aliquam magnam qui voluptas suscipit nobis, 
                sequi ea aperiam? Maiores beatae expedita et esse quos adipisci, 
                est facilis rerum, quasi consequuntur eaque reprehenderit?
                Voluptatibus rerum labore corporis fugiat esse, 
                nihil quidem expedita architecto ullam nesciunt, porro suscipit animi.
            </div>
            <div className="pt-5 font-bold text-2xl">--Climate Justice GANG--</div>

        </div>
  
        <div className="w-full grid grid-rows-3 gap-5">
          {["OUR MISSION", "OUR STORY", "OUR NETWORK"].map((text, index) => (
          <div key={index} className="flex h-full">
            <div className="w-3 bg-green-950"></div>
            <div
              className="w-full font-bold text-5xl text-white text-  p-5 items-center relative"
              style={{
                backgroundImage: "url('/wrv.jpg')",
                backgroundPosition: `0% ${index * 33}%`,
                backgroundSize: "100% 400%",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-green-300 opacity-20" />
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
  export default WhatAreWe