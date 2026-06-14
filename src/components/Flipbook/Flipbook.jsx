import { forwardRef, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

import coverImg from "../../assets/cover.png"
import './Flipbook.css'

export default function FlipBook() {
  const flipBook = useRef(null);
  const containerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [showTOC, setShowTOC] = useState(false);

  const [bookSize, setBookSize] = useState({ width: 0, height: 0 });
  const [mountKey, setMountKey] = useState(0);

  const pages = import.meta.glob(
    "../../assets/zenith/*.{png,jpg,jpeg}",
    { eager: true }
  );

  const toc = [
    { title: "Cover", page: 0 },
    { title: "Editorial", page: 2 },
    { title: "Photography", page: 6 },
    { title: "Interviews", page: 10 },
    { title: "Fashion", page: 14 },
  ];

  const nextPage = () => {
    flipBook.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    flipBook.current.pageFlip().flipPrev();
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const images = Object.entries(pages)
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, {
        numeric: true,
      })
    )
    .map(([, module]) => module.default);

  return (
    <div
      ref={containerRef}
      className="d-flex flex-column gap-3 justify-content-center align-items-center mt-5 flipbook-container"
      style={{ overflow: "hidden" }}
    >
      <HTMLFlipBook
        width={1241}
        height={1754}
        size="stretch"
        minWidth={276}
        maxWidth={552}
        minHeight={390}
        maxHeight={780}
        maxShadowOpacity={0.1}
        mobileScrollSupport={true}
        className="flipbook"
        ref={flipBook}
        onFlip={(e) => setCurrentPage(e.data)}
      >

        <div className="cover" key={-1}><img src={coverImg} alt="" /></div>
        {images.map((src, index) => (
          <div className='page' key={index}><img src={src} alt="page" /></div>
        ))}
        <div className="cover" key={images.length}><img src={coverImg} alt="" /></div>

      </HTMLFlipBook>

      <div className="controls d-flex gap-2 align-items-center justify-content-center">
        <button className="btn fs-6 p-1" onClick={prevPage}>
          <i className="bi bi-caret-left-square"></i>
        </button>

        {/* <button onClick={() => setShowTOC(!showTOC)}>
          Table of Contents
        </button> */}

        <div className="alert alert-light m-0 fs-6 p-1">
          {currentPage + 1} / {images.length}
        </div>

        <button className="btn fs-6 p-1" onClick={nextPage}>
          <i className="bi bi-caret-right-square"></i>
        </button>

        <button className="btn fs-6 p-1" onClick={toggleFullscreen}>
          <i className="bi bi-arrows-fullscreen"></i>
        </button>
      </div>

    </div>
  );
}