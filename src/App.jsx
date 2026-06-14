
// import { useRef, useEffect } from 'react';
// import { NeatGradient } from "@firecms/neat";
// import Flipbook from './components/Flipbook/Flipbook';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/Home/Home'
import { useEffect } from "react";
import { projects } from "./data/data";
// import About from './components/Display/About'
import Project from './pages/Project/Project'
import './App.css'

export default function App() {

  useEffect(() => {
    projects.forEach(project => {
      const img = new Image();
      img.src = project.thumbnail;
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="projects/:slug" element={<Project />} />
      </Route>
    </Routes>
  );
}

// const canvasRef = useRef(null);

// useEffect(() => {
//   if (!canvasRef.current) return;

//   const gardient = new NeatGradient({
//     ref: canvasRef.current,
//     colors: [
//       { color: '#FFFFFF', enabled: true, },
//       { color: '#D5DCDC', enabled: true, }, // #F0E2CE
//       { color: '#D5DCDC', enabled: true, }, // #D5ECEB
//       { color: '#E4E4E4', enabled: true, },
//       { color: '#F6FFFF', enabled: true, },
//     ],
//     speed: 8.5,
//     horizontalPressure: 4,
//     verticalPressure: 5,
//     waveFrequencyX: 4,
//     waveFrequencyY: 3,
//     waveAmplitude: 2,
//     shadows: 4,
//     highlights: 7,
//     colorBrightness: 1,
//     colorSaturation: 0,
//     wireframe: false,
//     colorBlending: 7,
//     backgroundColor: '#00A2FF',
//     backgroundAlpha: 0,
//     grainScale: 100,
//     grainSparsity: 0,
//     grainIntensity: 0.1,
//     grainSpeed: 0.3,
//     resolution: 4,
//     yOffset: 0,
//     yOffsetWaveMultiplier: 1.5,
//     yOffsetColorMultiplier: 1.8,
//     yOffsetFlowMultiplier: 2,
//     flowDistortionA: 0.4,
//     flowDistortionB: 3,
//     flowScale: 3.3,
//     flowEase: 0.53,
//     flowEnabled: true,
//     enableProceduralTexture: false,
//     textureVoidLikelihood: 0.06,
//     textureVoidWidthMin: 10,
//     textureVoidWidthMax: 500,
//     textureBandDensity: 0.8,
//     textureColorBlending: 0.06,
//     textureSeed: 333,
//     textureEase: 0.75,
//     proceduralBackgroundColor: '#003FFF',
//     textureShapeTriangles: 20,
//     textureShapeCircles: 15,
//     textureShapeBars: 15,
//     textureShapeSquiggles: 10,
//     domainWarpEnabled: false,
//     domainWarpIntensity: 0,
//     domainWarpScale: 3,
//     vignetteIntensity: 0,
//     vignetteRadius: 0.8,
//     fresnelEnabled: false,
//     fresnelPower: 2,
//     fresnelIntensity: 0.5,
//     fresnelColor: '#FFFFFF',
//     iridescenceEnabled: false,
//     iridescenceIntensity: 0.5,
//     iridescenceSpeed: 1,
//     bloomIntensity: 0,
//     bloomThreshold: 0.7,
//     chromaticAberration: 0,
//   });

//   const handleScroll = () => {
//     gradient.yOffset = window.scrollY;
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// {/* 
//   <canvas
//     ref={canvasRef}
//     style={{
//       width: "100%",
//       height: "100%",
//       position: "fixed",
//       inset: 0,
//       zIndex: -1,
//       opacity: 0.5,
//     }}
//   /> 
// */}

// {/* <Flipbook /> */ }