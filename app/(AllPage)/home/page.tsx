function HomePage() {
  return (
    <>
    <div className="mt-[var(--navbar-height)]">
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
    

    
    </>
  );
}

export default HomePage;