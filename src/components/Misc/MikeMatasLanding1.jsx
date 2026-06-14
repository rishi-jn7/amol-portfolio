import { useRef } from "react";
import { HorizontalGallery } from "./HorizontalGallery";

function Landing() {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleWheel = (e) => {
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY * 3;
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX.current);
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };


  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-5 vh-100">
      <div 
        className="d-flex flex-column flex-md-row mx-auto gap-4 gap-md-0 align-items-md-center justify-content-md-between w-100"
        style={{ maxWidth: '768px' }}
      >
        <div><img src="src/assets/Wordmark.svg" alt="" height={100} /></div>
        <div>About</div>
      </div>

      <div 
        className="carousel-scroll d-flex gap-4 w-100 overflow-x-auto"
        ref={scrollRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="bg-secondary m-1 flex-shrink-0" style={{ height: '250px', width:'400px'}}></div>
        <div className="bg-secondary m-1 flex-shrink-0" style={{ height: '250px', width:'400px'}}></div>
        <div className="bg-secondary m-1 flex-shrink-0" style={{ height: '250px', width:'400px'}}></div>
        <div className="bg-secondary m-1 flex-shrink-0" style={{ height: '250px', width:'400px'}}></div>
        <div className="bg-secondary m-1 flex-shrink-0" style={{ height: '250px', width:'400px'}}></div>
        <div className="bg-secondary m-1 flex-shrink-0" style={{ height: '250px', width:'400px'}}></div>
        <div className="bg-secondary m-1 flex-shrink-0" style={{ height: '250px', width:'400px'}}></div>
        <div className="bg-secondary m-1 flex-shrink-0" style={{ height: '250px', width:'400px'}}></div>
      </div>

      <HorizontalGallery />
    </div>
  );
}

export default Landing;