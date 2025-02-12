import WhatAreWe from "./WhatAreWe";
import WhatWeDo from "./WhatWeDo";

export default function HomePage() {
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
          <div className="text-5xl font-bold">Youth Climate Justice Advocates</div>
          <div className="text-2xl font-bold mt-8">YCJA</div>
        </div>
      </div>
    </div>
    
    <div id="second-page">
      <WhatAreWe/>
      <div className="h-[100px]"></div>
      <hr className="bg-black mx-20 text-2xl border-2  "/>
      <div className="h-[10px]"></div>
    </div>

    <div id="third-page">
      <WhatWeDo/>
      <div className="h-[100px]"></div>
      <hr className="bg-black mx-20 text-2xl border-2  "/>
      <div className="h-[100px]"></div>
    </div>
    
    
    </>
  );
}
